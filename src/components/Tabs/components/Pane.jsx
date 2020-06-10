import React from 'react';
import styles from '../Tabs.module.scss';

const Pane = ({ isActive, children }) => {
    return <div className={`${styles.pane} ${isActive ? styles.active : ''}`}>{children}</div>;
};

export default Pane;
