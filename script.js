
function solution(schedule, time) {
    const currentTime = new Date(`January 1, 1970 ${time}`);
    for (let i = 0; i < schedule.length; i++) {
      const busTime = new Date(`January 1, 1970 ${schedule[i]}`);
      if (busTime > currentTime) {
        if (i === 0) {
          return -1;
        } else {
          const lastBusTime = new Date(`January 1, 1970 ${schedule[i - 1]}`);
          return (currentTime - lastBusTime) / 60000;
        }
      }
    }
    const lastBusTime = new Date(`January 1, 1970 ${schedule[schedule.length - 1]}`);
    return (currentTime - lastBusTime) / 60000;
  }
console.log(solution(["12:30", "14:00", "19:55"],"14:30"));