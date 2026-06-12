# React Best Practices: The useEffect Masterclass

Using `useEffect` correctly is one of the most critical skills for a React developer. This guide summarizes the core
principles and common mistakes to avoid.

## 🏠 The "Moving into a New Flat" Analogy

Think of your React component as a room you just moved into:

- **Rendering**: Setting up the furniture, turning on the lights, and making the room look how you want. This is the UI.
- **Side Effects**: Things that happen _outside_ the room.
  - Calling a plumber to fix pipes.
  - Setting a monthly reminder to pay rent.
  - Canceling subscriptions before you move out.

The room (UI) doesn't need to know about these things, but they are necessary side effects of living there.

---

## 🚦 Three Versions of the Dependency Array

1. **No Array**: `useEffect(() => { ... })`
   - Runs after **every single render**. Almost always a mistake.
2. **Empty Array**: `useEffect(() => { ... }, [])`
   - Runs **exactly once** when the component mounts. Perfect for initial data fetching or socket setup.
3. **Array with Values**: `useEffect(() => { ... }, [user])`
   - Runs on mount and whenever the specified values change. React "watches" these values for you.

---

## 🧹 The Cleanup Function

If your effect starts something that persists (timer, listener, subscription), you **must** stop it when the component
unmounts.

```javascript
useEffect(() => {
  const timer = setInterval(() => { ... }, 1000);
  
  // The Cleanup Function
  return () => clearInterval(timer);
}, []);
```

---

## 🚫 5 Common Mistakes to Avoid

### 1. Stale Closures (Missing Dependencies)

If your effect reads a value from props or state, it **must** be in the dependency array. If you omit it, the effect
will be stuck with an outdated snapshot of that value.

### 2. Infinite Loops (Setting State you Depend On)

Never put a state value in the dependency array if the effect itself updates that same state.

- **Wrong**: `useEffect(() => setUsers(u), [users])` -> Loops forever.
- **Right**: Dependencies should be the _triggers_ (inputs, IDs, search terms), not the result.

### 3. Object & Function References

In JavaScript, `{}` !== `{}`. If you define an object or function inside your component and put it in the dependency
array, the effect will run every render because the reference changes.

- **Fix**: Move them outside the component or inside the effect itself.

### 4. Async Effects & Race Conditions

`useEffect` cannot be an `async` function directly because it expects to return a cleanup function (or nothing), not a
Promise.

- **Fix**: Define an internal async function and call it. Use a `boolean` flag to handle race conditions (ensuring only
  the latest data wins).

### 5. Overusing useEffect for Derived State

If a value can be calculated from existing props or state, **just calculate it during render**. Don't use an effect to
sync it into a new state.

---

_Based on the Deutsch Lernen React 19 Modernization Guide._
