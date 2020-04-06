import React from 'react';
import '../../App.css';

export default props => {
  const style = {
    top: `${props.food[1]}%`,
    left: `${props.food[0]}%`,
  };
  return <div className="snake-food" style={style} />;
};
