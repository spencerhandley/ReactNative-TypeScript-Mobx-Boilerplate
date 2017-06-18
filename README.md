### Features
- [x] React Native
- [x] Typescript
- [x] Mobx + Mobx React
- [x] Jest (w/ cli repl/debugger)
- [x] React Native Elements


### Installation

```javascript
    // project root dir
    yarn
```

### Running (ios only right now)
First we must compile our typescript, I recommend using this in watch mode
```javascript
    // project root dir
    ./node_modules/.bin/tsc --watch
```

then

```javascript
    // project root dir
    react-native run-ios
```

### Running tests
```javascript
    // project root dir
    yarn test
```
or in watch mode with
```javascript
    // project root dir
    yarn test:watch
```

### Debugging tests
```javascript
    // project root dir
    yarn test:debug
```

You will hit your breakpoints after a brief period of time. Press c to continue the debugger. Type 'repl' when at a breakpoint in order to access variables at your breakpoint.


