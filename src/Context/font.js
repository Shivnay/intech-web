import React from 'react';

export const font = {
    scale: 0
}

export const FontContext = React.createContext({
    font: font.scale,
    onFontSizeChange: () => {}
})