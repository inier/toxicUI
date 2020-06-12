/*
 * @Author: your name
 * @Date: 2020-06-13 00:38:45
 * @LastEditTime: 2020-06-13 00:47:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \toxicUI\src\utils\authority.js
 */ 
import { getQueryString } from '../utils';

// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
    return localStorage.getItem('token') || getQueryString('token') || '';
}

export function setAuthority(authority) {
    return localStorage.setItem('token', authority);
}
