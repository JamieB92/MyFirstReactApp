import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count
        // Always specify explictiyt that you want the effect depends on 
    }, [count]);
  return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            Increment Count ({count})
        </button>
    </div>
  )
}

export default UseEffectCounter