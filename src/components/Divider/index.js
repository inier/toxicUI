import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Divider = ({ type, lineType, children }) => {
    switch (type) {
        case 'horizontal': {
            return <span className="divider horizontal" />;
        }
        case 'text': {
            let tLineType = `-${lineType}`;
            if (lineType === 'solid') {
                tLineType = '';
            }

            return <span className={`"divider side-line${tLineType}`}>{children}</span>;
        }
        case 'vertical':
        default: {
            return <span className="divider vertical" />;
        }
    }
};

Divider.defaultProps = {
    type: 'vertical',
    lineType: 'solid',
};
Divider.propTypes = {
    type: PropTypes.oneOf(['horizontal', 'vertical', 'text']),
    lineType: PropTypes.oneOf(['solid', 'dash', 'double']),
};

export default Divider;
