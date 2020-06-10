import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import styles from '../Tabs.module.scss';

const Tab = ({ isActive, onChange, children }, tabRef) => {
    const ref = useRef();

    useImperativeHandle(tabRef, () => {
        // return返回的值就可以被父组件获取到
        return ref.current;
    });

    return (
        <div
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
            onClick={() => {
                onChange();
            }}
            ref={ref}
        >
            {children}
        </div>
    );
};

export default forwardRef(Tab);
