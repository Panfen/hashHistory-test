import Api from '../Api';
// 微服务前缀名称 用途：方便对应后端微服务 简写路径
const scope = '/h5/patient';

const api = {
  
  // 发送验证码
	sendVerifyCode: phone => Api.get(`${scope}/sendVerifyCode`, { phone }),

	// 登录
  login: params => Api.post(`${scope}/login`, params),

  // 获取癌症列表
  getCancerList: () => Api.get(`/h5/pub/common/dict`, { code: 'cancer' }),

  // 上传图片
  uploadPic: () => Api.post(`/h5/file/upload`),

  // 提交申请
  submitApply: params => Api.post(`${scope}/apply`, params), 

  // 查看邀请列表
  getApplyList: params => Api.get(`${scope}/applies`, params),

  // 查看邀请详情
  getApplyDetail: num => Api.get(`${scope}/apply/detail`, { num }),

  // 查看申请单流水
  getApplyFlow: num => Api.get(`${scope}/apply/flow`, { num }),

  // 获取患者信息
  getPatientDetail: () => Api.get(`/h5/patient/detail`),
};


export default api;