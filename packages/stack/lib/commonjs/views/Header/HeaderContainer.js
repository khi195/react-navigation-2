"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderContainer;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _native = require("@react-navigation/native");

var _Header = _interopRequireDefault(require("./Header"));

var _HeaderStyleInterpolators = require("../../TransitionConfigs/HeaderStyleInterpolators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function HeaderContainer({
  mode,
  scenes,
  layout,
  insets,
  getFocusedRoute,
  getPreviousRoute,
  onContentHeightChange,
  gestureDirection,
  styleInterpolator,
  style
}) {
  const focusedRoute = getFocusedRoute();
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    pointerEvents: "box-none",
    style: style
  }, scenes.slice(-3).map((scene, i, self) => {
    if (mode === 'screen' && i !== self.length - 1 || !scene) {
      return null;
    }

    const {
      options
    } = scene.descriptor;
    const isFocused = focusedRoute.key === scene.route.key;
    const previousRoute = getPreviousRoute({
      route: scene.route
    });
    let previous;

    if (previousRoute) {
      // The previous scene will be shortly before the current scene in the array
      // So loop back from current index to avoid looping over the full array
      for (let j = i - 1; j >= 0; j--) {
        const s = self[j];

        if (s && s.route.key === previousRoute.key) {
          previous = s;
          break;
        }
      }
    } // If the screen is next to a headerless screen, we need to make the header appear static
    // This makes the header look like it's moving with the screen


    const previousScene = self[i - 1];
    const nextScene = self[i + 1];
    const isHeaderStatic = previousScene && previousScene.descriptor.options.headerShown === false && // We still need to animate when coming back from next scene
    // A hacky way to check this is if the next scene exists
    !nextScene || nextScene && nextScene.descriptor.options.headerShown === false;
    const props = {
      mode,
      layout,
      insets,
      scene,
      previous,
      navigation: scene.descriptor.navigation,
      styleInterpolator: mode === 'float' ? isHeaderStatic ? gestureDirection === 'vertical' || gestureDirection === 'vertical-inverted' ? _HeaderStyleInterpolators.forSlideUp : gestureDirection === 'horizontal-inverted' ? _HeaderStyleInterpolators.forSlideRight : _HeaderStyleInterpolators.forSlideLeft : styleInterpolator : _HeaderStyleInterpolators.forNoAnimation
    };
    return /*#__PURE__*/React.createElement(_native.NavigationContext.Provider, {
      key: scene.route.key,
      value: scene.descriptor.navigation
    }, /*#__PURE__*/React.createElement(_native.NavigationRouteContext.Provider, {
      value: scene.route
    }, /*#__PURE__*/React.createElement(_reactNative.View, {
      onLayout: onContentHeightChange ? e => onContentHeightChange({
        route: scene.route,
        height: e.nativeEvent.layout.height
      }) : undefined,
      pointerEvents: isFocused ? 'box-none' : 'none',
      accessibilityElementsHidden: !isFocused,
      importantForAccessibility: isFocused ? 'auto' : 'no-hide-descendants',
      style: // Avoid positioning the focused header absolutely
      // Otherwise accessibility tools don't seem to be able to find it
      mode === 'float' && !isFocused || options.headerTransparent ? styles.header : null
    }, options.headerShown !== false ? options.header !== undefined ? options.header(props) : /*#__PURE__*/React.createElement(_Header.default, props) : null)));
  }));
}

const styles = _reactNative.StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  }
});
//# sourceMappingURL=HeaderContainer.js.map