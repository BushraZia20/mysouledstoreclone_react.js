// ShoppingCartIcon.jsx

import React from "react";

const ShoppingCartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="headercart"
    style={{
      stroke: "rgb(114, 107, 107)",
      fill: "rgb(34, 32, 32)",
      strokeWidth: "1.4",
      WebkitFontSmoothing: "antialiased",
      height: "24px",
      width: "24px",
    }}
  >
    <path
      d="M43,46H5c-2.209,0-4-1.791-4-4l4-24c0.678-3.442,2.668-4,4.877-4h2.652C14.037,7.052,18.602,2,24,2s9.963,5.052,11.471,12h2.652c2.209,0,4.199,0.558,4.877,4l4,24C47,44.209,45.209,46,43,46z M24,4c-4.352,0-8.045,4.178-9.418,10h18.837C32.045,8.178,28.353,4,24,4z M41,18c-0.308-1.351-0.957-2-2.37-2h-2.828C35.925,16.976,36,17.975,36,19c0,0.552-0.447,1-1,1s-1-0.448-1-1c0-1.027-0.069-2.031-0.201-3H14.201C14.07,16.969,14,17.973,14,19c0,0.552-0.447,1-1,1s-1-0.448-1-1c0-1.025,0.075-2.024,0.197-3H9.369C7.957,16,7.309,16.649,7,18L3,42c0,1.104,0.896,2,2,2h38c1.104,0,2-0.896,2-2L41,18z"
      shapeRendering="auto"
    />
  </svg>
);

export default ShoppingCartIcon;
