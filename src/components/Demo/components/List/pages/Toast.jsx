import React, { Component } from 'react';
import { Button, Toast, Demo } from '@/components';
const { DemoShow, Section, Block } = Demo;

class ToastDemo extends Component {
    render() {
        return (
            <DemoShow>
                <Section title="default">
                    <Block style={{ height: '200px' }}>
                        <div className="btn-group" style={{ display: 'flex', alignItems: 'center' }}>
                            <Button
                                onClick={() => {
                                    Toast.info('普通提示');
                                }}
                            >
                                普通提示
                            </Button>
                            <Button
                                onClick={() => {
                                    Toast.success('成功提示');
                                }}
                            >
                                成功提示
                            </Button>
                            <Button
                                onClick={() => {
                                    Toast.warning('警告提示', 3000);
                                }}
                            >
                                警告提示
                            </Button>
                            <Button
                                onClick={() => {
                                    Toast.error('错误提示');
                                }}
                            >
                                错误提示
                            </Button>
                        </div>
                    </Block>
                </Section>
                <Section title="loading">
                    <Block style={{ height: '200px' }}>
                        <div className="btn-group" style={{ display: 'flex', alignItems: 'center' }}>
                            <Button
                                onClick={() => {
                                    const hideLoading = Toast.loading('加载中...', 0, () => {
                                        Toast.success('加载完成');
                                    });
                                    setTimeout(hideLoading, 2000);
                                }}
                            >
                                加载提示
                            </Button>
                            <Button
                                onClick={() => {
                                    Toast.hide();
                                }}
                            >
                                直接关闭提示
                            </Button>
                        </div>
                    </Block>
                </Section>
            </DemoShow>
        );
    }
}

export default ToastDemo;
