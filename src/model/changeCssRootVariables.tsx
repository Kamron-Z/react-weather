import {Theme} from "../context/ThemeContext";

export const changeCssRootVariables = (theme: Theme) => {
    const root = document.querySelector(':root') as HTMLElement;

    const components = [
        'body-background',
        'components-background',
        'cards-background',
        'cards-shadowBox',
        'cards-fontColor'
    ]

    components.forEach((component) => {
        root.style.setProperty(
            `--${component}-default`,
            `var(--${component}-${theme})`
        )
    })
}