import React from 'react';

const HelloWorld = ({list}: any) => {
  return <div>{list.map((item: any)=> <p key={item.id}><span>{item.id}</span><span>{item.name}</span></p>)}</div>
};

export default HelloWorld;
