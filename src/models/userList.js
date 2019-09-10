import request from '../utils/request.js';

export default {
  namespaced: 'userList',

  state: {
    userList: [],
    allUser: 1,
  },

  effects: {
    *getUserList(action, { put }) {
      let offset = action.page * action.pageSize || 1 * 10;
      let limit = action.pageSize || 10;
      let result = yield request.get(`/v1/users/list?limit=${limit}&offset=${offset}`);

      yield put({
        type: 'getList',
        userList: result,
      });
    },
    *getAll(action, { put }) {
      let result = yield request.get('/v1/users/count');
      console.log(result);
      yield put({
        type: 'getAllUser',
        allUser: result.count,
      });
    },
  },

  reducers: {
    getList(state, action) {
      return {
        ...state,
        ...{ userList: action.userList },
      };
    },
    getAllUser(state, action) {
      return {
        ...state,
        ...{ allUser: action.allUser },
      };
    },
  },
};
