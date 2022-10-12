import React from "react";

interface Props {
    theme: string;
    changeTheme: (theme: string) => void
}

export const ThemeContext = React.createContext<Props>({
    theme: '',
    changeTheme: () => {}
})