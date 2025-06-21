function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    const name = item.replace('./', '').replace(/\.\w+$/, '');
    images[name] = r(item);
  });
  return images;
}

const partnerLogos = importAll(require.context('./partners', false, /\.(png|jpe?g|svg)$/));

export default partnerLogos; 