import * as React from "react";
const SvgClipboardTick = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      d="M15.73 3.875v.945c0 .764-.616 1.38-1.38 1.38H9.64c-.764 0-1.38-.616-1.38-1.38v-.94c0-.76.623-1.38 1.39-1.38h4.7c.768 0 1.387.62 1.38 1.375Z"
    />
    <path
      stroke="#000"
      d="M14.35 8.21a3.398 3.398 0 0 0 3.39-3.39c0-.167.185-.3.368-.207A3.972 3.972 0 0 1 20.21 8.12v9.41a3.981 3.981 0 0 1-3.97 3.97H7.76a3.981 3.981 0 0 1-3.97-3.97V8.12c0-1.518.851-2.84 2.102-3.507a.247.247 0 0 1 .368.207 3.398 3.398 0 0 0 3.39 3.39h4.7Zm-2.656 8.874 4-4a1.254 1.254 0 0 0 0-1.768 1.254 1.254 0 0 0-1.768 0l-3.116 3.117-.617-.617a1.254 1.254 0 0 0-1.767 0 1.254 1.254 0 0 0 0 1.768l1.5 1.5c.25.248.569.366.884.366.315 0 .635-.118.883-.366Z"
    />
  </svg>
);
export default SvgClipboardTick;