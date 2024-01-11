function solution(num1, num2) {
    var answer = 0;
    // 정수 반환 (반올림)
    // answer = Math.floor(num1 / num2);
    
    // 소숫점 제거
    answer = parseInt(num1 / num2);
    return answer;
}

console.log(solution(5, 3))