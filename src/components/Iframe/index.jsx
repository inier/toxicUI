import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

class Iframe extends React.Component {
    constructor(props) {
        super(props);
        this.iframeRef = React.createRef();

        this.state = {
            iFrameHeight: '100%',
            scrolling: !this.isCrossOrigin() ? 'no' : 'auto',
        };
    }

    isCrossOrigin = () => {
        let originPrifex = `${window.location.protocol}//${window.location.hostname}${window.location.port}`;
        return this.props.src.startsWith('http') && !this.props.src.startsWith(originPrifex);
    };

    onLoad = () => {
        if (!this.isCrossOrigin()) {
            const obj = this.iframeRef;
            this.setState({
                iFrameHeight: `${obj.current.contentWindow.document.body.scrollHeight}px`,
                scrolling: 'no',
            });
        } else {
            this.setState({
                iFrameHeight: '100%',
                scrolling: 'auto',
            });
        }

        // 加载后
        this.props.afterLoad && this.props.afterLoad();
    };

    render() {
        // width: 1px; min-width: 100%; *width: 100%; 解决IOS上宽度自动撑开的问题
        let iframeStyle = Object.assign({}, this.props.loadingStyle, {
            flex: '1',
            width: '1px',
            minWidth: '100%',
            '*width': '100%',
            height: this.state.iFrameHeight,
            overflow: 'visible',
        });
        return (
            <div className={styles.iframeWrap}>
                <iframe
                    id={this.props.id}
                    title={this.props.title}
                    style={iframeStyle}
                    onLoad={this.onLoad}
                    ref={this.iframeRef}
                    src={this.props.src}
                    width="100%"
                    height={this.state.iFrameHeight}
                    scrolling={this.state.scrolling}
                    frameBorder="0"
                />
            </div>
        );
    }
}

Iframe.propTypes = {
    /**
     * Iframe ID
     */
    id: PropTypes.string,

    /**
     * Iframe title
     */
    title: PropTypes.string.isRequired,

    /**
     * Iframe的目标地址
     */
    src: PropTypes.string.isRequired,

    /**
     * Iframe返回事件重写
     */
    iframeBackEvent: PropTypes.func,

    /**
     * 控制App底部菜单是否显示(传入true：显示  false：不显示)
     */
    showAppFooter: PropTypes.func,

    /**
     * iframe加载后方法，可以在此方法关闭loading等操作
     */
    afterLoad: PropTypes.func,

    /**
     * iframe加载中样式设置，配合afterLoad，可防止iframe资源未加载完，样式错乱。 传入参数如： {visibility: 'hidden'}
     */
    loadingStyle: PropTypes.object,
};

export default Iframe;
