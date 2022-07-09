import React from 'react'

const Header = (props) => {
  return (
    
    <div>
        <button onClick={()=>props.change(1)}>Home</button>
        <button onClick={()=>props.change(2)}>Seus Matches</button>
    </div>
  )
}

export default Header