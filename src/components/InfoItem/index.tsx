import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem = ({ label, value }: InfoItemProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`${label}: `}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default InfoItem;
