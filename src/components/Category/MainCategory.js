/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import MainItem from "./MainItem";

const style = css`
  margin: 0 16px;
  button {
    margin-right: 8px;
  }
`;

function MainCategory({ dummyDate, selected }) {
  return (
    <div css={style} className="main-category" role="tablist">
      {dummyDate.map(item => (
        <MainItem category={item} selected={selected} key={item} />
      ))}
    </div>
  );
}

export default MainCategory;
