import React, { Component } from 'react';
import { Demo, DemoListWithApi, Placeholder } from '@/components';
const { DemoShow, Section } = Demo;

class Doc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // activeKey: 0,
        };
    }

    render() {
        return (
            <DemoShow>
                <Section>
                    <DemoListWithApi />
                </Section>
                <Placeholder msg="没有更多了！" />
            </DemoShow>
        );
    }
}

export default Doc;
