---
title: "코드스피츠77(73) ES6+ 기초편 2회차 2/2"
date: 2022-03-19
category: dev
tags:
  - 코드스피츠
description: 코드스피츠77 ES6+ 2회차 Flow Control Statement 2/2 강의 내용을 정리했습니다.
---

> 이 포스트는 [코드스피츠73 ES6+ 2회차 2/2](https://www.youtube.com/watch?v=U6dmAT8KImY) 를 보고 개인적으로 정리한 내용입니다. 잘못된 내용이나 부족한 부분이 있으면 언제든 알려주세요.  
> 코드스피츠77 2회차 2/2 오디오 문제로 코드스피츠73 2회차 2/2 대체 수강하였습니다.

## 03. OPTIONAL FLOW CONTROL


**Conditional Statement**는 조건문, 판단문으로 번역되지만, 조건문에 좀 더 가깝다. `if (식)`의 값을 판단하고 조건이 성립하는지에 따라갈 수 있고 없고를 결정하기 때문에 조건문에 좀 더 가깝다.

### IF, IF ELSE
`if (식)`은 값을 판단하고 상태에 따라가냐 마냐를 결정하지만, `if (식) else`은 문장 전체가 필수적이고 반드시 결정된 로직을 의미한다.
```js
if (식) // Optional(옵셔널)
if (식) else // Mandatory(필수적)
```
- 자바스크립트에는 `else if`라는 건 존재하지 않는다.
```js
const c = 3;
if (c === 1) {
} else if (c === 2) { 
} else if (c === 3) {
}

// 위의 else if는 그냥 if else문에 if else문 하나 들어온 것이다.
if (c === 1) {
} else {
  if (c === 2) { 
  } else {
    if (c === 3) {
    }
  }
}

// else if가 안 이상하다면 아래의 코드도 안 이상해야 한다.
if (c === 1) {
} else switch (c) {
}

if (c === 1( {
} else for(;;){
}
```
- `if`문 같은 경우에는 `if`문이 소속된 모든 문을 분석해서 후방에 있는 `else`가 앞에 있는 `if`를 따라가도록 뒤에서부터 앞으로 해석하기로 되어있다. 그러한 현상을 방지하기 위해서 괄호를 묵던지 중괄호로 묶어서 분리해주지 않으면 항상 **후방 결합**을 하게 되어있다. 
- 이 후방 결합 특성 때문에 많은 문제가 일어난다.
- `if else`의 중첩이나 복잡한 사용은 `else`의 후방 결합을 완전하게 이해하지 못하거나 통제하지 못하면 대부분 버그로 이어진다.
- `else if`구문은 사용하지 않는게 좋다. 무조건 중괄호 사용 
  ```js
  if (식) {
  } else { 
    if (식) {
    } else {
    }
  }
  ```
- 위의 특성 때문에 병렬적인 조건을 선택할 때 절대 `else if`를 사용하면 안 된다.
- 컴파일 에러도 안 나고 런타임도 통과하기 때문에 `else` 후방 조건이 제대로 붙어 있는지 검사하기 까다롭다. 

### NESTED, PARALLEL
- `if else`는 1차 조건이 분기한 이후에 **부분집합**에 대해서만 사용한다.
- 병행 조건일 때 사용하는 것이 아니라 부분집합에 대해 다시 분기할 때 사용한다.
- `if, if else`를 제대로 보면 nested 되어 있는 sub 집합에 대한 조건으로 보인다.
- `else if`는 병행 조건일 때 사용하면 안 되는데 착시 때문에 `switch`와 같다고 생각한다.
- **병행 조건일 때는 무조건 `switch`를 사용한다.**
- 내가 평가해야 하는 식들이 동등할 경우 `switch` 사용
- 내가 평가해야 하는 식이 nested 되어 있으면, `if, if else` 사용
- `if`의 중첩은 sub 집합 관계일 때만 사용한다.

### OPTIONAL, MANDATORY
 `if else`는 mandatory를 의미하는데, `else` 안에 `if` optional 조건이 들어가면 어떻게 바라봐야 할까?
```js
if (식) { // Mandatory
} else {
  if (식) { // Optional
  }
}
```
- 코드를 다 까서 읽기 전까지는 이 블록에 대해 반드시 실행이 되는지 안 되는지 판단할 수가 없다.
- mandatory로 갔으면 다 mandatory로 가라.
  ```js
  if (식) { // Mandatory
  } else {
    if (식) { // Mandatory
    } else {
    }
  }
  ```
  
`if else` 안에 `switch`가 들어가면 어떻게 될까?
```js
if (식) { // Mandatory
} else { // switch 때문에 병행 조건으로 빠짐
  switch (식) {
    case 값1:
    case 걊2:
    default: 
  }
}
```
- 병행 조건은 `default`가 있는 이상 케이스에 예외가 없기 때문에 mandatory이다.

내가 짠 로직이 mandatory 로직을 타고 있는지 중간에 optional로 빠지는지 알 수 있어야 한다. mandatory로 시작했으면 mandatory로 끝나야 하고 optional이 개입했으면 optional로 끝나야 한다. 두 개를 섞으려면 굉장히 로직 분리를 잘하던지 완전히 분리해서 함수로 보내버리던지 격리해야 한다.

## 04. ITERATE FOLW CONTROL

### FOR

#### LIMITED STATEMENT

`for`는 3개의 선택식과 반복을 수행할 문(블록문)으로 이루어져 있다. 3개의 선택식은 모두 선택사항으로 식이 생략된 공문이 올 수 있다.

```js
for ([initialization]; [condition]; [final-expression])
   statement
```

- initialization는 선언문 또는 식만 들어올 수 있다.
- condition는 식만 들어올 수 있고 `truthy`를 평가한다.
- final-expression는 반복 후 평가할 식이다.



#### EMPTY TRUTHY

`for`의 선택식은 모두 선택사항으로 식이 생략된 공문이 올 수 있다. 식이 생략된 `for`는 왜 무한루프를 도는 걸까?

```js
for (;;) {
  // 무한 반복...
}
```

- condition에 식이 없다면? 즉, 공문이면 값은 **참**으로 평가된다.
  - 공문/공식이면 `truthy`로 평가된다는 예외 항목이 언어 스펙에 정의되어 있다.

#### LAST EXECUTION

`final-expression`는 반복마다 `statement` 수행 후 맨 마지막에 실행된다.

```js
for (let i = 0; i < 10; i++) {
//  ... statement 
  
// final-expression
}
```

### WHILE, DO WHILE

`while`은 식과 반복을 수행할 문(블록문)으로 이루어져 있고 식의 `truthy`를 평가한다.

```js
while (condition) 
  statement
```

`do...while`은 식을 평가하기 전에 `do(문)`를 먼저 실행함으로 무조건 1번은 실행된다.

```js
do
   statement
while (condition);
```

#### INFINITE LOOP

`while, do...while`은 condition에 관여되어 있는 상태값이 바뀌지 않으면 무한루프에 빠질 위험이 크다.

```js
var a = -1;

while (a > 2) {
  a++; // 생략되면 무한루프에 빠진다.
}
```

- 올바른 문인지 확인하려면 condition에 등장하는 상태가 statement에 나오는지부터 확인해야 한다.

```js
var a = -1
while (act.method().c) { // ??
  other.action() // ?? 
}
```

- 이렇게 식의 상태가 문과 연관되어 있는지 알 수 없는 코드는 절대 사용하면 안 된다. 

```js
var a = act.method().c

while (a){
  author.action();
  a = act.method().c;
  if (a ==='abc') a = false; // 안전장치를 걸어서 무한루프에 빠지지 않게 할 수 있다.
}
```

- 식의 상태가 문에 나오기 때문에 로그를 때리든 무엇을 하든 어떻게든 확인할 수 있다.