import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';

import {colors} from '../../styles';
import {HorizontalLayout} from '../../layouts';

const DriverScreen = ({
  name,
  infoUrl,
  onUrlPress,
  dateOfBirth,
  nationality,
}) => (
  <ScrollView>
    <HorizontalLayout style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text>
        Date of Birth:
        <Text style={styles.date}>{dateOfBirth}</Text>
      </Text>
      <Text>
        Nationality: <Text style={styles.nationality}>{nationality}</Text>
      </Text>
      <Text>
        Information:{' '}
        <Text style={styles.url} onPress={onUrlPress}>
          {infoUrl}
        </Text>
      </Text>
    </HorizontalLayout>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  url: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    textDecorationColor: colors.black,
  },
  date: {
    fontSize: 16,
    color: colors.primary,
  },
  nationality: {
    fontStyle: 'italic',
  },
});

export default DriverScreen;
