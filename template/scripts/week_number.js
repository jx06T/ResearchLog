function getWeekNumber() {
    // 設定基準日期為 2025/2/1
    const baseDate = new Date('2025-02-01');
    
    // 獲取當前日期
    const currentDate = new Date();
    
    // 計算日期差異 (以毫秒為單位)
    const diffTime = currentDate - baseDate;
    
    // 計算天數
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    
    // 計算周次 (取整數)
    const weekNumber = Math.floor(diffDays / 7) + 1;
    
    return `Week ${weekNumber}`;
}

module.exports = getWeekNumber;
