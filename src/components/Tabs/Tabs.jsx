import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.module.scss';
import Tab from './components/Tab';
import Pane from './components/Pane';

const Tabs = ({ dataSource = [], defaultActiveKey, maxLen = 5, children, style, className }) => {
    const [tabIndex, setTab] = useState(defaultActiveKey);
    const [tabBarOffsetLeft, setTabBarOffsetLeft] = useState(0);

    const tChildsCount = React.Children.count(children);
    const tChildsData = React.Children.map(children, (child, index) => {
        return { tab: child.props.tab, value: index, content: child.props.children };
    });
    const tData = tChildsCount ? tChildsData : dataSource;
    const tabRef = useRef();

    // const tLen = tData.length;
    // const tTabWidth = 1 / (tLen >= maxLen ? maxLen : tLen);
    // const tabActiveStyle = {
    //     width: `${tTabWidth * 100}%`,
    //     left: `${tabIndex * tTabWidth * 100}%`,
    // };

    function handleChange(key) {
        setTab(key);
        const tCurrent = tabRef.current.offsetParent.childNodes[tabIndex];
        const tOffsetLeft = tCurrent.offsetLeft;

        console.log(tOffsetLeft);
        setTabBarOffsetLeft(
            `-${
                tOffsetLeft + tCurrent.clientWidth > window.screen.width
                    ? window.screen.width - tCurrent.clientWidth
                    : 0
            }px`
        );
    }

    const tabActiveStyle = {
        left: tabBarOffsetLeft,
    };

    return (
        <div className={`${styles.tabs} ${className}`} style={style}>
            <div className={styles.tabsBar}>
                <div className={styles.tabsBarContent} style={tabActiveStyle}>
                    {tData.map((tab, index) => {
                        return (
                            <Tab
                                key={tab.value}
                                isActive={index === tabIndex}
                                onChange={() => {
                                    handleChange(index);
                                }}
                                ref={tabRef}
                            >
                                {tab.tab}
                            </Tab>
                        );
                    })}
                </div>
                {/* <div className={styles.tabsBarActiveFlag} style={tabActiveStyle}></div> */}
            </div>
            <div className={styles.tabsContent}>
                {tData.map((tab, index) => {
                    return (
                        <Pane key={tab.value} isActive={index === tabIndex}>
                            {tab.content}
                        </Pane>
                    );
                })}
            </div>
        </div>
    );
};

Tabs.Pane = Pane;
Tabs.defaultProps = {
    defaultActiveKey: 0,
    className: '',
};
Tabs.propTypes = {
    // 自定义的className
    className: PropTypes.string,
    // 自定义的样式
    style: PropTypes.object,
    // 数据集合
    data: PropTypes.array,
};

export default Tabs;
