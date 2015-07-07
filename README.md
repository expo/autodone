# autodone
A decorator for async functions that automatically calls `done()` on the returned promise

## Usage

Decorate any function that returns a promise, including async functions:

```js
@autodone
async componentDidMount() {
  ...
}
```

## Important Notes

- Use this decorator only when you never will use the promise returned from the async function. Once a promise has been marked as done, you cannot call any more methods on it.
- Your promise library must implement `done()`
