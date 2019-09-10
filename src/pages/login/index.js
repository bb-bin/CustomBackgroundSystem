import React from 'react';
import { connect } from 'dva'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import styles from './index.scss';

class Login extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Col span={6} offset={9}>
                    <Form onSubmit={this.handleSubmit} className={styles.login_form}>
                        <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [
                                { required: true, message: '请输入密码!' },
                                { min: 6, message: '密码不能少于6位!' },
                                { max: 12, message: '密码不能大于12位!' }
                            ],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>记住密码</Checkbox>)}
                        <a className={styles.login_form_forgot} href="#">
                            忘记密码？
                        </a>
                        <Button type="primary" htmlType="submit" className={styles.login_form_button}>
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </Col>
          </Row>
        );
    }

    // 提交登录
    handleSubmit = (e) => {
        // 1.阻止默认提交
        e.preventDefault();
        
        this.props.form.validateFields((err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
            // 调用登录接口
            this.props.onLogin(values, this.props.history);
          }
        });
    };
}

export default connect(
    null,
    (dispatch) => {
        return{
            onLogin: (values, history) => {
                dispatch({
                    type: 'global/loginSync',
                    payload: values,
                    history,
                });
            }
        }
    }
)(Form.create(null)(Login));