import pug from 'pug';

const renderData = function (count: number = 0) {
  let index = -1, list = [];
  while(++index < count) {
    list.push({id: index, name: `测试${index}`})
  }
  return list
}

console.time('Pug Render');
const html = pug.renderFile('./src/template.pug',{list: renderData(100000)});
// console.log(html)
console.timeEnd('Pug Render')


