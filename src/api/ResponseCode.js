/**
 * 服务器返回的错误码，对于的提示信息
 */
class ResponseCode {
    codes = {
        '0': '请求响应成功',
        '-1': 'Token无效或过期',
        '1': '系统异常',
        '9999': '网络故障',
    };

    /**
     * @description 根据返回码，显示对应的信息
     * @param {*} code 错误码
     * @returns 错误的中文信息
     */
    showMsg(code) {
        if (!code) {
            return '未知的错误';
        }

        // Token无效或过期,不显示
        if (code === '-1') {
            return;
        }

        return this.codes[code.toString()];
    }
}

export default new ResponseCode();
