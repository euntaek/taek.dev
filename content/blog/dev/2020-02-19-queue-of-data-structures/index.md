---
title: "자료구조 | 큐"
date: 2020-02-19
category: dev
tags:
  - 자료구조
description: 자료구조의 큐(queue)에 대해 알아보고 자바스크립트(Javascript)로 구현해보자.
---

> 이 포스트는 제가 개인적으로 공부한 내용을 정리한 글입니다. 잘못된 내용이나 부족한 부분 등 자유로운 피드백은 저에게 큰 도움이 됩니다!

## 큐(Queue)

**큐는 양쪽 끝이 열려 있어 한쪽에는 항상 자료를 삽입하는 데 사용되고 한쪽은 항상 자료를 제거하는데 사용되는 선입선출(FIFO, first in first out) 형태로 데이터 접근을 제한한 자료구조이다.** 예를 들면 티켓팅을 위해 줄을 선 것을 생각하면 된다. 줄을 제일 먼저 선 사람이 티켓을 제일 빨리 구매할 수 있듯이 자료구조의 큐도 이처럼 가장 먼저 들어간 것이 가장 먼저 나오고 가장 마지막에 들어간 것이 가장 마지막에 나온다.

이러한 큐의 개념은 자바스크립트의 태스크 큐, OS CPU의 연산 처리 시 작업대기, 프린터 문서 대기 목록, 동영상의 버퍼링 등 많은 곳에서 활용된다.

## 구현

자바스크립트 배열에는 유용한 메서드들이 많기 때문에 큐를 구현하기가 쉽다.

### 큐 ADT

- `isFull()` 큐가 가득 찼는지를 확인한다.
- `isEmpry()` 큐가 비였는지를 확인한다.
- `enqueue(x)` x를 큐 맨 뒤에 삽입(저장)한다.
- `dequeue()` 큐 맨 앞에서 하나의 요소를 제거하고 반환한다.
- `peek()` 큐의 맨 앞에서 하나의 요소를 반환한다.
- `size()` 큐에 존재하는 요소의 수를 반환하다.

```js
class Queue {
  constructor(array = []) {
    this.array = array;
  }
  getBuffer() {
    return [...this.array];
  }
  isEmpty() {
    return this.array.length === 0;
  }
  peek() {
    return this.array[0];
  }
  enqueue(value) {
    this.array.push(value);
  }
  dequeue() {
    return this.array.shift();
  }
  size() {
    return this.array.length;
  }
}

const queue = new Queue();

console.log(queue.isEmpty()); // log: true

queue.enqueue(1);
queue.enqueue(2);

console.log(queue.getBuffer()); // log: [1,2]
console.log(queue.peek()); // log: 1
console.log(queue.dequeue()); // log: 1
console.log(queue.getBuffer()); // log: [2]
```

### 큐 특정 항목에 접근 및 검색하기

```js
// 큐 초기화
const queue2 = new Queue();

queue2.enqueue("a");
queue2.enqueue("b");
queue2.enqueue("c");
```

#### 큐 특정 항목 접근

```js
function queueAccessNthTopNode(queue, n) {
  if (n <= 0) throw "error";
  if (queue.isEmpty()) throw "Empty queue";

  const bufferArray = queue.getBuffer();

  while (--n !== 0) {
    bufferArray.shift();
  }
  return bufferArray.shift();
}

console.log(queueAccessNthTopNode(queue2, 2)); // log: b
console.log(queueAccessNthTopNode(queue2, 1)); // log: a
```

#### 큐 검색

```js
function queueSearch(queue, element) {
  if (queue.isEmpty()) throw "Empty queue";

  const bufferArray = queue.getBuffer();

  while (bufferArray.length) {
    if (bufferArray.shift() === element) {
      return true;
    }
  }
  return false;
}

console.log(queueSearch(queue2, "b")); // log: true
console.log(queueSearch(queue2, "d")); // log: false
```

### 우선순위 큐

**우선순위 큐는 들어간 순서에 상관없이 우선순위가 높은 데이터가 먼저 나오는 자료구조이다.** 예를 들면 응급실을 생각하면 된다. 응급실에 어느 환자가 먼저 들어왔든 간에 제일 응급한 환자부터 치료한다. 우선순위 큐도 이처럼 들어온 순서보다 우선순위가 더 중요하다.

```js
// 배열로 구현한 우선순위 큐
class PriorityQueue {
  constructor(array = []) {
    this.array = array;
  }

  // 일반적인 큐와 다 동일하지만 enqueue만 다르다.
  getBuffer() {...}
  isEmpty() {...}
  peek() {...}
  dequeue() {...}
  size() {...}

  enqueue(priority, value) {
    let i = 0;

    if (!this.array.length) {
      this.array[0] = [priority, value];
    } else {
      for (i = this.array.length - 1; i >= 0; i--) {
        if (this.array[i][0] > priority) {
          this.array[i + 1] = this.array[i];
        } else {
          break;
        }
      }
      this.array[i + 1] = [priority, value];
    }
  }
}

const pq = new PriorityQueue();

// 우선순위의 숫자가 낮을수록 우선순위가 높다.
pq.enqueue(3, "a");
pq.enqueue(4, "b");
pq.enqueue(1, "c");
pq.enqueue(2, "d");
pq.enqueue(0, "e");
console.log(pq.getBuffer()); // log: [[0,'e'], [1,'c'], [2,'d'], [3,'a'], [4,'b']]
```
