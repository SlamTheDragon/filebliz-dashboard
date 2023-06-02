import { useLayoutEffect, useState } from 'react';
import Button from '../../common/Button/Button';
import Icon from '../../common/icon';


export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(() => {
        const localThemeValue = window.localStorage.getItem("theme");
        return localThemeValue !== null ? localThemeValue : null;
    });

    useLayoutEffect(() => {
        if (theme !== null) {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);

        window.localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <Button classItem={'primary ctrl'} onclick={toggleTheme}>
            <Icon icon={'fa-moon'}/>
        </Button>
    );
}