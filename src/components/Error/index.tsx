import React from 'react';
import { View, Text, Button } from 'react-native';

import type { ApolloQueryResult } from '@apollo/client';

import styles from './styles';

interface Props<T> {
  refetch: () => Promise<ApolloQueryResult<T>>;
}

const Error = <T,>({ refetch }: Props<T>): JSX.Element => {
  const handleRefetch = React.useCallback(() => refetch(), [refetch]);

  return (
    <View style={styles.container}>
      <View style={styles.errorMessage}>
        <Text style={styles.errorText}>Sorry, there was an error!</Text>
      </View>
      <View style={styles.button}>
        <Button title="Try again" onPress={handleRefetch} />
      </View>
    </View>
  );
};

export default Error;
