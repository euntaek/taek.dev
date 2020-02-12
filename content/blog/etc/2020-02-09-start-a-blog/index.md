---
title: 블로그 시작하기
date: 2020-02-09
category: etc
tags:
  - 블로그
  - 후기
description: 생에 처음으로 블로그를 시작하였습니다. 블로그를 시작하게 된 이유와 기존 유명 블로그 플랫폼을 이용하지 않고 직접 블로그를 만들게 된 이유에 대해 이야기를 공유 해봅니다.
---

![blog url image](../../../assets/blog-name.svg)

## 블로그를 시작하게 된 이유

거창한 이유는 없습니다. 프로그래밍 공부를 하면서 접하는 여러 기술 블로그들을 보며 저도 후에 블로그를 한번 해보자는 목표가 생겼습니다. 그렇게 기약 없는 목표만 가지고 있다가 [개발자가 블로그를 운영해야 할 이유](https://taegon.kim/archives/7107)라는 포스트를 읽고 바로 시작하게 되었습니다. 저는 아직 제가 이해하고 있다고 생각하는 것을 남들한테 설명을 하라고 한다면 쉽게 말이 나오지는 않을 것이라고 생각합니다. 이 말은 곧 제가 이해했다고 생각은 하지만 실제로는 잘 이해하지 못하고 있다는 것의 반증이지 아닐까 생각합니다. 따라서 블로그는 자신의 생각이나 정보를 글로 정리 및 공유하는 곳이니 저의 부족한 부분을 채워줄 뿐만 아니라 큰 도움이 될 것이라고 생각합니다.

## 블로그를 만들게 된 이유
처음에는 좋은 블로그 플랫폼들이 많아 블로그 플랫폼을 이용하려고 했습니다. 근데 저는 지금까지 개발자를 목표로 공부를 해오면서 실습 예제를 따라 만들어 본 적은 있지만 그 외 아직은 제가 직접 무엇인가를 만들어 본 적이 없었습니다. 안 그래도 슬슬 취업 준비를 위해 포트폴리오 용 프로젝트를 시작해보려고 하는 참에 첫 프로젝트로 블로그를 만들어 보기로 했습니다. 그리고 요즘 정적 웹사이트 생성기인 [Gatsby](https://www.gatsbyjs.org/)가 굉장히 인기가 많고 많은 개발자분들이 Gatsby로 블로그를 만드는 것을 보고 저도 한번 만들어 보고 싶었습니다.

## TAEKLOG
블로그 이름은 예전부터 친구들이 은택이보다는 택이로 많이 불러줘서 TAEKLOG로 지었습니다.<br> 
TAEKLOG는 [Gatsby](https://www.gatsbyjs.org/)와 [Netlify](https://www.netlify.com/)로 만들었습니다.

### 템플릿
템플릿은 [gatsby starters](https://www.gatsbyjs.org/starters/?v=2)에서 제일 인기 많은 [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)를 사용했습니다. 디렉토리 구조도 깔끔하고 gatsby 튜토리얼 진행 후 gatsby-config와 gatsby-node 등 gatsby에 대해 더 자세히 파악할 수 있어서 좋았습니다.

### 스타일

![emotion vs styled-components](images/npm-trends.png)

CSS in JS인 [emotion](https://emotion.sh/docs/introduction)을 사용하였습니다. CSS in JS의 대표적 라이브러이인 [styled-components](https://styled-components.com/)를 사용하지 않고 emotion을 사용한 이유는 일단 velopert님의 [Storybook을 이용한 리액트 디자인 시스템 구축하기](https://velog.io/@velopert/series/storybook-typescript-design-system) 오프라인 강의 때 처음 사용해봤는데 편리했던 기억이 있었습니다. 그리고 emotion이 styled-componets 보다 파일 사이즈가 더 작고 [npm trends](https://www.npmtrends.com/@emotion/core-vs-styled-components)의 다운로드 수를 보면 styled-components를 넘어섰습니다. 하지만 아직 저의 미숙한 실력 덕분인지 dark mode 때문에 color를 따로 분리했는데 스파게티 코드가 되어버려 아쉬움이 남습니다.
 
### 카테고리

![카테고리](./images/category.gif)

메인 카테고리와 서브 카테고리를 만들었습니다. 서브 카테고리는 중복 설정이 가능하여 사실상 메인 카테고리의 태그라고 보시면 됩니다. 컴포넌트도 이름도 태그라고 지었고 [Swipter.js](https://swiperjs.com/)를 사용해서 만들었습니다. 깔끔하게 보이기 위해 기본적으로 메인 카테고리만 보이고 서브 카테고리는 버튼을 눌러야 보이는 드롭 다운 형태로 만들었습니다. 카테고리 설정 시 세션 스토리지에 저장하고 새로 고침 시 설정한 카테고리가 유지되게 만들었습니다.
 
### 다크모드

![다크모드](./images/dark-mode.gif)

다크 모드는 요즘 웹디자인 트렌드 중 하나라고 합니다. 저 또한 트렌드를 따라가고 싶어 다크 모드를 적용했습니다. 개인적으로 아이폰과 유튜브의 다크모드를 잘 사용하고 있어서 꼭 추가해보고 싶은 기능이었습니다. 
테마 설정 시 로컬 스토리지에 변경 된 테마를 저장하고 후에 블로그에 들어오는 경우 로컬 스토리지에 있는 테마 값으로 테마를 설정합니다. 없을 경우 라이트를 디폴트 값으로 사용합니다.
 
### 포스트 생성 cli

![cli](./images/cli.gif)

어차피 저만 사용하는 블로그이지만 조금이라도 생상성을 높이기 위해 포스트를 생성하는 cli를 만들었습니다. 처음 만들어봐서 그런지 재밌게 만들었습니다. 

## 후기
직접 무엇인가를 만들어 본 적 없는 제가 이렇게 무엇을 하나 만들어 봤다는 거에 대해 또 해냈다는 거에 굉장한 성취감을 얻었습니다. 그리고 제가 너무나도 부족하다는 걸 한 번 더 깨닫게 되는 계기가 됐습니다. 처음에는 저도 열심히 만들어서 [Gatsby Starters](https://www.gatsbyjs.org/starters/?v=2)에 올려보려고 했는데 코드든 뭐든 아직 너무 부족하다고 생각하여 잠시 접어두기로 했습니다. 이번 블로그를 만들면서 많은 개발자님들의 코드를 참고하고 하였는데 너무나도 큰 도움이 되었습니다. 특히 [한재엽님](https://jbee.io/)의 [gatsby-starter-bee](https://github.com/JaeYeopHan/gatsby-starter-bee)를 많이 참고하였는데 블로그 만드는 걸 떠나서 굉장히 큰 도움이 되었습니다. 고수분들의 코드는 이런 거구나라고 깨닫게 되었습니다. 이번 블로그를 만들면서 부족했던 부분을 다음 프로젝트에서는 채울 수 있도록 열심히 노력해야겠습니다. 첫걸음을 뗐으니 다음 걸음에는 더 쉽고 자신 있게 떼겠습니다.