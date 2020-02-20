---
title: "[자료구조] 스택"
date: 2020-02-18
category: development
tags:
  - javascript
  - 자료구조
description: 자료구조 스택에 대해 공부한 내용을 정리하고 자바스크립트로 어떻게 스택을 구현했는지 공유해본다.
---

> 이 포스트는 제가 개인적으로 공부한 내용을 정리한 글입니다. 잘못된 내용이나 부족한 부분 등 자유로운 피드백은 저에게 큰 도움이 됩니다!

## 스택이란?

**스택은 한쪽 끝에서만 자료를 넣거나 뺄 수 있는 후입선출(LIFO, last in first out)의 형태로 데이터 접근을 제한한 자료구조이다.** 예를 들면 책이 쌓여 있는 것을 생각하면 된다. 맨 위에 있는 책은 제일 마지막에 올려놓은 책일 것이고, 맨 아래에 있는 책은 맨 처음 올려놓은 책일 것이다. 맨 아래에 있는 책을 보고 싶으면 맨 위에 있는 책부터 하나씩 치워야 한다. 자료구조의 스택도 이처럼 한쪽 끝에서만 데이터에 접근할 수 있다.

이러한 스택의 개념은 자바스크립트의 호출 스택, 브라우저의 뒤로 가기, 문서 작업의 이전 상태 되돌아가기(Ctrl+z) 등 많은 곳에서 활용된다.

## 자바스크립트로 스택 구현하기

자바스크립트 배열에는 유용한 메서드들이 많기 때문에 스택을 구현하기가 쉽다.

### 스택 ADT

- `isFull()` 스택이 가득 찼는 지 여부를 확인한다.
- `isEmpry()` 스택이 비어 있는지 여부를 확인한다.
- `push(x)` x를 스택 맨 위에 삽입한다.
- `pop()` 스택 맨 위에서 하나의 요소를 삭제한다.
- `peek()` 스택의 최상위 요소를 반환한다.
- `size()` 스택에 존재하는 요소의 수를 반환하다.

```js
class Stack {
  constructor(array = []) {
    this.array = array;
  }
  // 스택의 접근과 검색에 필요한 메서드, 스택을 복사한다.
  getBuffer() {
    return [...this.array];
  }

  // stack ADT
  isEmpty() {
    return this.array.length === 0;
  }
  push(value) {
    this.array.push(value);
  }
  pop() {
    return this.array.pop();
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  size() {
    return this.array.length;
  }
}

const stack = new Stack();

console.log(stack.isEmpty()); // log: true

stack.push(1);
stack.push(2);

console.log(stack.getBuffer()); // log: [1,2]
console.log(stack.peek()); // log: 2
console.log(stack.pop()); // log: 2
console.log(stack.size()); // log: 1
```

### 스택 특정 항목에 접근 및 검색하기

```js
// 스택 초기화
const stack2 = new Stack();

stack2.push("a");
stack2.push("b");
stack2.push("c");
```

#### 스택 특정 항목 접근

```js
function stackAccessNthTopNode(stack, n) {
  if (n <= 0) throw "error";
  if (stack.isEmpty()) throw "Empty stack";

  const bufferArray = stack.getBuffer();

  while (--n !== 0) {
    bufferArray.pop();
  }
  return bufferArray.pop();
}

console.log(stackAccessNthTopNode(stack2, 2)); // log: b
console.log(stackAccessNthTopNode(stack2, 1)); // log: c
```

#### 스택 검색

```js
function stackSearch(stack, element) {
  if (stack.isEmpty()) throw "Empty stack";

  const bufferArray = stack.getBuffer();

  while (bufferArray.length) {
    if (bufferArray.pop() === element) {
      return true;
    }
  }
  return false;
}

console.log(stackSearch(stack2, "b")); // log: true
console.log(stackSearch(stack2, "d")); // log: false
```

## 마치며

저번 배열에 이어 스택을 공부했다. 스택이 무엇인지는 알고 있었는데 실제로 구현한 것은 이번이 처음이다. 자바스크립트 배열은 정말 편리한 것 같다. 사실 스택 클래스를 따로 구현 안 해도 배열 자체로 스택처럼 활용할 수 있지만, 스택을 직접 구현해봄으로써 자료구조의 ADT라는 개념이 있다는 것을 알게 되었고 스택 ADT에 대해 알게 되었다.

---

### 참고

- [패스트캠퍼스 알고리즘 온라인강의 스택](https://www.fastcampus.co.kr/dev_online_algo/)
- [나무위키 추상 자료형(ADT)](https://ko.wikipedia.org/wiki/%EC%B6%94%EC%83%81_%EC%9E%90%EB%A3%8C%ED%98%95)
- https://www.tutorialspoint.com/stack-adt-in-data-structures
