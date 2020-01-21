import React from "react";
import { css } from "@emotion/core";
import ShowTags from "../../images/show-tags.svg";

const style = showTags => css`
  position: relative;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.125rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;

  svg {
    position: relative;
    transform: rotate(${showTags && "180deg"});
    transition: transform 300ms ease-in-out;

    animation: show-tags 0.5s ease-in-out Infinite Alternate;
    @keyframes show-tags {
      from {
        top: -2px;
      }
      to {
        top: 2px;
      }
    }
  }
`;

function ShowTagsButton({ showTags, onShowTags }) {
  return (
    <button
      className={`show-tags-button ${showTags && "open"}`}
      onClick={onShowTags}
      css={style(showTags)}
      role="checkbox"
      aria-label="show tags button"
      aria-checked={showTags}
      tabIndex="0"
    >
      <ShowTags />
    </button>
  );
}

export default React.memo(ShowTagsButton);
