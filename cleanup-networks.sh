#!/bin/bash
# Cleanup script for Docker network issues
# Run this script on your VPS to fix label mismatch problems

set -e

# Detect project name from current directory
PROJECT_NAME=$(basename "$(pwd)")
echo "Project name detected as: $PROJECT_NAME"

# Cleanup networks with potential label issues
NETWORK_NAME="${PROJECT_NAME}-production-network"
echo "Looking for network: $NETWORK_NAME"

if docker network ls | grep -q "$NETWORK_NAME"; then
  echo "Found network $NETWORK_NAME - checking for connected containers"
  
  # Get containers connected to this network
  CONTAINERS=$(docker network inspect -f '{{range .Containers}}{{.Name}} {{end}}' "$NETWORK_NAME" 2>/dev/null || echo "")
  
  # Disconnect any containers from the network
  for container in $CONTAINERS; do
    if [ -n "$container" ]; then
      echo "Disconnecting container $container from network $NETWORK_NAME"
      docker network disconnect -f "$NETWORK_NAME" "$container" || true
    fi
  done
  
  # Stop any containers using the project name
  echo "Stopping any containers with project name prefix..."
  docker ps -a | grep "$PROJECT_NAME" | awk '{print $1}' | xargs -r docker stop || true
  
  # Remove the network
  echo "Removing network $NETWORK_NAME"
  docker network rm "$NETWORK_NAME" || true
else
  echo "Network $NETWORK_NAME not found"
fi

# Check for any other orphaned networks
echo "Checking for other potential orphaned networks..."
docker network ls | grep "$PROJECT_NAME" || echo "No other project networks found"

echo "Cleanup complete. Now try running your deployment again." 