export const lighttheme = {
    colors: {
        primary: '#fff',
        secondary: '#333'
    },
    background: {
        primary: '#0074D9',
        secondary: '#fff',
        tertiary: '#eee'
    },
    imageFilter: 'invert(90%)'
}

export const darktheme = {
    colors: {
        primary: '#fff',
        secondary: '#fff'
    },
    background: {
        primary: '#0074D9',
        secondary: '#333',
        tertiary: '#555'
    },
    imageFilter: 'invert(20%)'
}

export const getTheme = (mode = 'light', primaryColor = '#0074D9') => {
    if(mode === 'light') {
        return  {
            colors: {
                primary: '#fff',
                secondary: '#333'
            },
            background: {
                primary: primaryColor,
                secondary: '#fff',
                tertiary: '#eee'
            },
            imageFilter: 'invert(90%)'
        }
    } else {
        return {
            colors: {
                primary: '#fff',
                secondary: '#fff'
            },
            background: {
                primary: primaryColor,
                secondary: '#333',
                tertiary: '#555'
            },
            imageFilter: 'invert(20%)'
        }
    }
}