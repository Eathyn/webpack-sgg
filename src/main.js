import './css/index.css'
import './css/test.css'
import './css/iconfont.css'

const btn1 = document.querySelector('.test-dynamically-import')
btn1.addEventListener('click', () => {
  import(/* webpackChunkName: 'utils' */ './js/utils').then(({ sum }) => {
    console.log(sum(1, 2, 3, 4, 5))
  })
})
