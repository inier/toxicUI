import React from 'react';
import { Tabs, Demo } from '../../../../../components';

const { DemoShow, Section } = Demo;

const tabs = [
    {
        tab: '两字',
        value: 0,
        content: 'Tab 1 content',
    },
    {
        tab: '三个字',
        value: 1,
        content: 'Tab 2 content',
    },
    {
        tab: '有四个字',
        value: 2,
        content: 'Tab 3 content',
    },
    {
        tab: '这是五个字',
        value: 3,
        content: 'Tab 4 content',
    },
    {
        tab: '这里有六个字',
        value: 4,
        content: 'Tab 5 content',
    },
    {
        tab: '三个字',
        value: 5,
        content: 'Tab 6 content',
    },
    {
        tab: '还是四个字',
        value: 6,
        content: 'Tab 7 content',
    },
    {
        tab: '两字',
        value: 7,
        content: 'Tab 8 content',
    },
    {
        tab: '三个字',
        value: 8,
        content: 'Tab 9 content',
    },
];

const TabsDemo = () => {
    return (
        <DemoShow>
            <Section title="选项卡: base" style={{ backgroundColor: '#fff' }}>
                <Tabs defaultActiveKey={0}>
                    <Tabs.Pane key={1} tab="tab1">
                        tab1 content
                    </Tabs.Pane>
                    <Tabs.Pane key={2} tab="tab2">
                        tab2 content
                    </Tabs.Pane>
                </Tabs>
            </Section>
            <Section title="选项卡: children" style={{ backgroundColor: '#fff' }}>
                <Tabs defaultActiveKey={0}>
                    {tabs.map((tab) => {
                        return (
                            <Tabs.Pane key={tab.value} tab={tab.tab}>
                                {tab.content}
                            </Tabs.Pane>
                        );
                    })}
                </Tabs>
            </Section>
            <Section title="选项卡: dataSource" style={{ backgroundColor: '#fff' }}>
                <Tabs dataSource={tabs} />
            </Section>
        </DemoShow>
    );
};

export default TabsDemo;
