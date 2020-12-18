import React, { useState } from 'react'

function Toggle(props) {
    const [state, setState] = useState(false)


    return (
        <button onClick={() => {
            setState(prevState => !prevState)
            props.onChange(!state)
        }
        }
        data-testid="toggle"
        >
            {state ? "Turn Off" : "Turn On"}
        </button>
    )
}

export default Toggle
