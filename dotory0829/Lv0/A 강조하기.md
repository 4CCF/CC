## <a href='https://school.programmers.co.kr/learn/courses/30/lessons/181874'>A 강조하기

</a>

### 문제 설명

문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

```javascript
// 1)
function solution(myString) {
  return myString.toLowerCase().replaceAll("a", "A");
}

// 2)
function solution(myString) {
  return [...myString]
    .map((i) => (i === "a" || i === "A" ? i.toUpperCase() : i.toLowerCase()))
    .join("");
}
```
