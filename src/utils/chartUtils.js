export const calculateMaxValue = (data, key) =>
  Math.max(...data.map((item) => item[key]));

export const calculateEndAngle = (value) => 90 + (360 * value) / 100;
