
# Description
UI component library developed in ReactJS

## Homepage
http://ing17romc.github.io/edt-lib/

## Repository
https://github.com/ing17romc/edt-lib/

## Install
```
npm i
```
## Tests
```
npm run test
```
## Stories rendering
```
npm run storybook
```
## Publish to NPM and release to Github

> Need to commit and push all the changes to github and then change the version in the package.js before running the following command
```
npm run pub
```

# How to use

## Install 

```
npm i edt-lib
```

## Styles 
> Import the styles in the `index` file
```jsx
import 'edt-lib/index.scss';
```

## Scripts 
> Import the componet using `import` in your page
```jsx
import { UI } from 'edt-lib';
```

## Example

> You can have more detail of all the components with their respective configuration options by visiting the [HomePage](http://ing17romc.github.io/edt-lib/)

```jsx
import React from 'react';
import { UI } from 'edt-lib';

const Example = () => {
    const { Title } = UI

    return (
        <div>
            <Title label='This is an example' />
        </div>
    );
};

export default Example;

```