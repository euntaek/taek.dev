import React from "react";
import PostItem from "./PostItem";

const dummyData = [
  {
    postName: "[Algorithm] 퀵 소트, 정렬 소트, 분열 소트를 알아보자.",
    date: "August 4, 2019",
    spoiler: "정렬 알고리즘에 대해 하나하나 알아봅니다.",
  },
  {
    postName: "[Javascript] async/await에 대해 알아보자.",
    date: "August 5, 2019",
    spoiler: "async/await에 대해 알아보고 promise와의 차이점을 알아봅니다.",
  },
  {
    postName: "[Javascript]콜백 헬에서 빠져나와보자! promise편!",
    date: "August 2, 2019",
    spoiler: "promise가 무엇인지 기존의 콜백함수와의 차이점이 무엇인지 알아봅니다.",
  },
  {
    postName: "[React] redux starter kit의 사용법을 알아보자.",
    date: "August 2, 2019",
    spoiler: "slice, action, typescript와의 연동을 알아봅니다.",
  },
  {
    postName: "[Algorithm]프로그래머스 LV.1 피보나치 수열 문제를 풀어보자",
    date: "August 2, 2019",
    spoiler: "프로그래머스의 스킬 테스트 레벨1 문제를 풀어봅니다.",
  },
  {
    postName: "[Web] http와 https의 차이점과 https 이점을 알아보자. ",
    date: "August 1, 2019",
    spoiler: "네트워크 통신에 대해 알아봅니다.",
  },
];

function Contents({ selected }) {
  return (
    <div id="Contents">
      <div
        style={{ width: "100%", marginTop: "40px" }}
        id="slide1"
        role="tabpanel"
        aria-labelledby={`sub-slide1`}
      >
        {dummyData.map(data => (
          <PostItem key={data.postName} post={data} />
        ))}
      </div>
    </div>
  );
}

export default Contents;
