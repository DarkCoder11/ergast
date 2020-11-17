import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import {colors} from '../../styles';
import {HorizontalLayout} from '../../layouts';
import {FlexTable, Row, Rows} from '../../components';

const DriversTableScreen = ({
  drivers,
  onPrevPress,
  onNextPress,
  onNamePress,
  prevDisabled,
  nextDisabled,
}) => {
  const tableHead = ['Name', 'Nationality', 'DOB'];
  const tableData = drivers.map((item) => {
    const {givenName, familyName, nationality, dateOfBirth} = item;

    return [
      <TouchableWithoutFeedback onPress={() => onNamePress(item)}>
        <Text style={styles.text}>{`${givenName} ${familyName}`}</Text>
      </TouchableWithoutFeedback>,
      nationality,
      dateOfBirth,
    ];
  });

  return (
    <ScrollView>
      <HorizontalLayout style={styles.container}>
        <View style={styles.header}>
          <Button disabled={prevDisabled} onPress={onPrevPress} title="Prev" />
          <Button disabled={nextDisabled} onPress={onNextPress} title="Next" />
        </View>

        <FlexTable borderStyle={styles.tableBorder}>
          <Row
            data={tableHead}
            style={styles.head}
            textStyle={[styles.text, styles.headText]}
          />
          <Rows
            data={tableData}
            style={styles.dataRow}
            textStyle={styles.text}
          />
        </FlexTable>
      </HorizontalLayout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  tableBorder: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  head: {
    backgroundColor: colors.secondary,
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
  },
  headText: {
    fontWeight: 'bold',
  },
  dataRow: {
    height: 40,
  },
});

export default DriversTableScreen;
