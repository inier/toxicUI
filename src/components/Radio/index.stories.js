import React, { useState } from 'react';
import { Radio, RadioGroup, RadioList } from '.';
import { List, Placeholder } from '../../components';
import { DemoShow, SectionCard, Section, Block } from '@ozo/demo';
import '../../styles/stories.scss';

export default {
    title: 'Toxic UI/A·基础 Basis/Radio',
    component: Radio,
};

const data = [
    {
        id: 1,
        name: '北京',
    },
    {
        id: 2,
        name: '上海',
    },
    {
        id: 3,
        name: '天津',
    },
    {
        id: 4,
        name: '重庆',
    },
].map((item) => {
    return { value: item.id, label: item.name };
});

const styles = {
    item: {
        display: 'flex',
        width: '100%',
        height: '50px',
        backgroundColor: '#fee',
    },
};

export const RadioDefault = () => {
    const [selectedValue1, setValue1] = useState(false);
    const [selectedValue2, setValue2] = useState(false);

    function handleChange1(value, index) {
        setValue1(value);
    }
    function handleChange2(value, index) {
        setValue2(value);
    }

    return (
        <DemoShow>
            <Section title="Radio list: 手动列表项">
                <Block title="list: inline">
                    <RadioGroup inline noIcon name="libs" selectedValue={selectedValue1} onChange={handleChange1}>
                        <Radio key="1" value="1" disabled>
                            React
                        </Radio>
                        <Radio key="2" value="2">
                            VUE
                        </Radio>
                        <Radio key="3" value="3">
                            jQuery
                        </Radio>
                        <Radio key="4" value="4">
                            Backbone
                        </Radio>
                        <Radio key="5" value="5">
                            Prototype
                        </Radio>
                    </RadioGroup>
                </Block>

                <Block title="list: item">
                    <RadioGroup name="list" selectedValue={selectedValue2} onChange={handleChange2}>
                        <Radio key="1" value="1" index={0} className="border-b" style={styles.icon}>
                            <div style={styles.item}>item 1</div>
                        </Radio>
                        <Radio key="2" value="2" index={1} className="border-b" style={styles.icon}>
                            <div style={styles.item}>item 2</div>
                        </Radio>
                        <Radio key="3" value="3" index={2} className="border-b" style={styles.icon}>
                            <div style={styles.item}>item 3</div>
                        </Radio>
                        <Radio key="4" value="4" index={3} className="border-b" style={styles.icon}>
                            <div style={styles.item}>item 4</div>
                        </Radio>
                        <Radio key="5" value="5" index={4} style={styles.icon}>
                            <div style={styles.item}>item 5</div>
                        </Radio>
                    </RadioGroup>
                </Block>
            </Section>
        </DemoShow>
    );
};

export const RadioDataDefault = () => {
    const [selectedValue, setValue] = useState(false);

    function handleChange(value, index) {
        setValue(value);
    }

    return (
        <DemoShow>
            <Section title="Radio list：data数据源">
                <Block title="data: default">
                    <RadioList
                        name="datalist1"
                        data={data}
                        selectedValue={selectedValue}
                        onChange={handleChange}
                        iconName="unchecked"
                        iconNameActive="checked"
                        iconType="left"
                    />
                </Block>
            </Section>
        </DemoShow>
    );
};

export const RadioDataItemRender = () => {
    const [selectedValue, setValue] = useState(false);

    function handleChange(value, index) {
        setValue(value);
    }

    return (
        <DemoShow>
            <Section title="Radio list：data数据源">
                <Block title="data: itemRender">
                    <RadioList
                        name="datalist2"
                        data={data}
                        selectedValue={selectedValue}
                        onChange={handleChange}
                        itemRender={(item, index) => (
                            <Radio key={item.id} value={item.id} index={index} className="border-b">
                                {item.name}
                            </Radio>
                        )}
                        nothing={<div>There is nothing.</div>}
                        iconStyle={{
                            left: 0,
                            right: 'auto',
                            marginLeft: '-20px',
                        }}
                    />
                </Block>
            </Section>
        </DemoShow>
    );
};

export const RadioNothing = () => {
    const [selectedValue, setValue] = useState(false);

    function handleChange(value, index) {
        setValue(value);
    }

    return (
        <DemoShow>
            <Section title="Radio list：data数据源">
                <Block title="nothing: 默认">
                    <RadioList name="datalist3" selectedValue={selectedValue} onChange={handleChange} />
                </Block>
                <Block title="nothing: 自定义">
                    <RadioList
                        name="datalist4"
                        selectedValue={selectedValue}
                        onChange={handleChange}
                        nothing={<div>There is nothing.</div>}
                    />
                </Block>
            </Section>
        </DemoShow>
    );
};
