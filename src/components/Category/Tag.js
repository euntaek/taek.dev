/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const style = css`
  padding: 0 8px;
  height: 28px;
  border: none;
  border-radius: 0.125rem;
  cursor: pointer;
  transition: color 100ms ease-in-out;
  font-size: 0.875rem;
  font-weight: bold;
  outline: none;
  data {
    margin-left: 0.25rem;
  }
  span {
    margin-left: 0.25rem;
    font-size: 1.5rem;
  }
`;

function Tag({ tag, checkedTags, checkTag }) {
  const checked = !!checkedTags.find(checkedTag => checkedTag === tag.fieldValue);

  return (
    <div
      css={style}
      className={`tag ${checked && "tag-active"} align-center`}
      onClick={() => checkTag(tag.fieldValue)}
      role="checkbox"
      aria-checked={checked}
      tabIndex="0"
    >
      {tag.fieldValue.toUpperCase()}
      {checked === true ? (
        <span>&times;</span>
      ) : (
        <data value={tag.totalCount}>({tag.totalCount})</data>
      )}
    </div>
  );
}

export default Tag;
