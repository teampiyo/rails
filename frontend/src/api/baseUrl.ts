// 1. define base urls.
//    When developing we are under development stage, production and etc
//    We will be using different urls, so we define that here.

const baseUrls = {
	development: 'http://localhost:3002/v1',
	staging: '',
	production: '',
	test: '',
};

const baseUrl = baseUrls[process.env.NODE_ENV || 'development'];

export default baseUrl;

// 2. Once done, we will move on to index.ts (index for api)
