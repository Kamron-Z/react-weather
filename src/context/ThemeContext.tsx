import React from "react";

interface Props {
    theme: Theme;
    changeTheme: (theme: Theme) => void
}

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export const ThemeContext = React.createContext<Props>({
    theme: Theme.LIGHT,
    changeTheme: () => {}
})