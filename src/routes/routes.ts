import { lazy, LazyExoticComponent } from "react";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

interface Route{
    to: string,
    path: string,
    name: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

type JSXComponent =  () => JSX.Element
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'));

export const routes : Route[] = [
    {
        to: '/shopping',
        path: 'shopping',
        Component: ShoppingPage,
        name: 'Shopping page'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    }
]