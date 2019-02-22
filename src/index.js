module.exports = function warmup(temperature) {
  const coeff = 9/5;
  const correction = 32;

  return temperature * coeff + correction;
};
