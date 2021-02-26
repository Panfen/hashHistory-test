import Api from '../Api';
// 微服务前缀名称 用途：方便对应后端微服务 简写路径
const scope = '/h5/agent'
const api = {

	// 发送验证码
	sendVerifyCode: phone => Api.get(`${scope}/sendVerifyCode`, { phone }),

	// 登录
  login: params => Api.post(`${scope}/login`, params),

  // 获取身份信息
  getUserInfo: () => Api.get(`${scope}/info`),

  // 查看邀请列表
  getApplyList: params => Api.get(`${scope}/invites`, params),

  // 查看邀请详情
  getApplyDetail: num => Api.get(`${scope}/apply/detail`, { num }),

  // 查看申请单流水
  getApplyFlow: num => Api.get(`${scope}/apply/flow`, { num }),
 
};


export default api;