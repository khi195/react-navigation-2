import * as React from 'react';
import { Animated } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { Route, StackNavigationState } from '@react-navigation/native';
import { Props as HeaderContainerProps } from '../Header/HeaderContainer';
import { Layout, StackHeaderMode, StackCardMode, Scene, StackDescriptorMap } from '../../types';
declare type GestureValues = {
    [key: string]: Animated.Value;
};
declare type Props = {
    mode: StackCardMode;
    insets: EdgeInsets;
    state: StackNavigationState;
    descriptors: StackDescriptorMap;
    routes: Route<string>[];
    openingRouteKeys: string[];
    closingRouteKeys: string[];
    onOpenRoute: (props: {
        route: Route<string>;
    }) => void;
    onCloseRoute: (props: {
        route: Route<string>;
    }) => void;
    getPreviousRoute: (props: {
        route: Route<string>;
    }) => Route<string> | undefined;
    getGesturesEnabled: (props: {
        route: Route<string>;
    }) => boolean;
    renderHeader: (props: HeaderContainerProps) => React.ReactNode;
    renderScene: (props: {
        route: Route<string>;
    }) => React.ReactNode;
    headerMode: StackHeaderMode;
    onTransitionStart: (props: {
        route: Route<string>;
    }, closing: boolean) => void;
    onTransitionEnd: (props: {
        route: Route<string>;
    }, closing: boolean) => void;
    onPageChangeStart?: () => void;
    onPageChangeConfirm?: () => void;
    onPageChangeCancel?: () => void;
};
declare type State = {
    routes: Route<string>[];
    descriptors: StackDescriptorMap;
    scenes: Scene<Route<string>>[];
    gestures: GestureValues;
    layout: Layout;
    headerHeights: Record<string, number>;
};
export default class CardStack extends React.Component<Props, State> {
    static getDerivedStateFromProps(props: Props, state: State): {
        routes: any[];
        scenes: Scene<any>[];
        gestures: GestureValues;
        descriptors: StackDescriptorMap;
        headerHeights: Record<string, number>;
    } | null;
    constructor(props: Props);
    private handleLayout;
    private handleHeaderLayout;
    private getFocusedRoute;
    render(): JSX.Element;
}
export {};
