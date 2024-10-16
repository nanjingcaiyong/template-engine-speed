import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import fs from 'fs';

const renderData = function (count: number = 0) {
  let index = -1, list = [];
  while(++index < count) {
    list.push({id: index, name: `测试${index}`})
  }
  return list
}
const app = createSSRApp({
  data: () => ({
    list: renderData(100000)
  }),
  template: fs.readFileSync('./src/template.vue', { encoding: 'utf-8' })
})

console.time('Vue Render');
renderToString(app).then(html => {
  // console.log(html)
  console.timeEnd('Vue Render')
})
