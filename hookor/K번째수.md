## <a href='https://school.programmers.co.kr/learn/courses/30/lessons/42748'>K번째수</a>

```javascript
//sort => 유니코드 순으로 정렬
function solution(array, commands) {
    const factory = (arr, init, destin, target) => {
        const i = init - 1
        const j = destin - init + 1
        const k = target - 1 
        const copy = [...arr]
        const seperated = copy.splice(i,j).sort((a,b) => a-b)
        return seperated[k]
        
    }
    const answer = commands.map(i => factory(array, ...i))
    return answer
}
```
