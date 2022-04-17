import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import CountryTile from 'components/CountryTile';
import type { CountryTileProps } from 'components/CountryTile';

import styles, { Constants as StyleConstants } from './styles';

interface CountryListProps {
  countries: CountryTileProps[];
}

const CountryList = ({ countries }: CountryListProps): JSX.Element => {
  const tabBarHeight = useBottomTabBarHeight();

  const renderItem = React.useCallback(
    ({ item }: { item: CountryTileProps; index: number }): JSX.Element => (
      <CountryTile {...item} />
    ),
    [],
  );

  const ItemSeparator = React.useCallback(
    (): JSX.Element => <View style={styles.itemSeparator} />,
    [],
  );

  return (
    <SafeAreaView>
      <FlatList
        data={countries}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.contentContainer,
          {
            paddingBottom:
              tabBarHeight || 0 + StyleConstants.defaultPaddingBottom,
          },
        ]}
        ItemSeparatorComponent={ItemSeparator}
      />
    </SafeAreaView>
  );
};

export default CountryList;
