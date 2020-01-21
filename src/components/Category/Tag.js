import React from "react";
import { css } from "@emotion/core";
const style = css`
  padding: 0 8px;
  height: 28px;
  border: none;
  border-radius: 0.125rem;
  cursor: pointer;
  transition: color 100ms ease-in-out;
  font-size: 0.875rem;
  font-weight: 500;
  outline: none;
  data {
    margin-left: 0.125rem;
  }
  span {
    margin-left: 0.25rem;
    font-size: 1.25rem;
  }
`;

function Tag({ tag, checkedTags, onCheckTag }) {
  const checked = !!checkedTags.includes(tag.fieldValue);

  return (
    <div
      css={style}
      className={`tag ${checked && "tag-active"} align-center`}
      onClick={() => onCheckTag(tag.fieldValue)}
      role="checkbox"
      aria-checked={checked}
      tabIndex="0"
    >
      {tag.fieldValue.toUpperCase()}
      {checked ? (
        <span>&times;</span>
      ) : (
        <data value={tag.totalCount}>({tag.totalCount})</data>
      )}
    </div>
  );
}

export default React.memo(Tag);
