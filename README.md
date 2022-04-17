# React Native - GeographQl

## About

This is a simple React Native application that's using the free GQL API https://api.geographql.renzooo.com/ to display information about countries.

## Setup

The project uses `yarn` for dependency management. Here you can find the installation instructions: https://yarnpkg.com/getting-started/install.

### Install Dependencies

1. Install React Native, TypeJS dependencies (React, Typescript, etc.):
  `yarn install`

2. Install ruby dependencies (cocoapods, etc.):
  `cd ios && bundle install`

3. Install iOS dependencies:
  `cd ios && bundle exec pod install`

## Running it

At this point, you should be all set up. Let's run the app, then!

### Start Metro

```bash
yarn start
```

### ios

Make a build and start the app:
```bash
yarn ios
```

## Next Steps

This is a list of features or changes that would be great for next releases:

1. **Pagination**: at the moment, we're getting only the first 10 countries. It would be **great** to allow pagination to fetch/load more data.

2. **Animation**: well, no animation is being used in the app for now. That's sad. A designer would cry a lot if they see the application. So, that's one thing to be tacked next.

3.  **Show states and cities info in the "Country Detail" page**: for now, only a few information is being displayed in the "Country Detail" page. The idea behind this milestone would be to display both 'countries' and 'cities' in a "Carousel" way (horizontal list)

4. **Add new tab**: at this moment, the app has only one tab: Countries. It would be cool to have at least one more. The idea would be to have a "Favorites" tab that would show the user's favorite countries. It would require some changes in the code in order to allow the user to favorite a country (maybe saving this info in the persisted data?).

5. **.env infra**: add a simple infra to save some information, such as the server url, in a *.env* file and read it in the app.