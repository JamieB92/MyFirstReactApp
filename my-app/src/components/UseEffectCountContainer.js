import React, { useState } from 'react'
import UseEffectCounter from './UseEffectCounter';

function UseEffectCountContainer() {
    const [display, setDisplay] = useState(true);
  return (
    <div>
        <button onClick={ () => {
            setDisplay(!display)
        }}>
            Toggle DIplay
        </button>
        {display && <UseEffectCounter />}
    </div>
  )
}

export default UseEffectCountContainer