// Get site URL from environment variable, use default value if not set
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://acedengta.blog';

export const REGISTER_URL = "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y";

export const siteConfig = {
	title: "灯塔加速器",
	brandName: "灯塔加速器",
	badge: "官方正版授权 · 2020老牌运营",
	author: "灯塔加速器官方团队",
	url: SITE_URL,
	mail: "contact@acedengta.blog",
	registerUrl: REGISTER_URL,
	utm: {
		source: `${SITE_URL}`,
		medium: "direct",
		campaign: "official-portal",
	},
	meta: {
		title: "灯塔加速器 — 官方正版授权品牌官网 | 2020老牌IEPL企业专线·VLESS原生高速节点",
		description: "灯塔加速器官方正版授权品牌官网。自2020年起稳定运营，依托全IEPL/IPLC企业级内网专线与现代VLESS协议，提供高可用原生节点，单节点最高2.5Gbps。全面支持香港、台湾、日本、新加坡、美国等全球优质节点，覆盖4K流媒体秒开与ChatGPT/TikTok深度解锁。提供自研客户端并完美支持Clash、Shadowrocket订阅导入。",
		keywords: "灯塔加速器, 灯塔加速器官网, 灯塔加速器注册, IEPL专线, IPLC专线, VLESS机场, 4K流媒体加速, ChatGPT加速, 跨境电商网络, Clash订阅, Shadowrocket节点",
		image: `${SITE_URL}/og.jpg`,
		twitterHandle: "dengta_official",
	},
	// 品牌关键参数
	specs: {
		established: "2020年运营",
		lineType: "IEPL企业级内网专线 / 全球IPLC",
		protocol: "VLESS",
		maxSpeed: "单节点最高 2.5Gbps",
		clients: "提供自研客户端，同时支持 Clash、Shadowrocket 等第三方客户端订阅导入",
		unlimitedDevices: "不限设备数量",
		aiSupported: "原生支持 ChatGPT / Claude / Midjourney 等主流 AI 工具",
		streamingSupported: "覆盖 Netflix / Disney+ / YouTube / TikTok 等 4K 流媒体",
		lowestPriceMonth: "8.25", // 8.25元/月属于年付套餐折算后的平均月成本
	},
	social: {
		telegram: "https://t.me/dengta_official",
		email: "mailto:contact@acedengta.blog",
		rss: "/rss.xml",
	},
};

// Footer 快捷链接
export const socialLinks = [
	{
		name: '官方注册',
		url: REGISTER_URL,
		rel: 'nofollow noopener noreferrer',
		icon: `<svg class="icon ic-link" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`
	},
	{
		name: 'RSS 订阅',
		url: '/rss.xml',
		icon: `<svg class="icon ic-rss ic-social" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M329.143 768q0 45.714-32 77.714t-77.714 32-77.715-32-32-77.714 32-77.714 77.715-32 77.714 32 32 77.714z m292.571 70.286q1.143 16-9.714 27.428-10.286 12-26.857 12H508q-14.286 0-24.571-9.428T472 844.57q-12.571-130.857-105.429-223.714T142.857 515.43q-14.286-1.143-23.714-11.429t-9.429-24.571v-77.143q0-16.572 12-26.857 9.715-9.715 24.572-9.715h2.857q91.428 7.429 174.857 46T472 515.43q65.143 64.571 103.714 148t46 174.857z m292.572 1.143q1.143 15.428-10.286 26.857-10.286 11.428-26.286 11.428H796q-14.857 0-25.429-10T759.43 843.43Q752.57 720.57 701.714 610T569.43 418t-192-132.286T144 227.43q-14.286-0.572-24.286-11.143t-10-24.857v-81.715q0-16 11.429-26.285 10.286-10.286 25.143-10.286H148q149.714 7.428 286.571 68.571t243.143 168q106.857 106.286 168 243.143t68.572 286.572z" fill="currentColor"></path></svg>`
	},
];
