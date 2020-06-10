import React, { Component } from 'react';
import { InputSingle, Demo } from '@/components';
import { isMicroMessenger, getIOSVersion } from '@/utils';

const { DemoShow, Section } = Demo;

class InputDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            mobile: '',
            cardID: '',
            price: '',
        };
    }
    componentDidMount() {
        // 解决 iOS 12+系统，微信和企业微信中，软键盘顶起页面后隐藏时不回弹的问题
        if (isMicroMessenger() && getIOSVersion() > '12') {
            // 组件挂载时，注册focusout事件
            document.body.addEventListener('focusout', () => {
                window.scrollTo(0, 0);
            });
        }
    }

    componentWillUnmount() {
        // 组件卸载时，移除focusout事件
        if (isMicroMessenger() && getIOSVersion() > '12') {
            document.body.removeEventListener('focusout', () => {
                window.scrollTo(0, 0);
            });
        }
    }

    // 姓名输入
    handleUserChange = (value) => {
        this.setState({
            userName: value,
        });
    };

    // 手机号输入
    handleMobileChange = (value) => {
        this.setState({
            mobile: value,
        });
    };

    // 身份证号输入
    handleCardIDChange = (value) => {
        this.setState({
            cardID: value,
        });
    };

    // 金额输入
    handlePriceChange = (value) => {
        this.handleStateChange('price', value);
    };

    // state改变
    handleStateChange = (type, value) => {
        this.setState({
            [type]: value,
        });
    };

    render() {
        const { userName, mobile, cardID, price } = this.state;
        return (
            <DemoShow>
                <Section title="输入框" style={{ backgroundColor: '#fff', paddingLeft: '15px' }}>
                    <InputSingle
                        label="姓名"
                        labelFor="userName"
                        className="border-b"
                        placeholder="请输入姓名"
                        labelStyle={{ minWidth: '3em' }}
                        value={userName}
                        handleChange={this.handleUserChange}
                    />
                    <InputSingle
                        type="mobile"
                        label="手机号"
                        placeholder="请输入手机号码"
                        className="border-b"
                        labelStyle={{ minWidth: '3em' }}
                        value={mobile}
                        handleChange={this.handleMobileChange}
                    />
                    <InputSingle
                        type="IDCard"
                        label="身份证"
                        placeholder="请输入身份证号码"
                        className="border-b"
                        labelStyle={{ minWidth: '3em' }}
                        value={cardID}
                        handleChange={this.handleCardIDChange}
                    />
                    <InputSingle
                        type="IDCard"
                        label="身份证"
                        placeholder="请输入身份证号码"
                        className="border-b"
                        labelStyle={{ minWidth: '3em' }}
                        value={cardID}
                        handleChange={this.handleCardIDChange}
                        required
                    />
                    <InputSingle
                        type="number"
                        label="金额"
                        placeholder="请输入数字"
                        labelStyle={{ minWidth: '3em' }}
                        value={price}
                        handleChange={this.handlePriceChange}
                    />
                </Section>
            </DemoShow>
        );
    }
}

export default InputDemo;
