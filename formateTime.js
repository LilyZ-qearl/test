1.获取这个月有几天

function getMonthofDay(time) {
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let days;
  
  if(month === 2) {
    days = year % 4 === 0 ? 29: 28;
  }else if(month == 1 || month == 3||month == 5|| month == 7 || month == 8 || month == 10 || month == 12) {
   days =31
  }else {
   days = 30
  }
  return days
 }
