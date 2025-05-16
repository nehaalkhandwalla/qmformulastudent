// Use dynamic imports for team photos
// This improves performance by only loading images when needed
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => { 
    // Extract just the filename without extension
    const name = item.replace('./', '').replace('.jpg', '');
    images[name] = r(item);
  });
  return images;
}

// Using the optimized images
const photos = importAll(require.context('./team_photos_optimized', false, /\.(png|jpe?g|svg)$/));

export default photos;

  