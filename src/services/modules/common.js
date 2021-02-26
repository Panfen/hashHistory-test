import Api from '../Api';
// 微服务前缀名称 用途：方便对应后端微服务 简写路径
const scope = '/h5/v1/common';

const api = {

  getAppDefaultCancer: appId => Api.get(`${scope}/app/default/cancer.json`, {appId}), 

}

export default api;