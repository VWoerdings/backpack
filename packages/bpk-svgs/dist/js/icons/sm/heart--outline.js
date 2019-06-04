import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M16.57 6a2.421 2.421 0 0 1 1.744.686 2.988 2.988 0 0 1-.368 4.17l-3.68 3.683A43.878 43.878 0 0 0 12 16.986a43.87 43.87 0 0 0-2.266-2.447l-3.68-3.683a2.988 2.988 0 0 1-.368-4.17A2.42 2.42 0 0 1 7.43 6a3.476 3.476 0 0 1 2.42 1.054L12 9.625l2.15-2.571A3.475 3.475 0 0 1 16.57 6m0-2a5.46 5.46 0 0 0-3.834 1.64 5.734 5.734 0 0 0-.736.92 5.734 5.734 0 0 0-.736-.92A5.46 5.46 0 0 0 7.43 4a4.415 4.415 0 0 0-3.159 1.272 4.971 4.971 0 0 0 .368 6.998l3.68 3.682a41.76 41.76 0 0 1 3.438 3.898l.04.05a.258.258 0 0 0 .407 0l.039-.05a41.759 41.759 0 0 1 3.438-3.898l3.68-3.682a4.971 4.971 0 0 0 .368-6.998A4.415 4.415 0 0 0 16.57 4z" /></svg>);