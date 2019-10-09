function calendarWeeks(year: number, month: number) {
    const resultList = [];
    //这个月的第一天是几月几日
    const firstDate = new Date(year, month);
    //这个月的第一天是星期几
    const firstDay = firstDate.getDay();
    //【这个月的第0天】上个月的最后一天是几月几号
    const prevMonthDate = new Date(year, month, 0);
    for (let day = firstDay - 1; day >= 0; day--) {
        resultList.push({
            year: prevMonthDate.getFullYear(),
            month: prevMonthDate.getMonth(),
            date: prevMonthDate.getDate() - day,
            current: false
        });
    }
    //【下个月的第0天】这个月的最后一天是几月几号
    const lastDate = new Date(year, month + 1, 0);
    for (let date = 1; date <= lastDate.getDate(); date++) {
        resultList.push({
            year: year,
            month: month,
            date,
            current: true
        });
    }
    const remainDays = 42 - firstDay - lastDate.getDate();
    //下个月的第一天
    const nextMonthDate = new Date(year, month + 1, 1);
    for (let date = 1; date <= remainDays; date++) {
        resultList.push({
            year: nextMonthDate.getFullYear(),
            month: nextMonthDate.getMonth(),
            date,
            current: false
        });
    }
    //返回这一整个月的日历
    return resultList;
}

get calendar() {
        const weeks = calendarWeeks(this.year, this.month);
        return Array.from({ length: 6 }, (v, k) =>
            weeks.slice(k * 7, k * 7 + 7)
        );
    }
