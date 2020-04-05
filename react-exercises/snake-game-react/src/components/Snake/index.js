import React from 'react';
import '../../App.css';

export default ({snakeDots}) => {
  return snakeDots.map((dot, i) => {
    const style = {
      top: `${dot[1]}%`,
      left: `${dot[0]}%`,
    };
    return <div className="snake-dot" style={style} key={i} />;
  });
};
