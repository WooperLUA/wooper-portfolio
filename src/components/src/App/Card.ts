import {Button, Div, H3, I, P, Span} from "atlas-web/dom";
import {uArchive} from "atlas-web";

interface CardProps
{
    header: string;
    description: string;
    image: string;
    link: string;
    textColor: string;
    buttonColor: string;
    buttonTextColor: string;
}

export const Card = ({
                         header,
                         description,
                         image,
                         link,
                         textColor,
                         buttonColor,
                         buttonTextColor,
                     }: CardProps) =>
{
    const appArchive = uArchive('appArchive', {
        theme: 'light'
    })
    return (
        Div({
                className: `w-full max-w-xl h-50 ring-1 ring-black/5 dark:ring-white/15 rounded-2xl 
                            pt-4 pr-4 pb-4 pl-4  shadow-lg
                            bg-[rgba(150,150,150,0.08)]`,
                style:     {backdropFilter: 'blur(20px)'}
            },
            Div({className: 'flex flex-col items-start justify-start h-full'},
                H3({
                    className:   'text-2xl ' + textColor + ' font-semibold tracking-tight',
                    textContent: header
                }),
                //Img({className: 'rounded-full w-full h-full object-cover', src: image}),
                P({
                    className: `text-sm line-clamp-3 md:line-clamp-none break-words dark:text-white/70 text-black/70 mt-0.5`, textContent: description
                }),
                Div({className: 'w-full mt-auto pt-4 relative z-10 flex items-center justify-center'},
                    Button({
                            className: `appearance-none bg-transparent inline-flex border-1 border-zinc-400 transition-all overflow-hidden backdrop-blur-md w-75 h-12 
                            rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative
                            items-center
                            dark:text-white
                            hover:scale-105 hover:shadow-xl hover:border-2 ${buttonColor} ${buttonTextColor}
                            active:scale-95`,
                            onclick:   () =>
                                       {
                                           window.open(link, '_blank')?.focus();
                                       }
                        },
                        I({
                            className: () => `${appArchive.theme === 'dark' ? 'fa-regular' : 'fa-solid'} fa-compass ml-4 text-2xl`
                        }),
                        Span({
                            className:   `inline-flex cursor-pointer items-center justify-center ${buttonTextColor}
                              text-md font-medium w-full h-full rounded-full pt-1 pr-8 pb-1`,
                            textContent: 'Discover'
                        }),
                    )
                )
            )
        )
    )
}