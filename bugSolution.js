```javascript
import { useState, useEffect, useMemo } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [someObject, setSomeObject] = useState({ a: 1 });

  // Correct: use useMemo to create a stable reference for comparison
  const prevSomeObject = useMemo(() => someObject, [someObject]); 

  useEffect(() => {
    // Correct: Compare using JSON.stringify for object equality
    if (JSON.stringify(someObject) !== JSON.stringify(prevSomeObject)) {
      console.log('Object changed:', someObject);
    }
  }, [someObject, prevSomeObject]);

  const incrementCount = () => setCount(count + 1);
  const updateSomeObject = () => setSomeObject({...someObject, a: someObject.a + 1});

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={updateSomeObject}>Update Object</button>
    </div>
  );
}

export default MyComponent;
```