## <a href='https://school.programmers.co.kr/learn/courses/30/lessons/42748'>K번째수</a>

```javascript
function solution(array, commands) {
    const fn = (arr)=>{
        const [start,end,res] = arr
        return array.slice(start-1,end).sort((a, b) => a - b)[res-1];
    };
    
    return commands.map((item)=> fn(item));
}
```
