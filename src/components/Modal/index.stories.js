import React, { useState } from 'react';
import Modal from '.';
import { Button } from '../../components';
import { DemoShow, SectionCard, Section, Block } from '@ozo/demo';
import '../../styles/stories.scss';

export default {
    title: 'Toxic UI/C·模块 Module/Modal',
    component: Modal,
};

export const ModalDefault = () => {
    const [isShow, setShow] = useState(false);

    return (
        <DemoShow>
            <Section title="default">
                <Block style={{ height: '300px' }}>
                    <div className="btn-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            onClick={() => {
                                setShow(true);
                            }}
                        >
                            Click me！
                        </Button>
                    </div>
                    {isShow && (
                        <Modal
                            title="标题"
                            onCancel={() => {
                                setShow(false);
                                console.log('取消');
                            }}
                            onDone={() => {
                                setShow(false);
                                console.log('确定');
                            }}
                        />
                    )}
                </Block>
            </Section>
        </DemoShow>
    );
};

export const ModalAlert = () => {
    const [isShow2, setShow] = useState(false);

    return (
        <DemoShow>
            <Section title="alert">
                <Block style={{ height: '300px' }}>
                    <div className="btn-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            onClick={() => {
                                setShow(true);
                            }}
                        >
                            Click me！
                        </Button>
                    </div>
                    {isShow2 && (
                        <Modal
                            type="alert"
                            title="标题"
                            onDone={() => {
                                setShow(false);
                                console.log('确定');
                            }}
                        />
                    )}
                </Block>
            </Section>
        </DemoShow>
    );
};

export const ModalLayer = () => {
    const [isShow3, setShow] = useState(false);

    return (
        <DemoShow>
            <Section title="layer">
                <Block style={{ height: '300px' }}>
                    <div className="btn-group" style={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            onClick={() => {
                                setShow(true);
                            }}
                        >
                            Click me！
                        </Button>
                    </div>
                    {isShow3 && (
                        <Modal
                            type="layer"
                            title="标题"
                            onDone={() => {
                                setShow(false);
                                console.log('确定');
                            }}
                            onCancel={() => {
                                setShow(false);
                                console.log('取消');
                            }}
                        />
                    )}
                </Block>
            </Section>
        </DemoShow>
    );
};
