import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { BasePage, Header, PageContainer } from '../../components';
import Navigator from '../../utils/Navigator';
import blockList from './blocklist';
/**
 * @description 带Header的IFrame容器，通过路由跳转过来需要携带title和url两个参数
 * title 如果传入为 ‘noTitle’ 表示没有header
 */
class IframeView extends Component {
    constructor(props) {
        super(props);
        const { location, match } = this.props;
        this.url = decodeURIComponent(location.state.url);

        if (this.urlInBlackList(this.url)) {
            window.location.replace(this.url);
        }

        this.state = { title: match.params.title || '加载中' };
        this.iframeRef = React.createRef();
    }

    componentDidMount() {
        this.iframeRef.current.onload = this.onLoaded.bind(this);
    }

    /**
     * @description 页面加载完成
     * @author Huang Li
     * @date 2018-12-19
     */
    onLoaded() {
        const iDocument = this.iframeRef.current.contentDocument;
        let title = '';
        if (iDocument) {
            title = iDocument.title;
        }
        !this.props.match.params.title && this.setState({ title: title });
    }

    /**
     * @description iframe内页面可点击的事件
     * @param {object} event 事件
     */
    onClick = (event) => {
        try {
            const e = this.getClosest(event.target, '.clickable');
            if (e) {
                const type = e.getAttribute('data-type');
                const url = e.getAttribute('data-url');
                const title = e.getAttribute('data-title');
                type &&
                    Navigator.navigate(type, {
                        title: title,
                        routeUrl: url,
                        history: this.props.history,
                    });
            }
        } catch (error) {
            console.warn(error);
        }
    };

    /**
     * @description 向指定元素的自己或者父元素查找指定的选择器
     * @param {*} _elem 元素
     * @param {*} selector 选择器
     * @returns 找到的元素
     */
    getClosest(_elem, selector) {
        let elem = _elem;
        // Get the closest matching element
        if (elem.matches(selector)) {
            return elem;
        }
        for (; elem && elem.id !== 'root'; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }

        return null;
    }
    urlInBlackList(url) {
        for (let i = 0; i < blockList.length; i++) {
            const item = blockList[i];

            if (url.indexOf(item) >= 0) {
                return true;
            }
            continue;
        }

        return false;
    }

    render() {
        const { title } = this.state;
        const { history } = this.props;

        return (
            <BasePage header={<Header title={title} onLeftClick={history.goBack} />}>
                <PageContainer styles={{ height: '100%' }}>
                    <iframe
                        id={`iframe`}
                        src={this.url}
                        title={title}
                        ref={this.iframeRef}
                        style={{
                            height: `100%`,
                            width: '100%',
                            border: 'none',
                        }}
                    />
                </PageContainer>
            </BasePage>
        );
    }
}

export default withRouter(IframeView);
