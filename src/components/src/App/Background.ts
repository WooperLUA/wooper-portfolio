import {Div, Iframe} from "atlas-web/dom";
import {uArchive} from "atlas-web";

export const Background = () =>
{
    const appArchive = uArchive('appArchive', {
        theme: 'light',
    })

    return Div({className: 'spline-container absolute top-0 left-0 w-full h-full -z-10 pointer-events-none'},

        Iframe({
            src:         'https://my.spline.design/twistcopy-CPActtgUfoQoOToZfH4Pt18Q',
            frameBorder: '0', width: '100%', height: '100%',
            className:   () => `absolute inset-0 transition-all duration-500 ${
                appArchive.theme === 'light' ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`
        }),


        Iframe({
            src:         'https://my.spline.design/glasswave-6HLEnvJfCRsq1aKT2xqlgme7',
            frameBorder: '0', width: '100%', height: '100%',
            style : {filter : 'brightness(75%)'},
            className:   () => `absolute inset-0 transition-all duration-500 ${
                appArchive.theme === 'dark' ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`
        }),

        Div({className: 'absolute inset-0 bg-black/15 pointer-events-none'})
    )
}