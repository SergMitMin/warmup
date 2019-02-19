module.exports = function warmup(temperature) {
  let fahrenheit = temperature * (9 / 5) + 32;
  console.log(fahrenheit);
  return fahrenheit;
};
