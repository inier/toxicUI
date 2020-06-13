import React from 'react';
import Collapse from '.';
import { List, Placeholder } from '../../components';
import { DemoShow, SectionCard, Section, Block } from '@ozo/demo';
import '../../styles/stories.scss';
import comConfig from '../config.js';

export default {
    title: 'Toxic UI/C·模块 Module/Collapse',
    component: Collapse,
};

const Panel = Collapse.Panel;

const arrowPath =
    'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88' +
    '.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.' +
    '6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5.' +
    '2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z';

function expandIcon({ isActive }) {
    return (
        <i style={{ marginRight: '.5rem' }}>
            <svg
                viewBox="0 0 1024 1024"
                width="1em"
                height="1em"
                fill="currentColor"
                style={{
                    verticalAlign: '-.125em',
                    transition: 'transform .2s',
                    transform: `rotate(${isActive ? 90 : 0}deg)`,
                }}
            >
                <path d={arrowPath} p-id="5827" />
            </svg>
        </i>
    );
}

export const CollapseDefault = () => (
    <DemoShow>
        <Section title="default">
            <Collapse>
                {comConfig.map((data) => (
                    <Panel key={data.type} header={data.title} disabled={!data.list.length}>
                        <List>
                            {data.list.map((item) => (
                                <List.Item arrow="horizontal" key={item.id}>
                                    <span>{`${item.id} ${item.title}`}</span>
                                </List.Item>
                            ))}
                        </List>
                    </Panel>
                ))}
            </Collapse>
        </Section>
    </DemoShow>
);

export const CollapseNoRadius = () => (
    <DemoShow>
        <Section title="noRadius">
            <Collapse noRadius>
                {comConfig.map((data) => (
                    <Panel key={data.type} header={data.title} disabled={!data.list.length}>
                        <List>
                            {data.list.map((item) => (
                                <List.Item arrow="horizontal" key={item.id}>
                                    <span>{`${item.id} ${item.title}`}</span>
                                </List.Item>
                            ))}
                        </List>
                    </Panel>
                ))}
            </Collapse>
        </Section>
    </DemoShow>
);

export const CollapseCustomIcon = () => (
    <DemoShow>
        <Section title="Custom Icon">
            <Collapse expandIcon={expandIcon}>
                {comConfig.map((data) => (
                    <Panel key={data.type} header={data.title} disabled={!data.list.length}>
                        <List>
                            {data.list.map((item) => (
                                <List.Item arrow="horizontal" key={item.id}>
                                    <span>{`${item.id} ${item.title}`}</span>
                                </List.Item>
                            ))}
                        </List>
                    </Panel>
                ))}
            </Collapse>
        </Section>
    </DemoShow>
);

export const CollapseFull = () => (
    <DemoShow>
        <Section title="Full">
            <Collapse full gutter>
                {comConfig.map((data) => (
                    <Panel key={data.type} header={data.title} disabled={!data.list.length}>
                        <List>
                            {data.list.map((item) => (
                                <List.Item arrow="horizontal" key={item.id}>
                                    <span>{`${item.id} ${item.title}`}</span>
                                </List.Item>
                            ))}
                        </List>
                    </Panel>
                ))}
            </Collapse>
        </Section>
    </DemoShow>
);
