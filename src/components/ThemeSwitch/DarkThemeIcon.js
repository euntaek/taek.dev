/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const style = animate => css`
  position: absolute;
  transform: translateY(${animate ? "0" : "3rem"});
  visibility: ${animate ? "visible" : "hidden"};
  transition-property: transform, visibility;
  transition-duration: 600ms, 0ms;
  transition-delay: ${animate ? "400ms, 0ms" : "0ms, 600ms"};
`;

function DarkThemeIcon({ animate }) {
  return (
    <svg
      css={style(animate)}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className="theme-icon"
    >
      <path d="M9.321 18A9.321 9.321 0 0 1 0 8.679C0 4.902 2.17 1.516 5.529.054A.643.643 0 0 1 6.375.9c-.386.885-.59 2.02-.59 3.279 0 4.43 3.605 8.035 8.036 8.035 1.26 0 2.394-.203 3.28-.59a.643.643 0 0 1 .846.847C16.483 15.831 13.098 18 9.32 18z" />
    </svg>
  );
}

export default DarkThemeIcon;
