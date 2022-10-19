// 杨辉三角（帕斯卡三角形）

const fn  = (n) => {
    const res = Array.from({ length: n}, () => [])
    res[0] = [1]
    for(let i = 1; i < n; i++) {
        for(let j = 0; j <= i; j++) {
            res[i].push(res[i - 1][j] + (res[i - 1][j+ 1] || 0))
        }
    }
    return res
}

// 优化，减少二次遍历的次数
const fnGen2  = (n) => {
    const res = Array.from({ length: n}, () => [])
    res[0] = [1]
    for(let i = 1; i < n; i++) {
        for(let j = 0; j <= Math.floor(i / 2); j++) {
            const val = (res[i - 1][j - 1] || 0) + (res[i - 1][j] || 0)
            res[i][j] = val
            res[i][i - j] = val
            
        }
    }
    return res
}
