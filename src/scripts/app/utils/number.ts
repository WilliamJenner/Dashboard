export const hoursToMilliseconds = (hour: number): number => {
    const milliSecondsInHour = 3600000;
    
    return hour * milliSecondsInHour;
}