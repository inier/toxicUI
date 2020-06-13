import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { memo, useContext } from 'react';
import GlobalContext from './Context';
import Icon from '../Icon';
import styles from './Radio.module.scss';

const Radio = (props) => {
    const {
        children,
        className = '',
        style = {},
        value,
        cancelSelected,
        index,
        defaultChecked,
        active,
        onChange,
        ...restProps
    } = props;

    const {
        name,
        selectedValue,
        onChange: groupOnChange,
        checker,
        cancelSelected: groupCancelSelected,
        noIcon,
        iconType,
        iconClassName,
        iconStyle,
        ...radioGroupRestProps
    } = useContext(GlobalContext);

    const radioId = `${name}-${value}`;
    const optional = {};
    const tCancelSelected = cancelSelected || groupCancelSelected;
    const tOnChange = onChange || groupOnChange;
    let activeStyle = '';

    if (selectedValue !== undefined) {
        if (String(value) === String(selectedValue) || (checker && checker(value))) {
            optional.checked = true;
            activeStyle = 'active';
        }
    }

    if (typeof tOnChange !== 'function') {
        throw new Error('请正确配置单击触发的onChange回调函数.');
    } else {
        optional.onChange = handleChange;
    }

    function handleChange(e) {
        const { index: tIndex } = e.currentTarget.dataset;

        if (selectedValue !== value) {
            tOnChange.call(null, value, tIndex, e);
        }
    }

    // 取消单选
    function handleClick(e) {
        if (!selectedValue || !tCancelSelected) {
            return;
        }

        const { value: tValue } = e.currentTarget.dataset;
        if (selectedValue && selectedValue === tValue) {
            tOnChange.call(null, undefined, undefined, e);
        }
    }

    return (
        <label
            htmlFor={radioId}
            className={cx(styles.radioItem, className, {
                [styles[activeStyle]]: activeStyle,
                [styles[iconType]]: iconType,
            })}
            style={style}
            onClick={(e) => {
                handleClick(e);
            }}
            data-value={value}
        >
            {children}
            <input
                id={radioId}
                type="radio"
                name={name}
                data-index={index}
                data-value={value}
                checked={false}
                aria-checked={optional.checked}
                {...restProps}
                {...optional}
                hidden
            />
            {!noIcon && (
                <div className={cx(styles.radioChecker, iconClassName)} style={iconStyle}>
                    <RadioChecker checked={active || optional.checked} active={activeStyle} {...radioGroupRestProps} />
                </div>
            )}
        </label>
    );
};

const RadioChecker = ({ checked, active, icon, iconActive, iconName, iconNameActive, iconSize }) => {
    if (icon && iconActive) {
        return <React.Fragment>{checked ? iconActive : icon}</React.Fragment>;
    } else if (iconNameActive) {
        return (
            <Icon
                type={checked ? iconNameActive : iconName}
                size={iconSize}
                className={`${styles.radioIcon} ${active}`}
            />
        );
    }

    return (
        <Icon
            key={checked}
            type={iconName}
            size={iconSize}
            className={`${styles.radioIcon} ${styles.single} ${active}`}
        />
    );
};

export default memo(Radio);

Radio.propTypes = {
    // 当前Radio的value值
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    // 当前Radio值在源数据列表中的索引
    index: PropTypes.number,
    // radio改变时的回调事件，返回当前项的value, index
    onChange: PropTypes.func,
    // 是否可取消单选
    cancelSelected: PropTypes.bool,
    // 是否禁用，默认false
    disabled: PropTypes.bool,
    // 自定义样式class名称
    className: PropTypes.string,
    // 自定义样式内联
    style: PropTypes.object,
};

Radio.defaultProps = {
    onChange: null,
    cancelSelected: false,
    index: undefined,
    disabled: false,
    className: '',
    style: null,
};
