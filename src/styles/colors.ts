const BaseColors = {
  black: 'rgba(1, 1, 1, 1)',
  white: 'rgba(255, 255, 255, 1)',
};

const CustomColors = {
  blackCoral: 'rgba(70, 83, 98, 1)', // InfoItem's value color
  dartmouthGreen: 'rgba(48, 107, 52, 1)', // "favorite button" background color
  englishVermillion: 'rgba(214, 69, 80, 1)', // "unfavorite button" background color
  graniteGray: 'rgba(102, 102, 110, 1)', // secondary text color on Country Tile
  platinum: 'rgba(230, 230, 233, 1)', // Country Tile's background color
};

const Colors = {
  ...BaseColors,
  ...CustomColors,
};

export default Colors;
