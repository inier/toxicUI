import React from 'react';
import Widget from '.';
import { DemoShow, SectionCard, Section, Block } from '@ozo/demo';
import '../../styles/stories.scss';

export default {
    title: 'Toxic UI/A·基础 Basis/Widget',
    component: Widget,
};

const { Border, Triangle, Arrow } = Widget;

export const BorderProps = () => (
    <DemoShow>
        <Section title="边框">
            <Block flex>
                <Border type="t">上</Border>
                <Border type="r">右</Border>
                <Border type="b">下</Border>
                <Border type="l">左</Border>
                <Border type="v">上+下</Border>
                <Border type="h">左+右</Border>
                <Border>四边</Border>
                <Border type="radius">四边+圆角</Border>
            </Block>
        </Section>
    </DemoShow>
);

export const TriangleProps = () => (
    <DemoShow>
        <Section title="三角形">
            <Block flex>
                <Triangle type="t" />
                <Triangle type="r" />
                <Triangle type="b" />
                <Triangle type="l" />
            </Block>
        </Section>
    </DemoShow>
);

export const ArrowProps = () => (
    <DemoShow>
        <Section title="小箭头">
            <Block flex>
                <Arrow type="t" />
                <Arrow type="r" />
                <Arrow type="b" />
                <Arrow type="l" />
            </Block>
        </Section>
    </DemoShow>
);
