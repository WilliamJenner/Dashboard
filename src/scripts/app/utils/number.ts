export const hoursToMilliseconds = (hour: number): number => {
  const milliSecondsInHour = 3600000;

  return hour * milliSecondsInHour;
};

export const minutesToMilliseconds = (minutes: number): number => {
  const milliSecondsInMinute = 60000;

  return minutes * milliSecondsInMinute;
};
