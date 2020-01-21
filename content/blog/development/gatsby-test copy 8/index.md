---
title: "gatsby prismjs 적용 테스트 입니다."
date: "2020-01-15T22:12:03.284Z"
category: "dev"
tags:
  - "gatsby"
  - "react"
  - "javascript"

description: "gatsby 블로그 만들기. prismjs 적용 하기."
---

## 코드 블럭 테스트

코드 블럭 테스트 마크다운 파일입니다.

- light 테마의 color는 nord theme colors palettes를 적용 했습니다.
- dark 테마의 color 본인이 커스텀 하였습니다.

---

### :not(pre) > code[class*="language-"]

`code`코드 강조 문법 확인 중입니다. `count`,`hihi`,`한글 테스트`

---

### font test

```javascript{6}
new MaterialAlertDialogBuilder(context)
  .setTitle("Title")
  .setMessage("Message")
  .setPositiveButton("Ok", null)
  .show();
// 하이라이트 위에 주석 테스트.
```

---

### jsx

> jsx 코드 블럭입니다.

```jsx{11-13, 41}
import React, { useState, useEffect, useCallback } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Bio from "../components/Bio";
import CategoryContainer from "../components/Category";
import ContentsContainer from "../components/Contents";

const index = ({ data, location }) => {
  const InitialTitle = "TAEK LOG";
  const InitialCategory = "all";
  const InitialTags = [];

  // selected category, checked tags
  const [category, setCategory] = useState(InitialCategory);
  const [tags, setTags] = useState(InitialTags);

  const posts = data.allMarkdownRemark.edges;

  const selectCategory = useCallback(
    selectedCategory => {
      if (selectedCategory === category) return;
      setCategory(selectedCategory);
      setTags(InitialTags);
    },
    [category],
  );
  const checkTag = useCallback(tag => {
    setTags(prevTags => {
      return prevTags.find(prevTag => prevTag === tag)
        ? prevTags.filter(prevTag => prevTag !== tag)
        : prevTags.concat(tag);
    });
  }, []);
  const checkTagInsidePost = useCallback(tag => {
    setTags([tag]);
  }, []);

  return (
    <Layout location={location}>
      <SEO title={InitialTitle} />
      <Bio />
      <main>
        <CategoryContainer
          category={category}
          tags={tags}
          selectCategory={selectCategory}
          checkTag={checkTag}
        />
        <ContentsContainer
          posts={posts}
          category={category}
          tags={tags}
          checkTagInsidePost={checkTagInsidePost}
        />
      </main>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { ne: "" }, tags: { ne: "" } } }
    ) {
      edges {
        node {
          frontmatter {
            category
            tags
            description
            date(formatString: "YYYY-MM-DD")
            title
          }
          id
          fields {
            slug
          }
          excerpt(format: PLAIN, pruneLength: 105, truncate: true)
        }
      }
    }
  }
`;

export default index;
```

---

### scss

> scss 코드 블럭입니다.

```scss{2-4, 16}
.gatsby-highlight-code-line {
  background-color: scale-color($light-point-color, $alpha: -85%);
  display: block;
  padding-right: 1rem;
  padding-left: 1.25rem;
  border-left: 0.25rem solid #ffa7c4;
}

code[class*="language-"],
pre[class*="language-"] {
  color: black;
  background: none;
  font-family: Source Code Pro, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 1rem;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

 @media print {
 code[class*="language-"],
 pre[class*="language-"] {
   text-shadow: none;
}
```

---

### javascript

> javascript 코드 블럭입니다.

```javascript
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import path from "path";
import fs from "fs";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./modules";
import PreloadContext from "./lib/PreloadContext";

const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8"),
).files;
// console.log(2, manifest.files['runtime~main.js']);
// console.log(2, manifest.files['runtime-main.js']);
const chunks = Object.keys(manifest)
  .filter(key => /chunk\.js$/.exec(key))
  .map(key => `<script src="${manifest[key]}"></script>`)
  .join("");

function createPage(root, stateScript) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="shortcut icon" href="/favicon.ico"/>
    <meta name="theme-color" content="#000000" />
    <title>React App</title>
    <link href="${manifest["main.css"]}" rel="stylesheet" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
      ${root}
    </div>
    ${stateScript}
    <script src="${manifest["runtime-main.js"]}"></script>
    ${chunks}
    <script src="${manifest["main.js"]}"></script>
  </body>
  </html>
  `;
}

const app = express();

const serverRender = async (req, res, next) => {
  const context = {};
  const store = createStore(rootReducer, applyMiddleware(thunk));

  const preloadContext = {
    done: false,
    promises: [],
  };

  const jsx = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );

  ReactDOMServer.renderToStaticMarkup(jsx);
  try {
    await Promise.all(preloadContext.promises);
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;
  const root = ReactDOMServer.renderToString(jsx);
  const stateString = JSON.stringify(store.getState()).replace(/</g, "\\u003c");
  const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`;
  console.log(stateScript);
  res.send(createPage(root, stateScript));
};

const serve = express.static(path.resolve("./build"), {
  index: false,
});

app.use(serve);
app.use(serverRender);

app.listen(5000, () => {
  console.log("Running on http://localhost:5000");
});
```

---

### tsx

> tsx 코드 블럭입니다.

```tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { changeField, initializeForm, register, KeyType } from "../../modules/auth";
import { RootState } from "../../modules";
import AuthForm from "../../components/auth/AuthForm";
import { check } from "../../modules/user";

function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }: RootState) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "register", key: name as KeyType, value }));
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if ([username, password, passwordConfirm].includes("")) {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }
    if (password !== passwordConfirm) {
      console.log("비밀번호 틀림");
      dispatch(changeField({ form: "register", key: "password", value: "" }));
      dispatch(changeField({ form: "register", key: "passwordConfirm", value: "" }));
      return;
    }
    dispatch(register({ username, password }));
  };

  useEffect(() => {
    if (user) {
      console.log("check API success");
      history.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("loacalStorage is not working");
      }
      return;
    }
    dispatch(initializeForm("register"));
  }, [dispatch, history, user]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError("이미 존재하는 계정명입니다.");
        return;
      }
      setError("회원가입 실패");
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
}

export default LoginForm;
```

---

### typescript

> typescript 코드 블럭입니다.

```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import * as postAPI from "../lib/api/posts";
import createRequestSaga from "../lib/createRequestSaga";

type PostState = {
  post: any;
  error: any;
};

const readPostSaga = createRequestSaga("post/read_post", postAPI.readPost);
export function* postSaga() {
  yield takeLatest("post/read_post", readPostSaga);
}

const initialState: PostState = {
  post: null,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    read_post: (_state, _action: PayloadAction<string>) => {},
    read_post_success: (state, { payload: post }: PayloadAction<any>) => {
      state.post = post;
    },
    read_post_failure: (state, { payload: error }: PayloadAction<any>) => {
      state.error = error;
    },
    unload_post: () => initialState,
  },
});

export const { read_post, unload_post } = postSlice.actions;
export default postSlice.reducer;
```

---
