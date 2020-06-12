import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Slide } from '@material-ui/core';
import { Button, WingBlank, WhiteSpace } from '@/components';
import ToastAndLoading from '@/components/ToastAndLoading';
import { Agent as MAgent, ApiUrls } from '@/api';
import styles from './ListWithApi.module.scss';

const Agent = new MAgent();

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

@withRouter
class ListWithApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            toastMsg: '',
            articleListCount: -1,
            articleList: [],
        };
    }
    componentDidMount() {
        this.getDataInfo();
    }
    componentWillUnmount() {
        this.setState = () => {
            return;
        };
    }
    handleClose = () => {
        this.setToastMsg();
    };
    handleClick = () => {
        this.getDataInfo();
    };
    setLoading(loading = !this.state.loading) {
        this.setState({
            loading: loading,
        });
    }
    setToastMsg(msg = '') {
        this.setState({
            toastMsg: msg,
        });
    }
    setArticleListCount(count = -1) {
        this.setState({
            articleListCount: count,
        });
    }
    setArticleList(data = []) {
        this.setState({
            articleList: data,
        });
    }
    // 获取数据，示例代码
    getDataInfo() {
        const url = ApiUrls.GET_ARTICLE_LIST;

        return Agent.get(url).then((res) => {
            // return import('@mock/list.json').then((res) => {
            this.setLoading();
            this.setArticleListCount(res.count);
            this.setArticleList(res.results);
            this.setToastMsg('数据加载完成！');
        });
    }
    render() {
        const { loading, toastMsg, articleListCount, articleList } = this.state;
        return (
            <div className={styles.content}>
                {articleListCount <= 0 ? (
                    <div>
                        <Button size="xs" type="secondary" onClick={this.handleClick}>
                            获取数据
                        </Button>
                    </div>
                ) : (
                    articleList.map((item) => {
                        const { desc, ganhuo_id, type, url, who, readability, publishedAt } = item;
                        return (
                            <React.Fragment key={ganhuo_id}>
                                <WhiteSpace noFirst />
                                <WingBlank className={styles.itemWrap} key={ganhuo_id}>
                                    <Link
                                        to={{
                                            pathname: `/view/iframe/${type}`,
                                            state: { url: encodeURIComponent(url) },
                                        }}
                                        className={styles.item}
                                    >
                                        <h3>
                                            {desc}
                                            <span>{type}</span>
                                        </h3>
                                        <h4>{who}</h4>
                                        <p>{publishedAt}</p>
                                    </Link>
                                </WingBlank>
                            </React.Fragment>
                        );
                    })
                )}
                <ToastAndLoading loading={loading} toastMsg={toastMsg} />                
            </div>
        );
    }
}

export default ListWithApi;
