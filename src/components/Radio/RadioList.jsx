import PropTypes from 'prop-types';
import React from 'react';
import shortid from 'shortid';
import RadioGroup from './RadioGroup';
import Radio from './Radio';

// Nothing
const Nothing = () => {
    return <div>暂无数据</div>;
};

export default function RadioList({ data = [], itemRender, nothing, children, ...restProps }) {
    if (!data.length) {
        if (children) {
            return <RadioGroup {...restProps}>{children}</RadioGroup>;
        }
        return <React.Fragment>{nothing}</React.Fragment>;
    }

    return (
        <RadioGroup {...restProps}>
            {data.map((item, index) => {
                if (itemRender) {
                    return <React.Fragment key={shortid.generate()}>{itemRender(item, index)}</React.Fragment>;
                }

                return (
                    <Radio key={item.value} value={item.value} index={index}>
                        {item.label}
                    </Radio>
                );
            })}
        </RadioGroup>
    );
}

RadioList.propTypes = {
    // 数据源，格式：[{value:xxx, label:yyy}],扩展数据可通过 itemRender 方式渲染
    data: PropTypes.array,
    // 渲染列表项节点, 必须通过Radio渲染列表项，可自定义样式等，具体设置参考 Radio 组件
    itemRender: PropTypes.func,
    // 暂无数据渲染节点
    nothing: PropTypes.node,
    // 其他参数项请参考 RadioGroup 组件
};

RadioList.defaultProps = {
    data: [],
    itemRender: null,
    nothing: <Nothing />,
};
