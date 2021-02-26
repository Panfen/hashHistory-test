import Api from '../Api';

const scope = '';

const api = {
  
  // 发送验证码
	sendVerifyCode: phone => Api.get(`/pc/pub/login/sendVerifyCode`, { phone }),

	// 登录
  login: params => Api.post(`/pc/pub/login`, params),


  /**
   * 机构列表
   */
  getOrgList: params => Api.get(`/pc/org/list`, params),
  // 添加机构
  addOrg: params => Api.post(`/pc/org/add`, params),
  // 编辑机构
  updateOrg: params => Api.post(`/pc/org/update`, params), 
  // 项目列表
  getProjectGroupList: () => Api.get(`/pc/project/group/list`),


  /**
   * 项目列表
   */
  getProjectList: params => Api.get(`/pc/project/list`, params),
  // 搜索结构(根据当前系统角色数据权限过滤)
  getRoleOrgList: params => Api.get(`/pc/project/org/search`, params),
  // 添加项目
  addProject: params => Api.post(`/pc/project/add`, params),
  // 更新项目
  updateProject: params => Api.post(`/pc/project/update`, params),
  // 获取项目详情
  getProjectDetail: projectId => Api.get(`/pc/project/detail`, { projectId }),


  /**
   * 用户列表
   */
  getUserList: params => Api.get(`/pc/user/list`, params),
  // 获取角色列表
  getRoleList: () => Api.get(`/pc/role/list`),
  // 添加用户
  addUser: params => Api.post(`/pc/user/add`, params),
  // 更新用户
  updateUser: params => Api.post(`/pc/user/update`, params),
  // 搜索机构
  searchOrgList: params => Api.get(`/pc/user/org/search`, params),


  /**
   * 申请单列表
   */
  getApplyList: params => Api.get(`/pc/apply/list`, params),
  // 药企pm、第三机构pm的邀请代表(根据当前系统角色及药企过滤)
  getAgentList: () => Api.get(`/pc/user/agent`),
  // 获取申请单详情
  getApplyDetail: num => Api.get(`/pc/apply/detail`, { num }),
  // 获取申请单流水
  getApplyFlow: num => Api.get(`/pc/apply/flow`, { num }),
  // 待处理
  applyRollBack: num => Api.post(`/pc/apply/rollback`, { num }),
  // 初筛失败
  applyFail: params => Api.post(`/pc/apply/enroll/fail`, params),
  // 初筛成功
  applySuccess: params => Api.post(`/pc/apply/enroll/success`, params),
  // 项目列表
  getApplyProjectList: params => Api.get(`/pc/apply/project/list`, params),

};


export default api;