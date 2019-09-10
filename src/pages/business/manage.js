/**
 * Routes:
 *  - ./src/layouts/baseLayout.js
 */

import React from 'react';
import { Table, Divider } from 'antd';

const columns = [
  {
    title: '店铺名称',
    dataIndex: 'name',
  },
  {
    title: '店铺地址',
    dataIndex: 'age',
  },
  {
    title: '店铺介绍',
    dataIndex: 'address',
  },
  {
    title: '操作',
    dataIndex: 'add',
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const Business = () => {
  return (
    <Table
      rowKey="id"
      dataSource={[
        { name: '效果演示', age: '广东省广州市越秀区中山五路219号华联购物中心F1', address: 'sad' },
      ]}
      columns={columns}
      align="center"
    />
  );
};

export default Business;
