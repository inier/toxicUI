import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import CloseIcon from './components/CloseIcon';
import styles from './InputSingle.module.scss';

/**
 * 输入组件
 */
class InputSingle extends Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        const { value } = nextProps;

        if (value) {
            return {
                showClose: true,
            };
        }

        return null;
    }

    constructor(props) {
        super(props);
        this.state = {
            showClose: false, // (props.value && !props.disabled) ? true : false
        };
        this.id = shortid.generate();
        this.textInput = React.createRef();
    }

    componentWillUnmount() {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
    }

    /**
     * @description 处理输入框 change 事件
     * @param {dom} e 输入框 input元素
     */
    /*eslint-disable-next-line complexity */
    handleChange = (e) => {
        const val = e.target.value;
        let tRule = '';
        let ruleCheckResult;
        const { type = 'text', rule, maxLength, handleChange } = this.props;

        // 正则检测
        switch (type) {
            case 'text': {
                // 默认可包含中文、字符、数字、下划线
                tRule = rule || `^[a-zA-Z0-9_\\u4e00-\\u9fa5]{0,${maxLength || 16}}$`;
                break;
            }
            case 'number': {
                // 默认匹配
                const tMaxLength = maxLength || 10;
                tRule = rule || `^(0|[1-9][0-9]{0,${tMaxLength}})([\\.]?|(\\.\\d{1,2}))?$`;
                break;
            }
            case 'mobile': {
                // 默认匹配1开头的数字
                const tMaxLength = maxLength - 1 || 10;
                tRule = rule || `^1([0-9]{0,${tMaxLength}})$`;
                break;
            }
            case 'IDCard': {
                // 身份证简单验证
                tRule = `^[0-9]{0,${maxLength - 1 || 17}}([0-9]|X|x)$`;
                break;
            }
            default: {
                break;
            }
        }

        const checker = new RegExp(tRule);

        if (val && !checker.test(val)) {
            return;
        }

        if (val) {
            this.setState({ showClose: true });
        } else {
            this.setState({ showClose: false });
        }

        // 身份证单独验证
        if (type === 'IDCard' && (val.length === 16 || val.length === 19)) {
            ruleCheckResult = new RegExp(rule || '(^\\d{15}$)|(^\\d{17}([0-9]|X|x)$)').test(val);
        } else if (val.length > 19) {
            return;
        }

        handleChange && handleChange(val, ruleCheckResult);
    };

    /**
     * @description 处理输入框 聚焦 事件
     * @param {dom} e 输入框 input元素
     */
    handleCloseShowOnFocus = (e) => {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = null;
        }
        e.target.value && this.setState({ showClose: true });
    };

    handleCloseHideOnBlur = () => {
        this.debounceTimeout = setTimeout(() => {
            this.setState({ showClose: false });
        }, 150);
    };

    handleCloseClick = () => {
        const { handleChange } = this.props;

        handleChange && handleChange('');
        this.focusTextInput();
        this.setState({ showClose: false });
    };

    focusTextInput = () => {
        this.textInput.current.focus();
    };

    render() {
        const {
            label,
            type,
            originType,
            value,
            className,
            inputClass,
            handleChange,
            size,
            labelStyle,
            labelFor,
            required,
            ...tProps
        } = this.props;
        const { showClose } = this.state;
        return (
            <div className={`inputItemFix ${styles.inputItem} ${styles[size] || ''} ${className || ''}`}>
                <label htmlFor={labelFor || this.id}>
                    {label && (
                        <span className={styles.label} style={labelStyle}>
                            {label}
                            {required && (
                                <span className={styles.required}>{typeof required === 'string' ? required : '*'}</span>
                            )}
                        </span>
                    )}
                    <input
                        id={labelFor || this.id}
                        type={originType || 'text'}
                        className={inputClass}
                        value={value}
                        onChange={this.handleChange}
                        onFocus={this.handleCloseShowOnFocus}
                        onBlur={this.handleCloseHideOnBlur}
                        autoComplete="off"
                        pattern={type === 'mobile' ? '[0-9]*' : ''}
                        ref={this.textInput}
                        {...tProps}
                    />
                </label>

                {showClose && <CloseIcon handleClick={this.handleCloseClick} />}
            </div>
        );
    }
}

InputSingle.propTypes = {
    // 输入框类型，默认值：text
    type: PropTypes.oneOf(['text', 'number', 'mobile', 'IDCard']),
    // 输入框的label，必传
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    // 是否必填
    required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    //  Label for的值
    labelFor: PropTypes.string,
    // 占位文字
    placeholder: PropTypes.string,
    // 叠加的css类名
    className: PropTypes.string,
    // 自定义input框样式
    inputClass: PropTypes.string,
    // 是否允许输入
    disabled: PropTypes.bool,
    // 输入框的值，受控
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // 允许输入最大长度
    maxLength: PropTypes.number,
    // value改变回调
    handleChange: PropTypes.func,
};

export default InputSingle;
