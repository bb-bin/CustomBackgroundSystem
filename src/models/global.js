// 全局需要使用的仓库数据
import request from '../utils/request';
import { message } from 'antd';

const userData = window.sessionStorage.getItem('user')
const jwtData = window.sessionStorage.getItem('jwt')

export default {
    namespaced: 'global',

    state: {
        user: userData ? JSON.parse(userData) : null,
        jwt: jwtData ? JSON.parse(jwtData) : null,
    },

    reducers: {
        login(state, action){
            return{
                ...state,
                ...{
                    user: action.user,
                    jwt: action.jwt,
                }
            }
        }
    },

    effects: {
        *loginSync(action, {put}){
            // console.log(action)
            // 1.发送ajax请求
            const result = yield request.post('/api/v1/auth', action.payload)
            // console.log(result)
            // 2.判断接口调用是否成功
            // if(result.code === 0){
            //     message.success('登录成功');
            // }else{
            //     message.error('用户名或密码不正确');
            // }
            message.success('登录成功');
            // 3.调用login 这个 reducer
            yield put ({ type: 'login', user: result.data.user, jwt: result.data.jwt })
            // 4.本地存储
            window.sessionStorage.setItem('user', JSON.stringify(result.data.user))
            window.sessionStorage.setItem('jwt', JSON.stringify(result.data.jwt))
            // 5.登录成功跳转页面
            action.history.replace('/')
        }
    }
}