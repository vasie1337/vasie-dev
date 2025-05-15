#!/bin/bash
set -e

# Read the config file and output as JSON
CONFIG=$(cat ${CONFIG_FILE})
echo "services=$(echo $CONFIG | jq -c '.services')" >> $GITHUB_OUTPUT

# Extract service names for later use
NAMES=$(cat ${CONFIG_FILE} | jq -r '.services[].name' | jq -R -s -c 'split("\n") | map(select(length > 0))')
echo "names=$NAMES" >> $GITHUB_OUTPUT