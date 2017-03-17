# xp-throttle-debounce
throttle and debounce methods

## Install

> npm i --save xp-throttle-debounce

## Usage

```js
import { throttle, debounce } from 'xp-throttle-debounce'

throttle(function() {
  // do sth
}, 300)

debounce(function() {
  // do sth
}, 300)
```

## API

### throttle(fn, waitTime, immediate, isDebounce)

#### Return `Function`

#### fn

Type `Function`

The execute function you want to throttle.

#### waitTime

Type `Number`

A wait time in milliseconds.

#### immediate

Type `Boolean`

Optional, defaults to `false`. Function will execute immediately if it is `true`.

#### isDebounce

Type `Boolean`

Optional, defaults to `false`. If it is `true`, the return function is equal to a debounce function.

### debounce(fn, waitTime, immediate)

arguments is the same as throttle.
