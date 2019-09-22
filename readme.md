# Next js boilerplate

## Tech stack

-   based on [Next.js](https://nextjs.org/). Usage of Next.js comes with many benefits such as server side rendering out of the box, bundle optimization etc.
-   uses [typescript](https://www.typescriptlang.org)
-   uses [Prettier](https://prettier.io) for formatting and keeping prescribed code style
-   uses combination of global [sass](https://sass-lang.com) styles and localy encapsulated [styled-jsx](https://github.com/zeit/styled-jsx) styles.
-   uses [PostCSS](https://postcss.org) modules [autoprefixer](https://github.com/postcss/autoprefixer) and [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables)
-   uses [Redux](redux.js.org/) for state management and [redux-thunk](https://github.com/reduxjs/redux-thunk) as redux middleware for async actions
-   uses [@PabloSzx/tsconfig-paths-webpack-plugin](https://github.com/PabloSzx/Next-TypeScript-Paths) to support absolute import paths
-   uses [TSLint](https://palantir.github.io/tslint/') and [Stylelint](https://stylelint.io) for code quality checks
-   uses [Webpack Bundle Analyzer](https://github.com/zeit/next.js/tree/canary/packages/next-bundle-analyzer) for analyzing bundled libraries sizes
-   uses [Jest](https://jestjs.io/) for testing

## Conventions

This project follows pattern of dividing components between Presentational and Container Components as described in [Dan Abramov's article](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) thus Components connected to Redux store are placed inside '/src/containers' and simple components live inside '/src/components'

## Start

### Development

Start development with

```
npm run dev
```

or

```
yarn dev
```

### Production

For building production version run

```
npm run build
```

or

```
yarn build
```

For starting the server in production mode run

```
npm run start
```

or

```
yarn start
```

## Linting

### Typescript

Typescript linting done with [TSLint]('https://palantir.github.io/tslint/')

```
npm run lint-ts
```

### Styles

Styles linting done with [Stylelint]('https://stylelint.io')

```
npm run lint-styles
```

## Testing

Testing done via [Jest]('https://jestjs.io')

```
npm run test
```

## Used Libraries

### Simplify module imports with absolute paths

Together with typescript and Next.js is working good this plugin [https://github.com/PabloSzx/Next-TypeScript-Paths]('@PabloSzx/tsconfig-paths-webpack-plugin')

-   [Support baseUrl in tsconfig issue]('https://github.com/zeit/next.js/issues/7935)

### ENV Variables

Done using [dotenv plugin]('https://github.com/motdotla/dotenv')
