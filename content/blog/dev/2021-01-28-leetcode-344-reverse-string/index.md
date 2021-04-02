---
title: "LeetCode | 344. Reverse String"
date: 2021-01-28
category: dev
tags:
  - 알고리즘
  - 문제풀이
  - Javascript
description: LeetCode 344. Reverse String 문제 풀이
---

> 이 포스트는 제가 개인적으로 공부한 내용을 정리한 글입니다. 잘못된 내용이나 부족한 부분 등 자유로운 피드백은 저에게 큰 도움이 됩니다!

![LeetCode logo image](../../../assets/leetcode.svg)

## 문제

[LeetCode 344. Reverse String](https://leetcode.com/problems/reverse-string/)

**문자열을 뒤집는 함수를 작성하라. 문자열은 배열로 제공된다.**

**예1 :**

```
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

**예2 :**

```
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

### 풀이

#### 투 포인터를 이용한 풀이
1. `left`, `rigth` 변수에 배열의 첫번째 index와 마지막 index를 저장한다.
2. `temp` 변수에 `s[left]` 값을 할당한다.
3. `s[left]`에 `s[rigth]`값을 할당한다.
4. `s[rigth]`에 `s[left]`값을 할당한다.
5. `left+=1`, `rigth-=1` 한다.
6. 이렇게 문자열 배열이 전부 뒤집힐 때까지 투 포인터를 좁혀가며 순회한다.

```js
var reverseString = function(s) {
    for (let left = 0, right = s.length - 1; left < right; left++, right--) {
      const temp = s[left];
      s[left] = s[right];
      s[right] = temp;
    }
    return s;
};
```

#### 배열의 인스턴스 메서드를 이용한 풀이
1. 배열의 인스턴스 메서드인 `Array.prototype.reverse()`를 사용한다.

```js
var reverseString = function(s) {
   return s.reverse();
};
```