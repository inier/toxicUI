import React from 'react';
import { Card, CardLite } from '.';
import { Button } from '../../components';
import { DemoShow, SectionCard, Section, Block } from '@ozo/demo';
import '../../styles/stories.scss';

export default {
    title: 'Toxic UI/C·模块 Module/Card',
    component: Card,
};

export const CardLiteDemo = () => (
    <DemoShow>
        <Section>
            <CardLite title="title">
                <div>This is content of `Card`</div>
            </CardLite>
        </Section>
        <Section>
            <CardLite noRadius title="title">
                <div>This is content of `Card`</div>
            </CardLite>
        </Section>
        <Section>
            <CardLite full title="title" footer={<div style={{ flex: '1', textAlign: 'right' }}>footer</div>}>
                <div>This is content of `Card`</div>
            </CardLite>
        </Section>
        <Section>
            <CardLite
                full
                title="title"
                footer={
                    <div style={{ flex: '1', textAlign: 'right' }}>
                        <div type="group">
                            <Button size="xs">cancel</Button>
                            <Button size="xs">ok</Button>
                        </div>
                    </div>
                }
            >
                <div>This is content of `Card`</div>
            </CardLite>
        </Section>
    </DemoShow>
);

export const CardDemo = () => (
    <DemoShow>
        <Section>
            <Card>
                <Card.Header
                    title="title"
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>extra</span>}
                />
                <Card.Body>
                    <div>This is content of `Card`</div>
                </Card.Body>
                <Card.Footer content="footer content" extra={<div>extra</div>} />
            </Card>
        </Section>
        <Section>
            <Card noRadius>
                <Card.Header
                    title="title"
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>extra</span>}
                />
                <Card.Body>
                    <div>This is content of `Card`</div>
                </Card.Body>
                <Card.Footer content="footer content" extra={<div>extra</div>} />
            </Card>
        </Section>
        <Section>
            <Card full>
                <Card.Header
                    title="This is title"
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>this is extra</span>}
                />
                <Card.Body>
                    <div>This is content of `Card`</div>
                </Card.Body>
                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
            </Card>
        </Section>
    </DemoShow>
);
