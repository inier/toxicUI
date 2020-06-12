import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './index.module.scss';

// loading图标和错误提示的组件
class ToastAndLoading extends Component {
    render() {
        const { loading, toastMsg } = this.props;
        return (
            <React.Fragment>
                {!!toastMsg && (
                    <Snackbar
                        key={`top,center`}
                        className={styles.snackBar}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        ContentProps={{
                            style: { flexGrow: 0, padding: '0 10px', justifyContent: 'center' },
                        }}
                        open={!!toastMsg}
                        onClose={this.handleClose}
                        message={<span id="message-id">{toastMsg}</span>}
                    />
                )}
                {loading ? (
                    <div className={styles.progressBox}>
                        <div className={styles.progressWrap}>
                            <CircularProgress className={styles.progress} size={28} style={{ color: '#2F7AF6' }} />
                        </div>
                    </div>
                ) : null}
            </React.Fragment>
        );
    }
}

export default ToastAndLoading;
