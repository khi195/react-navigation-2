import * as React from 'react';
import { StackNavigationState, Route } from '@react-navigation/native';
import { StackNavigationHelpers, StackNavigationConfig, StackDescriptorMap } from '../../types';
declare type Props = StackNavigationConfig & {
    state: StackNavigationState;
    navigation: StackNavigationHelpers;
    descriptors: StackDescriptorMap;
};
declare type State = {
    routes: Route<string>[];
    previousRoutes: Route<string>[];
    previousDescriptors: StackDescriptorMap;
    openingRouteKeys: string[];
    closingRouteKeys: string[];
    replacingRouteKeys: string[];
    descriptors: StackDescriptorMap;
};
export default class StackView extends React.Component<Props, State> {
    static getDerivedStateFromProps(props: Readonly<Props>, state: Readonly<State>): {
        routes: any[];
        previousRoutes: any[];
        descriptors: StackDescriptorMap;
        previousDescriptors: StackDescriptorMap;
        openingRouteKeys?: undefined;
        closingRouteKeys?: undefined;
        replacingRouteKeys?: undefined;
    } | {
        routes: any;
        previousRoutes: any;
        previousDescriptors: StackDescriptorMap;
        openingRouteKeys: string[];
        closingRouteKeys: string[];
        replacingRouteKeys: string[];
        descriptors: any;
    };
    state: State;
    private getGesturesEnabled;
    private getPreviousRoute;
    private renderScene;
    private renderHeader;
    private handleOpenRoute;
    private handleCloseRoute;
    private handleTransitionStart;
    private handleTransitionEnd;
    render(): JSX.Element;
}
export {};
