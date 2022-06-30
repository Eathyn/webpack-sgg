function sum(...nums) {
  let sum = 0
  for (const num of nums) {
    sum += num
  }
  return sum
}

module.exports = {
  sum,
}
