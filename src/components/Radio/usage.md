---
title: Simple Usage
order: 1
---

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Radio, RadioGroup, RadioList } from '@ozo/radios';
import { DemoShow, Section, Block, WingBlank } from '@ozo/demo';

const data = [
    {
        dealerId: '60131',
        name: '车和美重庆大坪时代天街店',
        tel: '023-62603897',
    },
    {
        dealerId: '60523',
        name: '车和美重庆长寿协信广场店',
        tel: '023-40336777',
    },
    {
        dealerId: '60534',
        name: '车和美重庆南坪国际社区店',
        tel: '023-62973166',
    },
    {
        dealerId: '60556',
        name: '车和美重庆渝北黄泥磅中石化店',
        tel: '023-67756868',
    },
].map((item) => {
    return { id: item.dealerId, name: item.name, tel: item.tel };
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedValue1: '2',
            selectedValue2: '2',
            selectedValue3: '60556',
            selectedValue4: '',
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
                height: '100px',
                backgroundColor: '#fee',
            },
        };
        return (
            <DemoShow style={{ backgroundColor: '#fff' }}>
                <WingBlank style={{ paddingRight: '0' }}>
                    <Section title="Radio inline">
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
                    </Section>

                    <Section title="Radio list: 手动列表项">
                        <RadioGroup
                            name="list"
                            selectedValue={this.state.selectedValue2}
                            onChange={this.handleChange2}
                            iconName="unchecked"
                            iconNameActive="checked"
                        >
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
                    </Section>

                    <Section title="Radio list：data数据源">
                        <Block title="data:default">
                            <RadioList
                                name="datalist1"
                                data={data}
                                selectedValue={this.state.selectedValue3}
                                onChange={this.handleChange3}
                                iconType="left"
                            />
                        </Block>
                        <Block title="data:itemRender">
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
                        <Block title="nothing:默认">
                            <RadioList
                                name="datalist3"
                                selectedValue={this.state.selectedValue4}
                                onChange={this.handleChange4}
                            />
                        </Block>
                        <Block title="nothing:自定义">
                            <RadioList
                                name="datalist4"
                                selectedValue={this.state.selectedValue4}
                                onChange={this.handleChange4}
                                nothing={<div>There is nothing.</div>}
                            />
                        </Block>
                    </Section>
                </WingBlank>
            </DemoShow>
        );
    }
}

ReactDOM.render(<App />, mountNode);
```
