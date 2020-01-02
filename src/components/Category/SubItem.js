/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const style = css`
  height: 28px;
  font-size: 13px;
  font-weight: bold;
  border: none;
  border-radius: 14px;
  outline: none;
  cursor: pointer;
  transition: all 150ms ease-in-out;
`;

function SubItem({ subItem, selected }) {
  return (
    <button
      id={`$sub-{subItem}`}
      css={style}
      className={`sub-item ${subItem === selected ? "sub-category-active" : ""}`}
      aria-controls={subItem}
      role="tab"
      aria-selected={selected === subItem}
    >
      {subItem.toUpperCase()}
    </button>
  );
}

export default SubItem;
