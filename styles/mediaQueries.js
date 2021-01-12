const bp = {
  mobileS: `330px`,
  mobileM: `400px`,
  mobileL: `480px`,
  tabletS: `600px`,
  tabletL: `768px`,
  desktopXS: `900px`,
  desktopS: `1080px`,
  desktopM: `1200px`,
  desktopL: `1400px`,
};

export const mediaQueries = (key) => {
  console.log(`${bp[key]}`);
  return (style) => `@media (max-width : ${bp[key]}) {${style}}`;
};
