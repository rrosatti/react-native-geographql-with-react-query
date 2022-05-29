import React from 'react';
import { View } from 'react-native';

import InfoItem from 'components/InfoItem';

import type { GetCountry } from 'state/remote/__generated__/default';

import {
  StyledEmojiContainerView,
  StyledEmojiText,
  StyledInfoItemContainerView,
} from './styled-components';

interface CountryDetailProps {
  country: GetCountry.Country | null | undefined;
}

const CountryInfo = ({ country }: CountryDetailProps): JSX.Element => {
  return country ? (
    <>
      <StyledEmojiContainerView>
        <StyledEmojiText>{country.emoji}</StyledEmojiText>
      </StyledEmojiContainerView>
      <View>
        <StyledInfoItemContainerView>
          <InfoItem label="Name" value={country.name} />
        </StyledInfoItemContainerView>
        <StyledInfoItemContainerView>
          <InfoItem label="Capital" value={country.capital} />
        </StyledInfoItemContainerView>
        <StyledInfoItemContainerView>
          <InfoItem label="Phone Code" value={country.phone_code} />
        </StyledInfoItemContainerView>
        <StyledInfoItemContainerView>
          <InfoItem label="Currency Symbol" value={country.currency_symbol} />
        </StyledInfoItemContainerView>
        <StyledInfoItemContainerView>
          <InfoItem label="Region" value={country.region} />
        </StyledInfoItemContainerView>
        <StyledInfoItemContainerView>
          <InfoItem label="Subregion" value={country.subregion} />
        </StyledInfoItemContainerView>
        <StyledInfoItemContainerView>
          <InfoItem
            label="Timezone"
            value={country.timezones[0].abbreviation}
          />
        </StyledInfoItemContainerView>
        <StyledInfoItemContainerView>
          <InfoItem label="Latitude" value={String(country.latitude)} />
        </StyledInfoItemContainerView>
        <StyledInfoItemContainerView>
          <InfoItem label="Longitude" value={String(country.longitude)} />
        </StyledInfoItemContainerView>
      </View>
    </>
  ) : (
    <View />
  );
};

export default CountryInfo;
