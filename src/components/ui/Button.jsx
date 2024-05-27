import React from 'react'

function Button() {

    function handleClicked(){
        console.log("internet");
    }
  return (
    <button onClick={() => handleClicked}>Order Now</button>
)
}

export default Button