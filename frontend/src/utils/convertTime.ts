const timeConvert = (min: number): string => {
  let hours = min / 60;
  let rHours = Math.floor(hours);
  let minutes = (hours - rHours) * 60;
  let rMinutes = Math.round(minutes);

  return rHours + "h" + " " + rMinutes + "m";
};
export default timeConvert;
