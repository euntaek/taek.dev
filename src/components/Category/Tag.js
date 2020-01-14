/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const style = css`
  padding: 0 8px;
  height: 28px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  font-size: 0.875rem;
  font-weight: bold;
`;

function Tag({ tag, checkedTags, checkTags }) {
  const checked = !!checkedTags.find(checkedTag => checkedTag === tag.fieldValue);

  return (
    <div
      css={style}
      className={`tag ${checked && "tag-active"} align-center`}
      onClick={() => checkTags(tag.fieldValue)}
      role="checkbox"
      aria-checked={checked}
      tabIndex="0"
    >
      {tag.fieldValue.toUpperCase()}
      <data value={tag.totalCount}>({tag.totalCount})</data>
    </div>
  );
}

export default Tag;
