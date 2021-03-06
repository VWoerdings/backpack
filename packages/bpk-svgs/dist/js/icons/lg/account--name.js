import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 7.5A3.51 3.51 0 0 0 8.5 4 3.51 3.51 0 0 0 5 7.5 3.51 3.51 0 0 0 8.5 11 3.51 3.51 0 0 0 12 7.5zM1 20v-2.679C1 14.901 2.833 13 5.167 13h6.666C14.167 13 16 14.901 16 17.321V20H1zM16 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6zm0 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6zm1 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z" /></svg>);