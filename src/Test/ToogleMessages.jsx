import { useState } from 'react';

const Toogle = () =>  {

    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(!show) && setShow(show);
    }

    return (
        <>
            <h1>{show ? "Hello React" : ""}</h1>
            <button onClick={handleClick}>Toogle</button>
        </>
    )
}

export default Toogle;