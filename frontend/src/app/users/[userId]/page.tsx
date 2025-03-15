'use client';

import { useEffect, useState } from 'react';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';

import apiRouter from '@/api/router';

const defaultState = {
	name: '',
	email: '',
};

export default function EditUser(props: any) {
	const {
		params: { userId },
	} = props;

	const [state, setState] = useState(defaultState);
	const { name, email } = state;

	const queryClient = useQueryClient();

	const { data, isLoading, refetch, status } = useQuery({
		queryKey: ['getUser', userId],
		queryFn: () => apiRouter.users.getUser(userId),
	});

	const updateMutation = useMutation({
		mutationFn: apiRouter.users.updateUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getUsers'] });
			refetch();
		},
	});

	useEffect(() => {
		if (status === 'success') {
			setState({
				email: data?.email || '',
				name: data?.name || '',
			});
		}
	}, [status]);

	return (
		<main className="flex min-h-screen flex-col gap-8 items-center p-24">
			<h1>{data?.name}</h1>

			{!isLoading && (
				<form className="text-md rounded-xl bg-gray-300 p-6 flex flex-col gap-4 justify-center w-80">
					<div className="flex flex-col space-y-1">
						<label>Name</label>
						<input
							type="text"
							className="px-1 py-0.5 rounded text-sm"
							value={name}
							onChange={e =>
								setState(prevState => ({
									...prevState,
									name: e.target.value,
								}))
							}
						/>
					</div>

					<div className="flex flex-col space-y-1">
						<label>Email</label>
						<input
							type="text"
							className="px-1 py-0.5 rounded text-sm"
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

							updateMutation.mutate({
								id: data?.id,
								email,
								name,
							});
						}}
					>
						Save
					</button>
				</form>
			)}
		</main>
	);
}
