import api from './index';

type Endpoints = {
	getUsers: () => Promise<APISchema.User[]>;
	getUser: (userId: number) => Promise<APISchema.User>; // it's not an array like above, it's single entity
	createUser: (user: Partial<APISchema.User>) => Promise<APISchema.User>;
	updateUser: (user: Partial<APISchema.User>) => Promise<APISchema.User>;
	deleteUser: (user: Partial<APISchema.User>) => Promise<APISchema.User>;
};

const endpoints: Endpoints = {
	getUsers: async () => {
		return await api('users'); // 'users' -> this is the endpoint that we will pass it through the url
		// if you want to pass anything, you can do it by adding options param
	},
	// app > users > [userId] > page.tsx 참고(아래)
	getUser: async userId => {
		return await api(`users/${userId}`);
	},
	// index.ts의 api를 보면 options 알 수 있음.
	createUser: async (user: Partial<APISchema.User>) => {
		return await api(`users`, {
			method: 'post',
			// data: user, -> data is an object
			// we stringify for rails to pick it up easier because it doesn't like nested object
			data: JSON.stringify({
				user,
			}),
		});
	},
	updateUser: async (user: Partial<APISchema.User>) => {
		return await api(`users/${user.id}`, {
			method: 'put',
			data: JSON.stringify({
				user,
			}),
		});
	},
	deleteUser: async (user: Partial<APISchema.User>) => {
		return await api(`users/${user.id}`, {
			method: 'delete',
			// data: JSON.stringify({
			// 	user,
			// }),
		});
	},
};

export default endpoints;
