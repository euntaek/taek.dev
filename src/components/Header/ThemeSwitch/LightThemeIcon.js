import React from "react";
import { css } from "@emotion/react";
const style = (animate) => css`
  position: absolute;
  transform: translateY(${animate ? "0" : "3rem"});
  visibility: ${animate ? "visible" : "hidden"};
  transition-property: transform, visibility;
  transition-duration: 600ms, 0ms;
  transition-delay: ${animate ? "300ms, 0ms" : "0ms, 600ms"};
`;

function LightThemeIcon({ animate }) {
  return (
    <svg
      css={style(animate)}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className="theme-icon"
    >
      <path d="M0 9.004c0 .206.071.381.214.524a.726.726 0 0 0 .509.206h1.73a.632.632 0 0 0 .489-.214.741.741 0 0 0 .194-.516.727.727 0 0 0-.194-.512.637.637 0 0 0-.489-.21H.723a.694.694 0 0 0-.509.214.694.694 0 0 0-.214.508zm2.422-5.868c0 .196.066.368.198.516L3.867 4.86a.662.662 0 0 0 .5.199c.201 0 .37-.064.504-.19a.636.636 0 0 0 .203-.485.783.783 0 0 0-.207-.54L3.66 2.636c-.344-.27-.69-.27-1.04 0a.713.713 0 0 0-.198.5zm0 11.728c0 .196.066.368.198.516a.822.822 0 0 0 .54.206.717.717 0 0 0 .5-.206l1.207-1.247a.649.649 0 0 0 .207-.5.684.684 0 0 0-.203-.504.684.684 0 0 0-.504-.203.649.649 0 0 0-.5.207L2.62 14.34a.743.743 0 0 0-.198.524zm2.16-5.86c0 .789.198 1.523.595 2.203a4.42 4.42 0 0 0 1.616 1.616c.68.397 1.414.596 2.203.596.593 0 1.162-.118 1.707-.354a4.485 4.485 0 0 0 1.41-.945 4.43 4.43 0 0 0 .94-1.409c.233-.545.35-1.114.35-1.707 0-.794-.197-1.53-.592-2.207a4.378 4.378 0 0 0-1.608-1.608 4.312 4.312 0 0 0-2.207-.592c-.794 0-1.53.197-2.207.592a4.409 4.409 0 0 0-1.612 1.608 4.29 4.29 0 0 0-.596 2.207zm3.691-6.582c0 .2.07.37.21.508.141.137.312.206.513.206a.7.7 0 0 0 .516-.206.69.69 0 0 0 .207-.508V.738a.72.72 0 0 0-.21-.524A.69.69 0 0 0 8.995 0a.69.69 0 0 0-.512.214.72.72 0 0 0-.21.524v1.684zm0 13.124v1.732c0 .195.072.365.215.508a.695.695 0 0 0 .508.214.695.695 0 0 0 .508-.214.694.694 0 0 0 .215-.509v-1.73a.637.637 0 0 0-.21-.489.727.727 0 0 0-.513-.194.727.727 0 0 0-.512.194.637.637 0 0 0-.21.489zM12.95 4.383a.63.63 0 0 0 .19.476.633.633 0 0 0 .477.199.688.688 0 0 0 .508-.199l1.239-1.207a.735.735 0 0 0 .206-.516.681.681 0 0 0-.206-.5c-.339-.265-.678-.265-1.016 0L13.14 3.843a.783.783 0 0 0-.19.54zm0 9.25c0 .212.064.379.19.5l1.208 1.247a.717.717 0 0 0 1.012-.008.701.701 0 0 0 .21-.508.71.71 0 0 0-.206-.524l-1.239-1.207a.744.744 0 0 0-.508-.207c-.19 0-.35.068-.476.203a.707.707 0 0 0-.19.504zm1.914-4.629c0 .201.068.376.206.524.138.138.3.206.485.206h1.715a.701.701 0 0 0 .512-.218.701.701 0 0 0 0-1.02.708.708 0 0 0-.512-.215h-1.715a.65.65 0 0 0-.493.21.719.719 0 0 0-.198.513z" />
    </svg>
  );
}

export default LightThemeIcon;
