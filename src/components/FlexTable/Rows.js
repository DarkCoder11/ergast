import React from 'react';
import {View} from 'react-native';

import Cell from './Cell';

import {sum} from '../../utils';
import {commonStyleSheet} from '../../styles';

export const Row = ({
  data,
  style,
  widthArr,
  height,
  flexArr,
  textStyle,
  ...props
}) => {
  const width = widthArr ? sum(widthArr) : 0;

  const renderCells = () =>
    data.map((item, i) => {
      const flex = flexArr && flexArr[i];
      const wth = widthArr && widthArr[i];

      return (
        <Cell
          key={i}
          data={item}
          width={wth}
          height={height}
          flex={flex}
          textStyle={textStyle}
          {...props}
        />
      );
    });

  return (
    <View
      style={[
        height && {height},
        width && {width},
        commonStyleSheet.row,
        style,
      ]}>
      {renderCells()}
    </View>
  );
};

export const Rows = ({
  data,
  style,
  widthArr,
  heightArr,
  flexArr,
  textStyle,
  ...props
}) => {
  const flex = flexArr ? sum(flexArr) : 0;
  const width = widthArr ? sum(widthArr) : 0;

  const renderRows = () =>
    data.map((item, i) => {
      const height = heightArr && heightArr[i];

      return (
        <Row
          key={i}
          data={item}
          style={style}
          height={height}
          flexArr={flexArr}
          widthArr={widthArr}
          textStyle={textStyle}
          {...props}
        />
      );
    });

  return <View style={[flex && {flex}, width && {width}]}>{renderRows()}</View>;
};
