import React from 'react';
import { userData } from './userMainContent';
import { LogoutOutlined, EditOutlined, UserOutlined } from '@ant-design/icons'
import './index.css'

interface ListProps {
  icon: any;
  description: string;
  showArrow: boolean;
  clickEvent?:()=>void
}

function UserContent() {

  const showContentListItem = (params:ListProps) => {
    const { icon, description, showArrow,clickEvent} = params
    return (
      <div className='userContent_content-item' onClick={clickEvent} >
        <div className='userContent-icon' >{icon}</div>
        <div className='userContent-description'>{description}</div>
        {showArrow && <div className='userContent-arrow'>&#8250;</div>}
      </div>
    )
  }

  const toWriteParams = {
    icon:<EditOutlined />,
    description:'去写作',
    showArrow:true,
    clickEvent:()=>{
      console.log('1');
    }
  }

  const userCenterParams = {
    icon:<UserOutlined />,
    description:'个人中心',
    showArrow:true,
    clickEvent:()=>{
      console.log('1');
    }
  }

  const logOutParams = {
    icon:<LogoutOutlined />,
    description:'退出登录',
    showArrow:false,
    clickEvent:()=>{
      console.log('1');
    }
  }

  return (
    <div className='userContent-container'>
      <div className='userContent_head'>
        <div className='userContent_head-userName'>{userData.userName}</div>
        <div className='userContent_head-extra'>
          <p className='userContent_head-extra-item'>{'作品数量:' + userData.articleNumber}</p>
          <p className='userContent_head-extra-item'>{'不知写啥:' + userData.articleNumber}</p>
        </div>
      </div>
      <div className='userContent_content'>
        {/* 此处也可写一个数组遍历展示 */}
        {showContentListItem(toWriteParams)}
        {showContentListItem(userCenterParams)}
      </div>
      <div className='userContent_footer'>
        {showContentListItem(logOutParams)}
      </div>
    </div>
  );
}

export default UserContent;
