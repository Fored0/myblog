import React from 'react';
import { Avatar } from 'antd';
import './index.css'
function Head() {
  return (
    <div>
      我的博客
      <Avatar className='head-img' src="https://joeschmoe.io/api/v1/random" />
    </div>
  );
}

export default Head;
