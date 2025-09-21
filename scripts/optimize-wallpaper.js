const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeWallpaper() {
  const inputPath = path.join(__dirname, '../public/wallpaper.png');
  const outputDir = path.join(__dirname, '../public');
  
  console.log('🎨 Starting wallpaper optimization...');
  
  try {
    // Check if original exists
    if (!fs.existsSync(inputPath)) {
      console.error('❌ Original wallpaper.png not found');
      return;
    }

    // Create WebP version (best compression)
    await sharp(inputPath)
      .resize(1920, 1080, { 
        fit: 'cover',
        position: 'center'
      })
      .webp({ 
        quality: 85,
        effort: 6
      })
      .toFile(path.join(outputDir, 'wallpaper.webp'));
    
    // Create AVIF version (even better compression)
    await sharp(inputPath)
      .resize(1920, 1080, { 
        fit: 'cover',
        position: 'center'
      })
      .avif({ 
        quality: 80,
        effort: 4
      })
      .toFile(path.join(outputDir, 'wallpaper.avif'));

    // Create optimized JPEG fallback
    await sharp(inputPath)
      .resize(1920, 1080, { 
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ 
        quality: 85,
        progressive: true,
        mozjpeg: true
      })
      .toFile(path.join(outputDir, 'wallpaper.jpg'));

    // Create smaller versions for mobile/tablet
    await sharp(inputPath)
      .resize(1024, 576, { 
        fit: 'cover',
        position: 'center'
      })
      .webp({ 
        quality: 80,
        effort: 6
      })
      .toFile(path.join(outputDir, 'wallpaper-mobile.webp'));

    await sharp(inputPath)
      .resize(1024, 576, { 
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ 
        quality: 80,
        progressive: true
      })
      .toFile(path.join(outputDir, 'wallpaper-mobile.jpg'));

    // Get file sizes
    const sizes = {
      original: fs.statSync(inputPath).size,
      webp: fs.statSync(path.join(outputDir, 'wallpaper.webp')).size,
      avif: fs.statSync(path.join(outputDir, 'wallpaper.avif')).size,
      jpg: fs.statSync(path.join(outputDir, 'wallpaper.jpg')).size,
      mobileWebp: fs.statSync(path.join(outputDir, 'wallpaper-mobile.webp')).size,
      mobileJpg: fs.statSync(path.join(outputDir, 'wallpaper-mobile.jpg')).size,
    };

    console.log('✅ Wallpaper optimization complete!');
    console.log(`📊 File sizes:`);
    console.log(`   Original PNG: ${(sizes.original / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Desktop WebP: ${(sizes.webp / 1024).toFixed(0)}KB (${((1 - sizes.webp / sizes.original) * 100).toFixed(1)}% smaller)`);
    console.log(`   Desktop AVIF: ${(sizes.avif / 1024).toFixed(0)}KB (${((1 - sizes.avif / sizes.original) * 100).toFixed(1)}% smaller)`);
    console.log(`   Desktop JPG:  ${(sizes.jpg / 1024).toFixed(0)}KB (${((1 - sizes.jpg / sizes.original) * 100).toFixed(1)}% smaller)`);
    console.log(`   Mobile WebP:  ${(sizes.mobileWebp / 1024).toFixed(0)}KB`);
    console.log(`   Mobile JPG:   ${(sizes.mobileJpg / 1024).toFixed(0)}KB`);

  } catch (error) {
    console.error('❌ Error optimizing wallpaper:', error);
  }
}

optimizeWallpaper();
