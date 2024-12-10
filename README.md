# React useEffect Incorrect Object Comparison
This example demonstrates a common mistake in React's `useEffect` hook: directly comparing objects for equality.  This often leads to unexpected re-renders and potential infinite loops.

The `bug.js` file showcases the incorrect implementation, and `bugSolution.js` provides the corrected version using `useMemo` or JSON.stringify for deep comparison.