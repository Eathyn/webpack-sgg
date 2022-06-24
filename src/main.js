import { count } from './js/count'
import sum from './js/sum'

import './css/index.css'
import './css/test.css'
import './css/iconfont.css'

console.log(count(2, 1))
console.log(sum(1, 2, 3, 4))

if (module.hot) {
  module.hot.accept('./js/count.js', function (count) {
    console.log(count(2, 1))
  })

  module.hot.accept('./js/sum.js', function(sum) {
    console.log(sum(1, 2, 3, 4))
  })
}
