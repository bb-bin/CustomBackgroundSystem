/**
 * Routes:
 *  - ./src/layouts/baseLayout.js
 */

import React, { useEffect } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: '注册日期',
    dataIndex: 'registe_time',
  },
  {
    title: '用户姓名',
    dataIndex: 'username',
  },
  {
    title: '注册地址',
    dataIndex: 'city',
  },
];

const UserList = ({ getUser, dataSource, getAllUser, allUser }) => {
  useEffect(() => {
    getUser();
    getAllUser();
  }, []);

  return (
    <Table
      size="small"
      rowKey="id"
      dataSource={dataSource}
      columns={columns}
      style={{ padding: '20px' }}
      pagination={{ onChange: getUser, total: allUser }}
    />
  );
};

export default connect(
  ({ userList }) => {
    return {
      dataSource: userList.userList,
      allUser: userList.allUser,
    };
  },
  dispatch => {
    return {
      getUser(page, pageSize) {
        dispatch({
          type: 'userList/getUserList',
          page,
          pageSize,
        });
      },
      getAllUser() {
        dispatch({
          type: 'userList/getAll',
        });
      },
    };
  },
)(UserList);
