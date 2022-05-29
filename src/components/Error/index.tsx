import React from 'react';
import { Button } from 'react-native';

import type { QueryObserverResult } from 'react-query';

import {
  StyledContainerView,
  StyledErrorMessageView,
  StyledErrorText,
  StyledButtonView,
} from './styled-components';

interface Props<T> {
  refetch: () => Promise<QueryObserverResult<T>>;
}

const Error = <T,>({ refetch }: Props<T>): JSX.Element => {
  const handleRefetch = React.useCallback(() => refetch(), [refetch]);

  return (
    <StyledContainerView>
      <StyledErrorMessageView>
        <StyledErrorText>Sorry, there was an error!</StyledErrorText>
      </StyledErrorMessageView>
      <StyledButtonView>
        <Button title="Try again" onPress={handleRefetch} />
      </StyledButtonView>
    </StyledContainerView>
  );
};

export default Error;
