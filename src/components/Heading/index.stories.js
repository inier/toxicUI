import React from 'react';
import Heading from '.';
import { DemoShow, SectionCard, Section, Block } from '@ozo/demo';
import '../../styles/stories.scss';

export default {
    title: 'Toxic UI/A·基础 Basis/Heading',
    component: Heading,
};

export const HeadingProps = () => (
    <DemoShow>
        <Section title="Heading">
            <Heading title="Default" />
            <Heading align="center" title="Default" />
            <Heading align="end" title="Default" />
        </Section>
    </DemoShow>
);
