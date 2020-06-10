import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Timer } from '@/components';

const styles = {
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
    },
};

@withRouter
class TimerDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBegin: false,
            isReset: false,
        };
    }

    // 开始/暂停
    handleTimer = () => {
        const { isBegin } = this.state;
        this.setState({
            isBegin: !isBegin,
            isReset: false,
        });
    };

    // 重置
    handleReset = () => {
        this.setState({
            isBegin: false,
            isReset: true,
        });
    };

    render() {
        const { isBegin, isReset } = this.state;
        const doTxt = isBegin ? '暂停' : '开始';
        return (
            <div style={styles.content}>
                <Timer tick={isBegin} reset={isReset} />
                <div className="btn-group">
                    <Button onClick={this.handleTimer}>{doTxt}</Button>
                    {/* <Button onClick={this.handleReset} disabled={isReset}>重置</Button> */}
                </div>
            </div>
        );
    }
}

export default TimerDemo;
