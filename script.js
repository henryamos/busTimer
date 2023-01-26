function solution(schedule, time) {
  let timeLeft = -1;
  for (let i = 0; i < schedule.length; i++) {
      if(time === schedule[0]) break;
      let scheduleHour = parseInt(schedule[i].split(":")[0]);
      let scheduleMin  = parseInt(schedule[i].split(":")[1]);
      let timeHour = parseInt(time.split(":")[0]);
      let timeMin  = parseInt(time.split(":")[1]);
      if((scheduleHour <= timeHour && scheduleMin < timeMin) || (scheduleHour < timeHour)) {
          let time1 = new Date(`1970-01-01T${schedule[i]}:00Z`);
          let time2 = new Date(`1970-01-01T${time}:00Z`);
          let diffInMilliSeconds = Math.abs(time2 - time1);
          let diffInMinutes = Math.floor(diffInMilliSeconds / (60 * 1000));
          timeLeft = diffInMinutes;
      }
  }
  return timeLeft;
}
console.log(solution(["12:30", "14:00", "19:55"],"14:00"));