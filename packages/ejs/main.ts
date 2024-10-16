import fs from 'fs';
import ejs from 'ejs';

const template = fs.readFileSync('./src/template.ejs', { encoding: 'utf-8'});
const renderData = function (count: number = 0) {
  let index = -1, list = [];
  while(++index < count) {
    list.push({id: index, name: `测试${index}`})
  }
  return list
}

console.time('Ejs Render');
const html = ejs.render(template, {list: renderData(100000)});
// console.log(html)
console.timeEnd('Ejs Render')
