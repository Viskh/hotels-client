import { ThemeSwitcher } from 'shared/ui/theme-switcher';

import { useTheme } from '../model/hooks';

export const ChangeThemeButton = () => {
    const { theme, changeTheme } = useTheme();

    return <ThemeSwitcher theme={theme} changeTheme={changeTheme} />;
};
