export type Type = 'favorite' | 'unfavorite';

export interface Props {
  onPress: () => void;
  type: Type;
}
