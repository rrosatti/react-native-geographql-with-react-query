import React from 'react';

import Navigation from 'navigation';

import GraphQLContext from 'context/graphql';

const App = (): JSX.Element => {
  return (
    <GraphQLContext.Provider>
      <Navigation />
    </GraphQLContext.Provider>
  );
};

export default App;
