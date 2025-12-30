import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click here</button>
        </>
    )
}

export default Counter;