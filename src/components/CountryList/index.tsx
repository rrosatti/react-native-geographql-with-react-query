import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import CountryTile from 'components/CountryTile';
import type { CountryTileProps } from 'components/CountryTile';

import styles, { Constants as StyleConstants } from './styles';

interface CountryListProps {
  countries: CountryTileProps[];
  onEndReached: () => void;
  ListFooterComponent:
    | React.ReactElement<
        CountryTileProps,
        string | React.JSXElementConstructor<CountryTileProps>
      >
    | React.ComponentType<CountryTileProps>
    | null
    | undefined;
  onMomentumScrollBegin: () => void;
}

const CountryList = ({
  countries,
  onEndReached,
  ListFooterComponent,
  onMomentumScrollBegin,
}: CountryListProps): JSX.Element => {
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
        onEndReachedThreshold={0.01}
        onEndReached={onEndReached}
        ListFooterComponent={ListFooterComponent}
        onMomentumScrollBegin={onMomentumScrollBegin}
      />
    </SafeAreaView>
  );
};

export default CountryList;
