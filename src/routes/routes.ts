import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

interface Route{
    to: string,
    path: string,
    name: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

type JSXComponent =  () => JSX.Element
const lazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/components/LazyLayout'));

export const routes : Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: lazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]