# StateZ

## Install

```
npm i Zyph-io/statez
```

Using by CDN

```html
<script
  src="https://cdn.jsdelivr.net/gh/zyph-io/statez/release/statez.js"
  type="module"
></script>
```

Or download the builded file on folder

```
release/statez.js
```

## Using

```js
const state = new StateZ({ count: 0 });

const callback = (value, lastValue, keyName) => {
  console.log(`State changed: ${keyName || ""}`, lastValue, value);
};

state.subscribe(callback, true); // State changed: {count: 0} {count: 0}
state.set("count", 1); // State changed: count 0 1
state.unsubscribe(callback);
state.value = { count: 2 };
console.log(state.get("count")); // 2
console.log(state.value); // {count: 2}
```
## Typescript

```ts
import type StateZ from "statez";

```