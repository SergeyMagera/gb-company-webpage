import React, {useState} from "react";

export function ReactComponent() {
    const [clicked, setClicked] = useState(false);


    const handleClick = (event: React.MouseEvent) => {
       setClicked(true);
    }

    return <>
        {clicked}
        REact component works!!!
        <button onClick={() => setClicked(true)}>Click me</button>
        { clicked ? 'You clicked me!' : '' }
    </>
}