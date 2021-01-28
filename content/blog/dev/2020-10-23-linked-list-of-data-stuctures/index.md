---
title: "자료구조 | 연결 리스트"
date: 2020-10-23
category: dev
tags:
  - 자료구조
description: 자료구조의 연결 리스트(Linked list)에 대해 알아보고 자바스크립트(Javascript)로 구현해보자.
---

> 이 포스트는 제가 개인적으로 공부한 내용을 정리한 글입니다. 잘못된 내용이나 부족한 부분 등 자유로운 피드백은 저에게 큰 도움이 됩니다!

## 연결 리스트(Linked list)

연결 리스트는 배열과 같이 연속된 메모리에 저장되는 리스트를 말한다.
배열과 달리 연속된 메모리에 순차적으로 저장되지 않고 임의의 위치에 저장시키되 자료와 포인터(다음 자료의 위치)를 같이 저장하여(이하 Node) 포인터를 통해 다음이나 이전 노드(Node)에 접근할 수 있는 또는 연결 되어 있는 자료구조이다.

### 장점

- 배열과 달리 미리 자료 공간을 할당하지 않아도 된다.
- 원하는 만큼 노드를 동적으로 추가/삭제할 수 있다.

### 단점

- 자료가 정렬되어 있지 않고 임의의 위치에 저장되어 있어 배열의 인덱스처럼 특정 노드에 바로 접근이 불가능함으로 접근 속도가 느리다.

## 구현

### ADT

- `append(data)` 연결 리스트 맨 뒤에 노드를 추가한다.
- `prepend(data)` 연결 리스트 맨 앞에 노드를 추가한다.
- `pop()` 연결 리스트 맨 뒤에 노드를 제거하고 반환한다.
- `popFirst()` 연결 리스트 맨 앞에 노드를 제거하고 반환한다.
- `remove(data)` 연결 리스트 노드 하나를 제거하고 반환한다.
- `getHead()` 연결 리스트 맨 앞(haed) 노드를 반환한다.
- `getTail()` 연결 리스트 맨 뒤(tail) 노드를 반환한다.
- `isEmpry()` 연결 리스트가 비였는지 확인한다.
- `print()` 연결 리스트의 데이터를 출력한다.

### Node Class

```js
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
```

### Linked list CLass

```js
class LinkedList {
  constructor(data) {
    if (data) this.head = new Node(data);
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.isEmpty(data)) {
      this.head = newNode;
    } else {
      const lastNode = this.getTail();
      lastNode.next = new Node(data);
    }
  }

  prepend(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  pop() {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode) {
      if (!currentNode.next) {
        if (!previousNode) this.head = null;
        else previousNode.next = null;

        return currentNode.data;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  popFirst() {
    const currentNode = this.head;

    if (currentNode) {
      this.head = currentNode.next;
    }
    return currentNode.data;
  }

  remove(data) {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode) {
      if (currentNode.data === data) {
        if (!previousNode && !currentNode.next) this.head = null;
        if (!previousNode && currentNode.next) this.head = currentNode.next;
        else previousNode.next = currentNode.next;
        return currentNode.data;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  isEmpty(data) {
    return !this.head ? true : false;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
```

```js
// 연결 리스트 초기화
const linkedList = new LinkedList();

// 1 ...10 추가
for (let i = 1; i < 11; i++) {
  linkedList.append(i);
}

// 맨 앞 노드 추가
linkedList.prepend(0); // log: 0, 1, 2, ... 10
linkedList.pop(); // log: 10
linkedList.remove(5); // log: 5
linkedList.getHead(); // log: Node { data: 0, next: [Node] }
linkedList.getTail(); // log: Node { data: 9, next: null }
linkedList.print(); // log: 0, 2, 3, 4, 6 ...9
```
