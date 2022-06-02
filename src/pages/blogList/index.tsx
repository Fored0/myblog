import React from "react";
import { List, Avatar, Divider } from "antd";
import './index.css'
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
function BlogList() {

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <>
            <List.Item style={{ width: window.screen.width - 200 }}>
              <List.Item.Meta
                className='blogList'
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<p>{item.title}</p>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
            <Divider />
          </>
        )}
      />
    </>
  );
}

export default BlogList;
