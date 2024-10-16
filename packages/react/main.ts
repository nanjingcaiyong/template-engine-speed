require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
})

import React = require('react');
const ReactDOMServer = require('react-dom/server');
const HelloWorld = require('./src/template').default;
const renderData = function (count: number = 0) {
  let index = -1, list = [];
  while(++index < count) {
    list.push({id: index, name: `测试${index}`})
  }
  return list
}

console.time('React Render');
const htmlString = ReactDOMServer.renderToString(React.createElement(HelloWorld, {list: renderData(100000)}));
// console.log(htmlString)
console.timeEnd('React Render');
