import React from "react"

const Watch = (prop) => {
  console.log(prop.data);
  return (
    <div>
      <button onClick={prop.data}> click me</button> 
    </div>
  )
}

export default Watch;
