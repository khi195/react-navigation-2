import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Card from './Card';
import HeaderHeightContext from '../../utils/HeaderHeightContext';
const EPSILON = 0.1;

function CardContainer({
  active,
  cardOverlay,
  cardOverlayEnabled,
  cardShadowEnabled,
  cardStyle,
  cardStyleInterpolator,
  closing,
  gesture,
  focused,
  gestureDirection,
  gestureEnabled,
  gestureResponseDistance,
  gestureVelocityImpact,
  getPreviousRoute,
  getFocusedRoute,
  headerMode,
  headerShown,
  headerStyleInterpolator,
  headerTransparent,
  headerHeight,
  onHeaderHeightChange,
  index,
  layout,
  onCloseRoute,
  onOpenRoute,
  onPageChangeCancel,
  onPageChangeConfirm,
  onPageChangeStart,
  onTransitionEnd,
  onTransitionStart,
  previousScene,
  renderHeader,
  renderScene,
  safeAreaInsetBottom,
  safeAreaInsetLeft,
  safeAreaInsetRight,
  safeAreaInsetTop,
  scene,
  transitionSpec
}) {
  React.useEffect(() => {
    onPageChangeConfirm === null || onPageChangeConfirm === void 0 ? void 0 : onPageChangeConfirm();
  }, [active, onPageChangeConfirm]);

  const handleOpen = () => {
    onTransitionEnd === null || onTransitionEnd === void 0 ? void 0 : onTransitionEnd({
      route: scene.route
    }, false);
    onOpenRoute({
      route: scene.route
    });
  };

  const handleClose = () => {
    onTransitionEnd === null || onTransitionEnd === void 0 ? void 0 : onTransitionEnd({
      route: scene.route
    }, true);
    onCloseRoute({
      route: scene.route
    });
  };

  const handleTransitionStart = ({
    closing
  }) => {
    if (active && closing) {
      onPageChangeConfirm === null || onPageChangeConfirm === void 0 ? void 0 : onPageChangeConfirm();
    } else {
      onPageChangeCancel === null || onPageChangeCancel === void 0 ? void 0 : onPageChangeCancel();
    }

    onTransitionStart === null || onTransitionStart === void 0 ? void 0 : onTransitionStart({
      route: scene.route
    }, closing);
  };

  const insets = {
    top: safeAreaInsetTop,
    right: safeAreaInsetRight,
    bottom: safeAreaInsetBottom,
    left: safeAreaInsetLeft
  };
  const {
    colors
  } = useTheme();
  const [pointerEvents, setPointerEvents] = React.useState('box-none');
  React.useEffect(() => {
    var _scene$progress$next, _scene$progress$next$;

    // `addListener` may not exist on web and older versions of React Native
    // @ts-ignore
    const listener = (_scene$progress$next = scene.progress.next) === null || _scene$progress$next === void 0 ? void 0 : (_scene$progress$next$ = _scene$progress$next.addListener) === null || _scene$progress$next$ === void 0 ? void 0 : _scene$progress$next$.call(_scene$progress$next, ({
      value
    }) => {
      setPointerEvents(value <= EPSILON ? 'box-none' : 'none');
    });
    return () => {
      if (listener) {
        var _scene$progress$next2, _scene$progress$next3;

        // @ts-ignore
        (_scene$progress$next2 = scene.progress.next) === null || _scene$progress$next2 === void 0 ? void 0 : (_scene$progress$next3 = _scene$progress$next2.removeListener) === null || _scene$progress$next3 === void 0 ? void 0 : _scene$progress$next3.call(_scene$progress$next2, listener);
      }
    };
  }, [pointerEvents, scene.progress.next]);
  return /*#__PURE__*/React.createElement(Card, {
    index: index,
    gestureDirection: gestureDirection,
    layout: layout,
    insets: insets,
    gesture: gesture,
    current: scene.progress.current,
    next: scene.progress.next,
    closing: closing,
    onOpen: handleOpen,
    onClose: handleClose,
    overlay: cardOverlay,
    overlayEnabled: cardOverlayEnabled,
    shadowEnabled: cardShadowEnabled,
    onTransitionStart: handleTransitionStart,
    onGestureBegin: onPageChangeStart,
    onGestureCanceled: onPageChangeCancel,
    gestureEnabled: gestureEnabled,
    gestureResponseDistance: gestureResponseDistance,
    gestureVelocityImpact: gestureVelocityImpact,
    transitionSpec: transitionSpec,
    styleInterpolator: cardStyleInterpolator,
    accessibilityElementsHidden: !focused,
    importantForAccessibility: focused ? 'auto' : 'no-hide-descendants',
    pointerEvents: active ? 'box-none' : pointerEvents,
    containerStyle: headerMode === 'float' && !headerTransparent && headerShown !== false ? {
      marginTop: headerHeight
    } : null,
    contentStyle: [{
      backgroundColor: colors.background
    }, cardStyle],
    style: StyleSheet.absoluteFill
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.scene
  }, /*#__PURE__*/React.createElement(HeaderHeightContext.Provider, {
    value: headerHeight
  }, renderScene({
    route: scene.route
  }))), headerMode === 'screen' ? renderHeader({
    mode: 'screen',
    layout,
    insets,
    scenes: [previousScene, scene],
    getPreviousRoute,
    getFocusedRoute,
    gestureDirection,
    styleInterpolator: headerStyleInterpolator,
    onContentHeightChange: onHeaderHeightChange
  }) : null));
}

export default React.memo(CardContainer);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  scene: {
    flex: 1
  }
});
//# sourceMappingURL=CardContainer.js.map