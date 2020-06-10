import React, { Component } from 'react';
import TimeDemo from './TimerDemo';
import { logo, avatar } from '@/assets';
import styles from './About.module.scss';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickName: '某某某',
            mobile: '13888888888',
            img: avatar,
        };
    }
    render() {
        const { nickName, mobile, img } = this.state;

        return (
            <div className={styles.content}>
                <div className={styles.logWrap}>
                    <img src={logo} className={styles.logo} alt="logo" />
                </div>

                <div className={styles.text}>
                    <div>{nickName}</div>
                    <div>{mobile}</div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>

                <div style={{ marginTop: '10px', padding: '10px' }}>
                    <TimeDemo />
                </div>
            </div>
        );
    }
}
export default About;
