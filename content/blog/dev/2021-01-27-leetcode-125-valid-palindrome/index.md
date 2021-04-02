---
title: "LeetCode | 125. Valid Palindrome"
date: 2021-01-27
category: dev
tags:
  - 알고리즘
  - 문제풀이
  - Javascript
description: LeetCode 125. Valid Palindrome 문제 풀이
---

> 이 포스트는 제가 개인적으로 공부한 내용을 정리한 글입니다. 잘못된 내용이나 부족한 부분 등 자유로운 피드백은 저에게 큰 도움이 됩니다!

![LeetCode logo image](../../../assets/leetcode.svg)

## 문제

[LeetCode 125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

**주어진 문자열이 팰린드롬인지 확인하라. 대소문자는 구분하지 않으며, 영숫자만을 대상으로 한다.**

팰린드롬은 회문이라고도 하며, 거꾸로 읽어도 제데로 읽는 것과 같은 단어나 문장 등을 말한다.

**예1 :**

```
Input: "A man, a plan, a canal: Panama"
Output: true
```

**예2 :**

```
Input: "race a car"
Output: false
```

### 풀이

1. 입력받은 문자열을 소문자로 변환한 다음 정규식을 활용하여 영숫자를 제외한 문자를 빈문자로 교체 후 변수에 저장한다.
2. 변수에 저장 된 문자열을 다시 배열로 만들고 뒤집은 다음 다시 문자열로 만든다.
3. 변수에 저장 된 문자열과 뒤집은 문자열을 비교한다.

```js
var isPalindrome = function (s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
console.log(isPalindrome("race a car"));                      // false
```
