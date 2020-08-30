import React from "react";

const MoiInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

export default MoiInput;
