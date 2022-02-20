import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export const window = {
    w: width,
    h: height
}
export const isSmallDevice =  width < 375
export const vw = width  / 100
export const vh = height / 100

export default { window, isSmallDevice, vw, vh }