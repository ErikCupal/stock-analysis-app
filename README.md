# Stock analysis app

In this doc, I would like to give you instructions to run this app and I would also like to explain my decisions I made during its development.

## How to run

0. Disclaimer: these instructions are written for macOs and linux systems.
0. Make sure you have [Node.js](https://nodejs.org/en/) installed (version 12 or above).
0. Run `git clone git@github.com:ErikCupal/stock-analysis-app.git && cd stock-analysis-app`.
0. [Register for free account](https://data.nasdaq.com/sign-up) to access Nasdaq API. The app will work even without registering, but only for first 50 API calls.
0. Copy the API key you get after registration.
0. Run `npm i && REACT_APP_NASDAQ_API_KEY=<your-api-key> npm start`.
0. The app will open on [http://localhost:3000](http://localhost:3000).

## Development decisions

### Boilerplate

I used [Create React App](https://create-react-app.dev/) to speed up the app setup. I also used [few components](https://github.com/ErikCupal/bookstore-app/tree/master/src/components) that I already implemented in [other coding challenge](https://github.com/ErikCupal/bookstore-app) a year ago.

### TypeScript

I chose to use TypeScript instead of plain JavaScript for this project.

Several years ago, I probably wouldn't choose it, especially because Higher Order Component chains created with [recompose](https://github.com/acdlite/recompose) can't be typed correctly with TypeScript.

However, I think it is a good choice to use TypeScript in a project today. Problems with HOCs are gone now, since we got hooks. TypeScript became pretty mature and in most cases there are no problems with missing library typings anymore.

### Naming conventions

I generally try to keep the folder structure flat. This leads to little bit ugly component names, such as `StockAnalysisFormFieldTicker`. The component name is created by prefixing it with parent component, which leads to longer names, but creates unambiguous and descriptive names, therefore I usually prefer it.

### Routing

I didn't add any routing solution, since there was no need for it. If new features would require adding a routing system, I would probably choose React Router.

### State management and data fetching

These days, I prefer (depending on that whether GraphQL or REST is used) using either Apollo GraphQL or React Query for handling data fetching / caching in React. When using one of those libs, there is usually not much of other state to handle. When I need to use state that can't be handled by those libs, I prefer using local state. Only when it is absolutely necessary I would use global state via Redux/Recoil/context...

### Performance optimizations

I strictly avoid creating new data or function references in React components without memoization, since they are usually the main cause of performance problem because of broken shallow prop checking. For deriving non-primitive data, I always use `useMemo` to derive new data efficiently and usually I create a custom hook for it to make it more readable. Similarly, I wrap handlers and functions that are passed to other components with `useCallback` to prevent creating new function references every time a component rerenders - however I didn't have to create a new handler while developing the app, so I did not even use `useCallback` this time.

I also wrap components with `memo` to enable shallow prop checking and avoid redundant rerenders/reconciliation. I usually wrap all components with `memo` for consistency, even though the component is not called very often.

### Styling

I used [styled-components](https://github.com/styled-components/styled-components) for styling components. I prefer it, because in my opinion it nicely solves all common CSS problems like namespacing, prefixing, theming and style overriding.

### Theming

I am using a theme system for styling components to allow easy color and font adjustments in the future.

### Comments

I believe a good code is self explaining and mostly does not need comments, therefore you will find only a few comments in the app.

### Browser support

I have manually tested the app only in the latest version of Chrome, although I expect it to be working in Firefox, Safari and other modern browsers. The app has basic responsiveness, so you should be able to use it on mobile phones. I have intentionally omitted support for IE11.

## Possible improvements

### Internationalization

I didn't use any solution for internationalization since there was no requirement for it. However, for any project where there is the slightest chance that internationalization will be necessary in the future, I would use some library for that from the start, e.g. [react-i18next](https://react.i18next.com/). It is easier using it from the start than having to refactor later.

### Form validation & error handling

To save time, I implemented only the simplest form of validation (checking if inputs are non-empty). It would be better to validate the dates properly (using some lib).

If there is an error from Nasdaq API, I am showing only general error message. It would be better to handle it better so that user knows what went wrong.

### Datepicker

The user has to enter the period dates manually. If there was a time for it, it would be better to improve the inputs to allow him to enter the dates through a datepicker.

### Testing

I have not written any unit or integration tests for time reasons. If I had the time, I would test `getSimpleReturn` and `getMaximumDrawdown` functions with unit tests to make sure the logic is correct. I would also set up Cypress for E2E/integration testing of the app.
