import * as React from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { Route } from '@react-navigation/native';
import { Props as HeaderContainerProps } from '../Header/HeaderContainer';
import { Scene, Layout, StackHeaderMode, TransitionPreset } from '../../types';
declare type Props = TransitionPreset & {
    index: number;
    active: boolean;
    focused: boolean;
    closing: boolean;
    layout: Layout;
    gesture: Animated.Value;
    previousScene?: Scene<Route<string>>;
    scene: Scene<Route<string>>;
    safeAreaInsetTop: number;
    safeAreaInsetRight: number;
    safeAreaInsetBottom: number;
    safeAreaInsetLeft: number;
    cardOverlay?: (props: {
        style: StyleProp<ViewStyle>;
    }) => React.ReactNode;
    cardOverlayEnabled?: boolean;
    cardShadowEnabled?: boolean;
    cardStyle?: StyleProp<ViewStyle>;
    getPreviousRoute: (props: {
        route: Route<string>;
    }) => Route<string> | undefined;
    getFocusedRoute: () => Route<string>;
    renderHeader: (props: HeaderContainerProps) => React.ReactNode;
    renderScene: (props: {
        route: Route<string>;
    }) => React.ReactNode;
    onOpenRoute: (props: {
        route: Route<string>;
    }) => void;
    onCloseRoute: (props: {
        route: Route<string>;
    }) => void;
    onTransitionStart?: (props: {
        route: Route<string>;
    }, closing: boolean) => void;
    onTransitionEnd?: (props: {
        route: Route<string>;
    }, closing: boolean) => void;
    onPageChangeStart?: () => void;
    onPageChangeConfirm?: () => void;
    onPageChangeCancel?: () => void;
    gestureEnabled?: boolean;
    gestureResponseDistance?: {
        vertical?: number;
        horizontal?: number;
    };
    gestureVelocityImpact?: number;
    headerMode: StackHeaderMode;
    headerShown?: boolean;
    headerTransparent?: boolean;
    headerHeight: number;
    onHeaderHeightChange: (props: {
        route: Route<string>;
        height: number;
    }) => void;
};
declare function CardContainer({ active, cardOverlay, cardOverlayEnabled, cardShadowEnabled, cardStyle, cardStyleInterpolator, closing, gesture, focused, gestureDirection, gestureEnabled, gestureResponseDistance, gestureVelocityImpact, getPreviousRoute, getFocusedRoute, headerMode, headerShown, headerStyleInterpolator, headerTransparent, headerHeight, onHeaderHeightChange, index, layout, onCloseRoute, onOpenRoute, onPageChangeCancel, onPageChangeConfirm, onPageChangeStart, onTransitionEnd, onTransitionStart, previousScene, renderHeader, renderScene, safeAreaInsetBottom, safeAreaInsetLeft, safeAreaInsetRight, safeAreaInsetTop, scene, transitionSpec, }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof CardContainer>;
export default _default;
