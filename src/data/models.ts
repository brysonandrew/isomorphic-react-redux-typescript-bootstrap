import * as React from 'react';
import { RouteComponentProps } from "react-router-dom";

export interface IDictionary<T> {
    [key: string]: T
}

export interface IPageRoute {
    path: string
    component?: React.SFC<RouteComponentProps<any> | undefined>
}

export interface IParams {
    activePagePath?: string
    activeViewPath?: string
}

export interface IPage {
    name: string
    path: string
    component: JSX.Element
}
