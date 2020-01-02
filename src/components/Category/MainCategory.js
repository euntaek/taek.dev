/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import MainItem from "./MainItem";

const style = css`
  margin: 0 16px;
  button {
    margin-right: 8px;
  }
`;

function MainCategory({ dummyData, selected }) {
  return (
    <div css={style} className="main-category" role="tablist">
      {dummyData.map(item => (
        <MainItem mainItem={item} selected={selected} key={item} />
      ))}
    </div>
  );
}

export default MainCategory;
