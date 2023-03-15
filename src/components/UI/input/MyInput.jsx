import React from "react";

const MyInput = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} className="input" {...props} />
  )
})

export default MyInput;