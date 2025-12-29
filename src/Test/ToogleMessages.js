import { useState } from 'react';

const Toogle = () =>  {

    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <>
            <h1>{show}</h1>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default toogle;