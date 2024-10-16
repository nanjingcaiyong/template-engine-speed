import fs from 'fs';
import { Liquid } from 'liquidjs';
const engine = new Liquid();

const template = fs.readFileSync('./src/template.liquid', { encoding: 'utf-8' });
const renderData = function (count: number = 0) {
  let index = -1, list = [];
  while(++index < count) {
    list.push({id: index, name: `测试${index}`})
  }
  return list
}

console.time('Liquid Render');
engine.parseAndRender(template, {list: renderData(100000)}).then(html => {
  // console.log(html)
  console.timeEnd('Liquid Render')
})


