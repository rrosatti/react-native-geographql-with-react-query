import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import useGetCountry from 'state/remote/use-get-country';
import useFavoriteCountry from 'state/local/favorite-country/hooks/use-favorite-country';

import useRemoveFavoriteCountryFromAsyncStorage from 'hooks/use-remove-favorite-country-from-async-storage';

import LoadingOrError from 'components/LoadingOrError';
import CountryInfo from 'components/CountryInfo';
import FavoriteUnfavoriteButton from 'components/FavoriteUnfavoriteButton';

import styles from './styles';

const FavoriteCountry = (): JSX.Element => {
  const {
    favoriteCountry: { id },
  } = useFavoriteCountry();

  const { data, loading, error, refetch } = useGetCountry({
    skip: !id,
    variables: { id },
  });

  const country = React.useMemo(() => data?.country, [data]);

  const { removeData: removeFavoriteCountry } =
    useRemoveFavoriteCountryFromAsyncStorage();

  const EmptyInfo = React.useCallback((): JSX.Element => {
    return (
      <View style={styles.emptyInfoContainer}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text>You haven't favorite any country so far!!</Text>
      </View>
    );
  }, []);

  return !id && !data && !loading ? (
    <EmptyInfo />
  ) : (
    <LoadingOrError
      loading={loading}
      error={error}
      data={data}
      refetch={refetch}
    >
      <ScrollView>
        <SafeAreaView style={styles.container}>
          {country && (
            <View style={styles.contentContainer}>
              <View style={styles.headerContainer}>
                <View style={styles.icon} />
                <View style={styles.headerTextContainer}>
                  <Text style={styles.headerText}>
                    {country && country.name}
                  </Text>
                </View>
                <View style={styles.icon} />
              </View>
              <View style={styles.infoItemsContainer}>
                <CountryInfo country={country} />
              </View>
              <FavoriteUnfavoriteButton
                onPress={removeFavoriteCountry}
                type="unfavorite"
              />
            </View>
          )}
        </SafeAreaView>
      </ScrollView>
    </LoadingOrError>
  );
};

export default FavoriteCountry;
