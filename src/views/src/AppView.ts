import {Div, H1, _Structure, H2, _Loop, Span, Footer} from 'atlas-web/dom';
import {Background, Card, ThemeSelector} from "@components";
import {uState} from "atlas-web";

export const AppView = () =>
{
    const ls = uState({
        cards: [
            {
                header:          'Atlas Web',
                description:     'A lightweight, modular, and reactive TypeScript framework for building modern web applications. It focuses on simplicity, performance, and a declarative developer experience.',
                image:           '',
                link:            'https://github.com/WooperLUA/atlas-web',
                textColor:       'text-teal-600 dark:text-teal-500',
                buttonColor:     'hover:border-teal-600 dark:hover:border-teal-500',
                buttonTextColor: 'hover:text-teal-600 dark:hover:text-teal-500',
            },
            {
                header:          'Luna',
                description:     'A lightweight text editor like Nano / Vim / Emacs written in TS with Bun.',
                image:           '',
                link:            'https://github.com/WooperLUA/luna',
                textColor:       'text-violet-600 dark:text-violet-500',
                buttonColor:     'hover:border-violet-600 dark:hover:border-violet-500',
                buttonTextColor: 'hover:text-violet-600 dark:hover:text-violet-500',
            },
            {
                header:          'Argus',
                description:     'A Go program that compares the hashes of folder\'s content to look for tampered files.',
                image:           '',
                link:            'https://github.com/WooperLUA/argus',
                textColor:       'text-sky-600 dark:text-sky-500',
                buttonColor:     'hover:border-sky-600 dark:hover:border-sky-500',
                buttonTextColor: 'hover:text-sky-600 dark:hover:text-sky-500',
            },
            {
                header:          'Quartz CSS',
                description:     'A sleek, modern CSS framework designed to give your projects a clean and elegant look with minimal hassle.',
                image:           '',
                link:            'https://github.com/WooperLUA/quartz_css',
                textColor:       'text-indigo-600 dark:text-indigo-500',
                buttonColor:     'hover:border-indigo-600 dark:hover:border-indigo-500',
                buttonTextColor: 'hover:text-indigo-700 dark:hover:text-indigo-600',
            },
        ]
    })

    return _Structure(
        Background(),
        ThemeSelector(),
        Div({className: 'w-full h-full flex flex-col items-center justify-center'},
            H1({
                className:   `md:text-7xl text-5xl bg-black-gradient dark:bg-white-gradient 
                              bg-clip-text text-transparent  mt-4 leading-[0.9] font-semibold tracking-tighter`,
                textContent: 'Wooper\'s Portfolio'
            }),
            H2({
                    className: 'md:text-3xl text-2xl text-center dark:text-white/60 text-black/60 mt-5 leading-[0.9] tracking-tighter',
                },
                'An', Span({
                    className:   'text-blue-600 dark:text-blue-500 font-semibold',
                    textContent: ' idiot '
                }), 'admires complexity, ',
                'a', Span({
                    className:   'text-violet-600 dark:text-violet-500 font-semibold',
                    textContent: ' genius '
                }), 'admires simplicity.',
            ),
            Div({className: `mt-5 p-10 gap-5 grid md:grid-cols-2 grid-cols-1 items-center justify-center max-h-[calc(100vh-20rem)] overflow-y-auto`},
                _Loop(() => ls.cards,
                    (item) => Card({
                        header:          item?.header,
                        description:     item?.description,
                        image:           item?.image,
                        link:            item?.link,
                        textColor:       item?.textColor,
                        buttonColor:     item?.buttonColor,
                        buttonTextColor: item?.buttonTextColor
                    }))
            ),
            Footer({className: 'absolute bg-black-gradient dark:bg-white-gradient bg-clip-text text-transparent bottom-1 text-md mb-4'},
                'Made using', Span({
                    className:   'text-teal-600 dark:text-teal-500 font-semibold',
                    textContent: ' Atlas Web '
                }),
                ' by', Span({className: 'text-blue-600 dark:text-blue-500 font-semibold', textContent: ' Wooper'})
            ),
        )
    )
}