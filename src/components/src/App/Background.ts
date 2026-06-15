import {Div, Iframe, Video} from "atlas-web/dom";
import {uArchive} from "atlas-web";
import {darkBackground, lightBackground} from '@assets'

export const Background = () =>
{
    const appArchive = uArchive('appArchive', {
        theme: 'light',
    })

    return Div({className: 'spline-container absolute top-0 left-0 w-full h-full -z-10 pointer-events-none transform-gpu'},

        Video({
            src:       lightBackground,
            autoplay: true,
            muted: true,
            loop: true,
            className: () => `w-full h-full object-cover absolute inset-0 transition-all duration-500 ${
                appArchive.theme === 'light' ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`
        }),


        Video({
            src:       darkBackground,
            autoplay: true,
            muted: true,
            loop: true,
            className: () => `w-full h-full object-cover absolute inset-0 transition-all duration-500 ${
                appArchive.theme === 'dark' ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`
        }),

        Div({className: 'absolute inset-0 bg-black/15 pointer-events-none'})
    )
}