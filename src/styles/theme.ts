const colorsLight = {
    primary: '#135ab0',
    secondary: '#ff9800',
    accent: 'rgba(76,245,245,0.82)',
    error: '#f44336',
    npm: '#C43534',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50',
    black: '#000',
    white: '#fff',
    colors: '#675c5c',
    transparent: 'transparent',
    background: '#ffffff',
    bgCard: '#e8e5e5',
    text: '#000000',
    secondaryText: '#404040',
    nav: 'rgba(255, 255, 255, 0.7)',
    navTransparent: 'rgba(255,255,255,0.52)',
    modal: 'rgba(0, 0, 0, 0.1)',
    bgModal: 'white',
    input: '#F5F5F5',
    borderColor: '#b5b5b5',
    shadowInput: 'rgb(178,178,178)',
    icon: '#BBBBBB',
    primaryOpacity: '#075dc0',
    accentOpacity: '#5b2464',
    primaryGradient: 'linear-gradient(to right, #1e40af, #00a2ff)',
    npmGradient: 'linear-gradient(to right, #9c4746, #C43534)',
    accentGradient: 'linear-gradient(to right, #762f82, #da00ff)',
};

const colorsDark = {
    ...colorsLight,
    background: '#0F0F1A',
    primary: '#609fee',
    accent: 'rgb(189,250,250)',
    text: '#ffffff',
    secondaryText: '#bfc0c0',
    bgCard: 'rgba(0, 0, 1, .5)',
    nav: 'rgba(0, 0, 0, .5)',
    navTransparent: 'rgba(30,30,30,0.77)',
    bgModal: '#161616',
    input: '#161616',
    borderColor: '#313538',
    shadowInput: 'rgb(77, 77, 77)',
};

export type ColorType = keyof typeof colorsLight;

const zIndex = {
    min: -1,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    max: 10,
    nav: 20,
    modal: 30,
};

export const themeLight = {
    colors: colorsLight,
    zIndex,
};

export const themeDark = {
    ...themeLight,
    colors: colorsDark,
};
export const mediaQueries = {
    mobile: '@media screen and (max-width: 767px)',
    tablet: '@media screen and (min-width: 768px) and (max-width: 1024px)',
    desktop: '@media screen and (min-width: 1025px)',
};
