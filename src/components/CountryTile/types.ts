import type { GetCountries } from 'state/remote/__generated__/default';

type Country = GetCountries.Node;

export interface CountryTileProps extends Country {
  onPress: (id: number) => void;
  highlight?: boolean;
}
