## <a href='https://school.programmers.co.kr/learn/courses/30/lessons/12916'>문자열 내 p와 y의 개수</a>
```javascript
function solution(s){
    var answer = true;
    
    const observer = (a)=>{
     return  s.toLowerCase().split(a).length > 0 &&
         s.toLowerCase().split(a).length 
    };
    
    observer('p') === observer('y') 
    ? answer = true
    : answer = false ; 

    return answer;
}
```
