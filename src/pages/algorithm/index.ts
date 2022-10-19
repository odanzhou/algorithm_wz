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
