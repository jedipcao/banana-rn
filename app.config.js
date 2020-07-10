export default {
	name: 'The Banana App',
	slug: 'banana-app',
	privacy: 'public',
	sdkVersion: '36.0.0',
	platforms: [
		'ios',
		'android',
		'web',
	],
	version: '1.0.0',
	orientation: 'portrait',
	icon: './assets/icon.png',
	splash: {
		image: './assets/splash.png',
		resizeMode: 'contain',
		backgroundColor: '#083A9B',
	},
	updates: {
		fallbackToCacheTimeout: 0,
	},
	assetBundlePatterns: [
		'**/*',
	],
	ios: {
		supportsTablet: true,
	},
	extra: {
		variant: 'donor',
		storybook: false,
		ipAddress: process.env.IP_ADDRESS,
	},
	userInterfaceStyle: 'automatic',
	packagerOpts: {
		config: 'metro.config.js',
		sourceExts: [
			'expo.ts',
			'expo.tsx',
			'expo.js',
			'expo.jsx',
			'ts',
			'tsx',
			'js',
			'jsx',
			'json',
			'wasm',
			'svg',
			'md',

		],
	},
};