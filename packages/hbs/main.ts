import fs from 'fs';
import Handlebars from "handlebars";

const template = fs.readFileSync('./src/template.hbs', { encoding: 'utf-8'});
const renderData = function (count: number = 0) {
  let index = -1, list = [];
  while(++index < count) {
    list.push({id: index, name: `测试${index}`})
  }
  return list
}

console.time('HBS Render');
const html = Handlebars.compile(template)({list: renderData(100000)});
// console.log(html)
console.timeEnd('HBS Render')
