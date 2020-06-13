import React from 'react';
import Divider from '.';
import { DemoShow, SectionCard, Section, Block } from '@ozo/demo';
import '../../styles/stories.scss';

export default {
    title: 'Toxic UI/A·基础 Basis/Divider',
    component: Divider,
};

export const DividerHorizontal = () => (
    <DemoShow>
        <Section title="水平分割线">
            <Block>
                <Divider type="horizontal" />
            </Block>
        </Section>
    </DemoShow>
);

export const DividerVertical = () => (
    <DemoShow>
        <Section title="垂直分割线">
            <Block>
                <Divider type="vertical" />
            </Block>
        </Section>
    </DemoShow>
);

export const DividerText = () => (
    <DemoShow>
        <Section title="文字分割线">
            <Block>
                <Divider type="text">文字</Divider>
                <Divider type="text" lineType="solid">
                    文字
                </Divider>
                <Divider type="text" lineType="dash">
                    文字
                </Divider>
                <Divider type="text" lineType="double">
                    文字
                </Divider>
            </Block>
        </Section>
    </DemoShow>
);
