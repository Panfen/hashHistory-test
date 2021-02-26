import { isProd } from '../config/env';

export const appVerison = '1.0.0';
export const userAgent = navigator.userAgent;
export const titleName = '阿特姆招募系统';

/**
 * 申请状态翻译字典
 */
export const applyStatusDict = {
  0: '患者接收中',
  1: '资料审核中',
  2: '智能匹配中',
}
