/**
 * @description 不同环境配置
 */
const host = window.location.host
const host2EnvDict = {
    DEFAULT: 'development',
    'atm.aistarfish.net': 'development',
    'rws-artemed.aistarfish.com': 'prod',
    'rws-artemed.pre.aistarfish.com': 'pre'
}

// 导出环境变量
export const ENV = host2EnvDict[host] || host2EnvDict['DEFAULT']

/**
 * @description 导出是否是生产环境
 */
export const isProd = ENV === 'prod';

export const isPre = ENV === 'pre';


const {userAgent: UA} = navigator;

/**
 * @description 判断当前环境是否是微信
 */
export const isWeixin = UA.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';

export const isApp = UA.includes('StarFish') || UA.includes('starfish') || UA.includes('Android_starFishDoctor') ;
