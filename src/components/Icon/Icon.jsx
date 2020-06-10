import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';

const Icon = ({ baseClass, name = '', size, style, className }) => {
    let tName = name;
    if (tName && tName.indexOf('icon-') === -1) {
        tName = `icon-${tName}`;
    }

    const tClass = classnames(
        {
            [`icon-${size}`]: size,
        },
        tName,
        className
    );

    return <i className={`${baseClass} ${tClass}`} style={style} />;
};

Icon.defaultProps = {
    baseClass: 'iconfont',
    size: 'sm',
};

Icon.propTypes = {
    // 字体图标库的基础类
    baseClass: PropTypes.string,
    // 字体图标类名
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    style: PropTypes.object,
    // 字体图标额外样式类名
    className: PropTypes.string,
};

export default Icon;
