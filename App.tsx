import React from 'react';
import { LogBox } from 'react-native';

import Navigation from 'navigation';

import useGetFavoriteCountryFromAsyncStorage from 'hooks/use-get-favorite-country-from-async-storage';

import GraphQLContext from 'context/graphql';

// The 'ViewPropTypes' is not being used directly in this application,
// it's coming from some lib. So, it could be safely ignored
// ref: https://github.com/facebook/react-native/issues/33557
LogBox.ignoreLogs(['ViewPropTypes will be removed']);

const App = (): JSX.Element => {
  useGetFavoriteCountryFromAsyncStorage();
  return (
    <GraphQLContext.Provider>
      <Navigation />
    </GraphQLContext.Provider>
  );
};

export default App;
