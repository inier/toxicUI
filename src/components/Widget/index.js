import React from 'react';
import PropTypes from 'prop-types';

export const Border = ({ type, children, style }) => {
    let tType = type;
    if (type !== '' && type !== 'h') {
        tType = `border-${type}`;
    } else {
        tType = `border-l border-r`;
    }
    return <div className={tType} style={{padding: "4px 8px", ...style}}>{children}</div>;
};
Border.defaultProps = {
    type: 'around',
};
Border.propTypes = {
    type: PropTypes.oneOf(['t', 'r', 'b', 'l', 'h', 'v', 'around', 'radius']),
};

export const Triangle = ({ type }) => {
    return <span className={`triangle-${type}`} />;
};
Triangle.propTypes = {
    type: PropTypes.oneOf(['t', 'r', 'b', 'l']),
};

export const Arrow = ({ type }) => {
    return <span className={`arrow-${type}`} />;
};
Arrow.propTypes = {
    type: PropTypes.oneOf(['t', 'r', 'b', 'l']),
};

export default {
    Border,
    Triangle,
    Arrow,
};
