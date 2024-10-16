const renderHtml = (list: any[]) => {
  return `<div>${list.reduce((str, item) => {
    str += `<p><span>${item.id}</span><span>${item.name}</span></p>`
    return str
  }, '')}</div>`;
}

const renderData = function (count: number = 0) {
  let index = -1, list = [];
  while(++index < count) {
    list.push({id: index, name: `测试${index}`})
  }
  return list
}

console.time('JS template Render');
const html = renderHtml(renderData(100000))
// console.log(html)
console.timeEnd('JS template Render')

