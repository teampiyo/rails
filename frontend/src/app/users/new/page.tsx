'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQueryClient, useMutation } from '@tanstack/react-query';

import apiRouter from '@/api/router';

const defaultState = {
	name: '',
	email: '',
};

export default function NewUser() {
	const [state, setState] = useState(defaultState);
	const { name, email } = state;

	const router = useRouter();

	const queryClient = useQueryClient();

	const createMutation = useMutation({
		mutationFn: apiRouter.users.createUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getUsers'] });
			console.log('redirect!!');
			router.push('/');
		},
	});

	return (
		<main className="flex min-h-screen flex-col gap-4 items-center p-24">
			<h1 className="font-bold">New User</h1>

			<form className="text-md rounded-xl bg-gray-300 p-6 flex flex-col gap-4 justify-center w-80">
				<div className="flex flex-col space-y-1">
					<label>Name</label>
					<input
						type="text"
						className="px-1 py-0.5 rounded text-sm"
						placeholder="John Doe"
						value={name}
						onChange={e =>
							setState(prevState => ({
								...prevState,
								name: e.target.value,
							}))
						}
					/>
				</div>

				<div className="flex flex-col space-y-2">
					<label>Email</label>
					<input
						type="text"
						className="px-1 py-0.5 rounded text-sm"
						placeholder="john@email.com"
						value={email}
						onChange={e =>
							setState(prevState => ({
								...prevState,
								email: e.target.value,
							}))
						}
					/>
				</div>

				<button
					className="bg-blue-400 rounded py-1 font-semibold"
					onClick={e => {
						e.preventDefault();

						createMutation.mutate({
							email,
							name,
						});
					}}
				>
					Save
				</button>
			</form>
		</main>
	);
}
