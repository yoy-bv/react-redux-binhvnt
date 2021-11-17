import tinycolor from 'tinycolor2'

export const Colors = {
  primary: '#05154E',
  secondary: '#19BCFE',

  // color for background
  bg_primary: '#F7FBFF',
  bg_blue_white: 'linear-gradient(180deg, rgba(250, 251, 253, 0.546028) 0.05%, #FEFEFF 84.64%, #FFFFFF 100%)',

  // color for text
  text_primary: '#373473',
  text_secondary: '#BEBEBE',
  text_hight_light: '#2B55EF',

  // social btn color
  fb_color: '#09519B',
  google_color: '#F14436',

  green: '#07CF84',
  yellow: '#F5CF50',
  yellow_light: '#F3E926',
  error: '#D85B46',
  white: '#FFFFFF',
  grey: '#979797',
  transparent: 'transparent'
}

export const alpha = (color, value) => tinycolor(color).setAlpha(value).toRgbString()

export default Colors
