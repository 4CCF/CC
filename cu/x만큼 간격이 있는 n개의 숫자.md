## <a href='https://school.programmers.co.kr/learn/courses/30/lessons/12954'>x만큼 간격이 있는 n개의 숫자</a>

```javascript
function solution(x, n) {
    var answer = [];
    // 배열의 길이가 n과 같지 않으면 참
    for(let i = x; n !== answer.length; i+=x){
      answer.push(i) 
    }
    // 배열의 길이가 n개일때 의 배열 반환
    return n === answer.length && answer;
}
```
