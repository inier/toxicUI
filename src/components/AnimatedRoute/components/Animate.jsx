import PropTypes from 'prop-types';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Animate.scss';

const Animate = ({ classNames = 'fade', tKey, children, ...restProps }) => (
    <TransitionGroup>
        <CSSTransition key={tKey} classNames={classNames} {...restProps}>
            {children}
        </CSSTransition>
    </TransitionGroup>
);

Animate.propTypes = {
    classNames: PropTypes.oneOf(['fade', 'fadeInLeft']),
    tKey: PropTypes.string.isRequired,
};
export default Animate;
