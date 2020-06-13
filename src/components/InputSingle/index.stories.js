import React, { useState } from 'react';
import InputSingle from '.';
import { DemoShow, SectionCard, Section, Block } from '@ozo/demo';
import '../../styles/stories.scss';

export default {
    title: 'Toxic UI/B·区块 Block/InputSingle',
    component: InputSingle,
};

export const CollapseDefault = () => {
    const [userName, setUserName] = useState('');
    const [mobile, setMobile] = useState('');
    const [cardID, setCardID] = useState('');
    const [price, setPrice] = useState('');

    // 姓名输入
    handleUserChange = (value) => {
        setUserName(value);
    };

    // 手机号输入
    handleMobileChange = (value) => {
        setMobile(value);
    };

    // 身份证号输入
    handleCardIDChange = (value) => {
        setCardID(value);
    };

    // 金额输入
    handlePriceChange = (value) => {
        setPrice(value);
    };

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
};
