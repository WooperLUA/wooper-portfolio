import {Div, I, Input, Label} from "atlas-web/dom";
import {createArchive, createEffect} from "atlas-web";

export const ThemeSelector = () =>
{
    type Theme = 'light' | 'dark';

    const appArchive = createArchive<{theme : Theme}>('appArchive',{
        theme : 'light',
    })

    const toggleChecked = () => appArchive.theme === 'dark'
    const handleThemeSwitch = () => appArchive.theme = appArchive.theme === 'light' ? 'dark' : 'light';

    createEffect(() => {
        if (appArchive.theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    })

    return Div({className : 'p-4'},
        Label({className: 'inline-flex items-center cursor-pointer'},
            I({className: `fa-solid fa-sun text-w-5 h-5 dark:text-white`, ariaHidden: 'true'}),
            Input({className: 'sr-only peer', type: 'checkbox', checked : () => toggleChecked(), onChange: handleThemeSwitch}),
            Div({className: `  relative mx-3 h-6 w-10 rounded-full
                bg-violet-700
                transition-colors

                peer-checked:bg-violet-500

                after:content-['']
                after:absolute
                after:left-[2px]
                after:top-[2px]
                after:h-5
                after:w-5
                after:rounded-full
                after:bg-white
                after:transition-transform

                peer-checked:after:translate-x-4`}),
            I({className: `fa-solid fa-moon text-w-5 h-5 dark:text-white`, ariaHidden: 'true'}),
        ),
    )
}