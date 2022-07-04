function sum(...nums) {
  let sum = 0
  for (const num of nums) {
    sum += num
  }
  return sum
}

function mul(a, b) {
  return a * b
}

module.exports = {
  sum,
  mul,
}
