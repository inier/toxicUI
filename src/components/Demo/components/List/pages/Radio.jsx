import React, { Component } from 'react';
import { Radio, RadioGroup, RadioList, Demo } from '../../../../../components';
const { DemoShow, Section, Block } = Demo;

class RadioDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedValue1: '2',
            selectedValue2: '2',
            selectedValue3: '3',
            selectedValue4: '',
            data: [
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
            ],
        };
    }
    handleChange1 = (value) => {
        console.log('change', value);
        this.setState({ selectedValue1: value });
    };
    handleChange2 = (value, index) => {
        console.log('change', value, index);
        this.setState({ selectedValue2: value });
    };
    handleChange3 = (value, index) => {
        console.log('change', value, index);
        this.setState({ selectedValue3: value });
    };
    handleChange4 = (value, index) => {
        console.log('change', value, index);
        this.setState({ selectedValue4: value });
    };
    render() {
        const styles = {
            item: {
                display: 'flex',
                width: '100%',
                height: '50px',
                backgroundColor: '#fee',
            },
        };
        const { data } = this.state;

        return (
            <DemoShow style={{ backgroundColor: '#fff' }}>
                <Section title="Radio list: 手动列表项">
                    <Block title="list: inline">
                        <RadioGroup
                            inline
                            noIcon
                            name="libs"
                            selectedValue={this.state.selectedValue1}
                            onChange={this.handleChange1}
                        >
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
                        <RadioGroup name="list" selectedValue={this.state.selectedValue2} onChange={this.handleChange2}>
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

                <Section title="Radio list：data数据源">
                    <Block title="data: default">
                        <RadioList
                            name="datalist1"
                            data={data}
                            selectedValue={this.state.selectedValue3}
                            onChange={this.handleChange3}
                            iconName="unchecked"
                            iconNameActive="checked"
                            iconType="left"
                        />
                    </Block>
                    <Block title="data: itemRender">
                        <RadioList
                            name="datalist2"
                            data={data}
                            selectedValue={this.state.selectedValue4}
                            onChange={this.handleChange4}
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
                    <Block title="nothing: 默认">
                        <RadioList
                            name="datalist3"
                            selectedValue={this.state.selectedValue4}
                            onChange={this.handleChange4}
                        />
                    </Block>
                    <Block title="nothing: 自定义">
                        <RadioList
                            name="datalist4"
                            selectedValue={this.state.selectedValue4}
                            onChange={this.handleChange4}
                            nothing={<div>There is nothing.</div>}
                        />
                    </Block>
                </Section>
            </DemoShow>
        );
    }
}

export default RadioDemo;
