import React from 'react';
import {View} from 'react-native';

const FlexTable = ({borderStyle, children, style}) => {
  const renderChildren = () =>
    React.Children.map(children, (child) =>
      React.cloneElement(
        child,
        borderStyle && child.type.displayName !== 'ScrollView'
          ? {borderStyle}
          : {},
      ),
    );

  const borderLeftWidth = (borderStyle && borderStyle.borderWidth) || 0;
  const borderBottomWidth = borderLeftWidth;
  const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

  return (
    <View
      style={[
        style,
        {
          borderLeftWidth,
          borderBottomWidth,
          borderColor,
        },
      ]}>
      {renderChildren()}
    </View>
  );
};

export default FlexTable;
