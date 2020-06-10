import React from 'react';
import styles from './WhiteSpace.module.scss';
/**
 * 间距高度，分离上下距离
 *
 * @param {*} props 组件参数 height间距高度，number /默认10
 * @returns 组件
 */
function WhiteSpace(props) {
    // 行留白距离
    const { className = '', height, noFirst, noLast } = props;
    const styleObj = {
        height: `${height}px`,
    };
    let tSpecClass = '';
    if (noFirst) {
        tSpecClass = styles.noFirst;
    } else if (noLast) {
        tSpecClass = styles.noLast;
    }
    return <div className={`${styles.whiteSpace} ${className} ${tSpecClass}`} style={height && styleObj} />;
}

export default WhiteSpace;
