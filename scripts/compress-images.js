const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../src/assets/team_photos');
const outputDir = path.join(__dirname, '../src/assets/team_photos_optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all jpg files
const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.jpg'));

async function processImages() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    
    try {
      // Keep original orientation by setting rotate to false
      await sharp(inputPath, { failOnError: false })
        .rotate() // Auto-rotate based on EXIF orientation
        .resize(300, 300, { 
          fit: 'cover',
          position: 'center',
          withoutEnlargement: true
        }) // Resize to 2x display size for high DPI screens
        .jpeg({ 
          quality: 80,
          progressive: true,
          force: false
        }) // Progressive loading
        .toFile(outputPath);
      
      console.log(`Compressed ${file}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
  console.log('Image compression complete!');
}

processImages(); 