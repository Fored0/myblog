import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom'

const MenuItems = [{
  key:'/home',
  icon:'',
  label:'home',
  // children:'',
},{
  key:'/blogList',
  icon:'',
  label:'blogList'
},{
  key:'/release',
  icon:'',
  label:'release',
}]

function Menus() {
  const navigate = useNavigate()
  const currentRender = (e:any)=>{
    navigate(`${e.key}`)
  }
  return (
      <Menu
      mode="inline"
      theme="dark"
      // openKeys={openKeys}
      // onOpenChange={onOpenChange}
      // style={{ width: 256 }}
      items={MenuItems}
      onClick={(e)=>{currentRender(e)}}
    />
  );
}

export default Menus;
