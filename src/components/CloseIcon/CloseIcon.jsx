import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CloseIcon.module.scss';

class CloseIcon extends Component {
    handleClick = () => {
        // 触发父级Change事件
        this.props.handleClick();
    };

    render() {
        return <i className={styles.close} onClick={this.handleClick} />;
    }
}

CloseIcon.propTypes = {
    handleClick: PropTypes.func,
};

export default CloseIcon;
