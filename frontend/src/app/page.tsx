'use client';

import NextLink from 'next/link';
import { useQuery, useMutation } from '@tanstack/react-query';

import apiRouter from '@/api/router';

export default function Home() {
	const { data, refetch } = useQuery({ queryKey: ['getUsers'], queryFn: apiRouter.users.getUsers });

	// const deleteMutation = useMutation({ mutationFn: apiRouter.users.deleteUser });
	const deleteMutation = useMutation({
		mutationFn: apiRouter.users.deleteUser,
		onSuccess: () => refetch(), // callback fn
		// When clicking delete, we're now triggering the users fetch straight after it,
		// Meaning, we're deleting and fetching actual results.
		// You can manually do this and manipulate the data,
		// But when the app gets bigger, it is easier to fetch the latest data again.
	});

	// console.log('data', data);
	return (
		<main className="flex min-h-screen flex-col gap-12 items-center p-24">
			<div style={{ background: '#D30001', borderRadius: '100%' }}>
				<img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjExMiIgdmlld0JveD0iMCAwIDExMiAxMTIiIHdpZHRoPSIxMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEwMC4wODIzNTcgNDguOTk5NTQwM3Y0LjExMzUwMzRoLTcuMzAwMzM4OHYxLjg5ODU0aDMuNjg0MDcxN2MxLjk3MjUwOTEgMCA0LjA3MjUzNDEgMS40NjY0MzExIDQuMTk3OTk3MSAzLjk2NjUxMjRsLjAwNTkxMy4yMzczOTc3djEuNTgyMTE2N2MtLjA4NzgyNCAzLjAwNzk1OS0yLjU0MzEyMTEgNC4xMzkwMDE4LTQuMDcxNTM4OSA0LjIwMTE3NzNsLS4xMzIzNzEyLjAwMjczMjhoLTcuMzkwNzQ1MXYtNC4wOTA5MDE4bDcuNDgxMTUxOC0uMDIyNjAxNnYtMS45ODg5NDY3aC0zLjQ4MDY1NjdjLTEuNzc1MjU4MyAwLTQuMDgxODMyMS0xLjMzODkxNTMtNC4yMTk5OTQyLTMuOTU0OTIwMWwtLjAwNjUxNzYtLjI0ODk5di0xLjQyMzkwNWMwLTIuNjk4MjQwMiAyLjI3ODIxMjktNC4xODI4NTMgNC4wNjU0NjQtNC4yNjc4NDkxbC4xNjEwNDc4LS4wMDM4NjZ6bS0xOC42OTE1NzkgMHYxMS44NjU4NzUyaDYuMTcwMjU1MXY0LjEzNjEwNTFoLTEwLjczNTc5MTl2LTE2LjAwMTk4MDN6bS02LjQ0MTQ3NTEgMHYxNi4wMDE5ODAzaC00LjU4ODEzODV2LTE2LjAwMTk4MDN6bS0xNS4yMTA5MjIgMGg0LjQwNzMyNTFsLjE4NzcyNC4wMDY2ODEyYy4wMzM4NjA5LjAwMjI3MzUuMDY4OTQ1Ny4wMDUxNDk5LjEwNTE2MDEuMDA4NjY0M2wuMjMwMDg3NS4wMjkwMTc4YzEuMjkxMzgyOS4xOTg1NDc2IDMuNTQ2MzgxNiAxLjEyMTM4MTYgMy42NzUxNzA4IDMuOTA2ODU4N2wuMDA1NzY3Ny4yNTI2ODgxdjExLjc5ODA3MDJoLTQuMjcxNzE1MXYtMi44MjUyMDg0aC00LjEzNjEwNTF2Mi44MjUyMDg0aC00LjQwNzMyNTF2LTExLjc5ODA3MDJjMC0xLjMxODQzMDYgMS4wMDQwODI2LTQuMDQ2ODQ5NSAzLjk0Njg5OS00LjE5NzQxMXptLTE5LjczOTg1MTktLjAwMjc1ODEgOC41ODAxODU3LjAwMDU3NDkuMjM4OTIzNC4wMzY3NDYyLjE0Nzk0NTkuMDI5NDE3LjI3NDExNjEuMDY1MzU4Mi4yMTI1MTk4LjA1OTkwNjguMjMyMzIyNS4wNzQ3MTgyYy4wNDAxNzkzLjAxMzc3MDQuMDgxMDQwMi4wMjgyMjAxLjEyMjUxMS4wNDMzODA0bC4yNTU1NjkxLjA5OTczNzYuMjY2NzYxOC4xMTgyODUyYzEuMzU2MDUxNS42NDAyODY2IDMuMDAyNjg1NSAyLjAzMjE1ODMgMy4wMDI2ODU1IDUuMDE2Mjk0IDAgMy4xODMwNzgxLTEuNTQ2NTI0MSA0LjUwMTQ4OTktMi42OTg4MzYyIDUuMDQyMDQ3N2wtLjIxMDk2NTEuMDkyNTA0NS0uMTk4ODgyOC4wNzU4NjU1LS4xODM5NTc3LjA2MDgxODYtLjE2NjE4OTguMDQ3MzYzNi0uMjA5NzUwOC4wNDkzMDAxLS4yNTk2NDkzLjA0MTgzNjMgNS4wMDU2ODk1IDUuMDUwNTgzNmgtNi4zNzQ5NTg5bC0zLjcyNjIwODMtMy44NjA4OTA2djMuODYwODkwNmgtNC4zMDk4MzE0em0yMi4wMDcwNjAzLTMuMDg2OTE5My40NDQ5OTE3LjQyMjY4MDctLjI0Mjk2OC4xNzc5ODgxLS4zNDgyMzMxLjI2OTMzNjUtLjE5OTg1NzMuMTYyOTIwNGMtNS4yMzk4OTY3LTMuODc0NTcxNS05LjY0NzY0NTQtNS40MjIxNDA5LTEzLjE5NzExOS01LjgxNTM1MzdsLS41MjU5ODA3LS4wNTA0NzA4Yy0xLjAzOTA3NDItLjA4NDIxMjYtMi4wMDA3ODYxLS4wNjk4MTAxLTIuODg0NDMwMi4wMTE1NDYybC0uNDM1MzEzMi4wNDYxMTExYy0uMDcxNDY2OC4wMDg1NjYyLS4xNDIzOTA3LjAxNzU2MDgtLjIxMjc3MTIuMDI2OTY1M2wtLjQxNTc1OTUuMDYxMjAwNS0uNDAyNjk5MS4wNzAxNjA3LS4zODk2MTk0LjA3ODI0MTUtLjM3NjUxOTguMDg1NDQyN2MtLjA2MTY2MDYuMDE0NzkxNy0uMTIyNzc0Ni4wMjk4NDY4LS4xODMzNDE1LjA0NTE0N2wtLjM1NjgzMzkuMDk0NTk1Ny0uMzQzNjg1NC4wOTk1OTgyLS4zMzA1MTc0LjEwMzcyMTMtLjMxNzMyOTcuMTA2OTY0OS0uMzA0MTIyNS4xMDkzMjktLjI5MDg5NTYuMTEwODEzNy0uNDExNTAwMi4xNjcwODAzLS41MDIxOTAyLjIxOTc2MTUtLjY1MzM3MzYuMzA4ODk1Ni0uNjEwMTA1LjMwMDU2NzVjLTQuNjk4ODg2NiAyLjYyMTk3ODgtNi44NTM5Mjk0IDYuODQ2MDcxMS03Ljc2ODIwMDIgMTAuODg2NjQ2M2wtLjEyMjMxMDEuNTc1NzgzOGMtLjAzODA1MDQuMTkxMzgzMy0uMDczNDI3OC4zODIxNTc2LS4xMDYyNzMyLjU3MjEzMDFsLS4wOTEwODA0LjU2NzMxOTYtLjA3NjczMTguNTYxMzUyMS0uMDYzMjI3NS41NTQyMjc3Yy0uMDA5NDU5NC4wOTE3MTM0LS4wMTgzOTE0LjE4MzA4MTctLjAyNjgxMzQuMjc0MDgwOGwtLjA0NDU1NC41NDEzNzIyLS4wMzMxNjAxLjUzMTM1NTZjLS4wMDQ2MjQyLjA4NzY2MDMtLjAwODgwODcuMTc0ODU1MS0uMDEyNTcxMy4yNjE1NjAybC0uMDE3NjUyNS41MTQxNjE4LS4wMDgzNjkzLjUwMTI1MzEuMDAwMDY5Ni40ODcxODc2LjAxNDA4MDYuNzAxODc3OS4wMjgzMTk1LjY2MzcyMjkuMDM5NzA4OS42MjE2NjM3LjA0ODI0OTIuNTc1Njk5OS4wNTM5NDAyLjUyNTgzMTcuMDc1ODQ4MS42MTY3ODc5LjA3NDE0NjIuNTExOTM3LjA4MDAwMDIuNDc4Mzc1Ni4wNjg1OTk1LjM1NDA4NjNoLTE3Ljg1NTMxN2wuMDU4NDktLjQ0MTcyNTMuMDQ2MzM2OC0uMjk1MTQ0OC4wNjMwMjA2LS4zNjQ3MjQyLjExMzI4MTktLjU4OTIwNjkuMTA5Mzc4Ny0uNTE1MDkwNy4xODIwMjY1LS43Nzg1MDg4LjE2NjEzNzYtLjY0ODY3NzIuMTI1OTIzMy0uNDYxNTk0My4yMTMwNDc0LS43MzM4MjI1LjE1ODk2NTUtLjUxNTUwNDIuMTczMTcyOC0uNTM1NDY5OS4xODc5NDYzLS41NTQ1MjI2LjIwMzI4NTctLjU3MjY2Mi4yMTkxOTEzLS41ODk4ODgzLjIzNTY2MjgtLjYwNjIwMTQuMjUyNzAwNC0uNjIxNjAxMmMuMDQzNTY4LS4xMDQ4MzI4LjA4Nzg2OTQtLjIxMDI2OTEuMTMyOTE2Mi0uMzE2MjkwMWwuMjc5MzE4LS42NDI5ODg3LjI5Nzc3MDctLjY1NjEwNTYuMzE2Nzg5NC0uNjY4MzA5Mi4zMzYzNzQtLjY3OTU5OTcuMzU2NTI0OS0uNjg5OTc3Yy4zNjY3ODg5LS42OTQ4NjExLjc2NDY1MjktMS40MDM5MTg0IDEuMTk2MTM5My0yLjEyMzA2MjQgNC43NDYzNTAxLTcuOTEwNTgzNCAxMi44Mzc3NDY5LTEzLjkwMDAyNTIgMTkuNDE0ODMyLTE0LjQ4NzY2ODYgNS4wNDUzODA2LS41MDU0MDk0IDkuODkyNTQzNi45Mjc2ODIzIDEzLjk0NDM2MjggMi44Nzk2NDM1bC42NDk5ODU4LjMyMDg1ODIuNjM1NDc2OC4zMjg2MDkzLjYyMDQwMTkuMzM1MDE1Yy4xMDIxMTI2LjA1NjI5NDkuMjAzNTczNi4xMTI4MDA3LjMwNDM3MS4xNjk0ODkybC41OTY3Mjg2LjM0MjEwMTMuNTgwMjM5LjM0NTE0MzkuNTYzMTgzNi4zNDY4NDExLjU0NTU2MjQuMzQ3MTkzMi41MjczNzUzLjM0NjE5OTkuNTA4NjIyMy4zNDM4NjE0Yy4wODMxNzYyLjA1NzA0MDYuMTY1NTQ3NS4xMTM5Mjc3LjI0NzEwMi4xNzA2MzMzbC40Nzk0MzIuMzM3ODMxMi40NTkyNjQ0LjMzMjEyOTQuNDM4NTMxLjMyNTA4MjUuNDE3MjMxNy4zMTY2OTAyLjU4NDY3MzYuNDU2MzU2OS41MzM1Njc0LjQyOTkwNzEuNjI4NjIzNy41MjQyMTc5LjY0NjM0MzIuNTYxNDAxNXptLTMwLjcwMDEwNTYgMTQuNTcxMzI0MyAyLjQ0MDk4MDEuODgxNDY1Yy4xMTMwMDgzLjg4NTIzMTkuMjczMTAzNCAxLjcyMzM3NzEuNDQxMDQ2NCAyLjQ4ODI3NjFsLjEwMTM5MzYuNDQ5OTQwNi0yLjcxMjIwMDEtLjk3MTg3MTctLjAzMzgzNDctLjIxMjE2MTgtLjA2NjA0MjEtLjQ3NTU4NDMtLjA2MTE2MDEtLjU0MTIxOTVjLS4wNDgwMjg1LS40Nzc0NjAyLS4wODc1ODE0LTEuMDE5OTAwMy0uMTEwMTgzMS0xLjYxODg0NDR6bTMxLjUwNjcyMzktNy42NjE5NjUyaC0xLjUxNDMxMTdjLS45NDAwMjM4IDAtMS4yMzkxMjI0LjQwOTc3Mi0xLjMzNDI5MDEuNjcwNTM2bC0uMDI4MjI2Ni4wOTUwMzM5Yy0uMDAzMjM3LjAxNDA3My0uMDA1ODI2Ni4wMjcxNTI2LS4wMDc4OTgyLjAzOTA3MzJsLS4wMDgxNTczLjA3MTUyMzktLjAwMDEyOTUgMy45MTUzODY0aDQuMTM2MTA1MWwtLjAwMTg1MzMtMy45MzQ3Njk0LS4wMTAyNjEyLS4wNjY5OTEzLS4wMjU3MjA3LS4wOTg3MjQxYy0uMDgzNTM1Ny0uMjU5MTUwNy0uMzUwOTEzNS0uNjkxMDY4Ni0xLjIwNTI1NjUtLjY5MTA2ODZ6bS01MC40OTIxMjQyLjMzOTAyNSAyLjU5OTE5MTcuOTQ5MjctLjQwODY0MS45NTE1ODM5Yy0uMjEyNDg4Mi40OTk0NjQ0LS40Mjc3Nzk2IDEuMDE0ODE0Mi0uNjAzMzU3NSAxLjQ1Nzc0NWwtLjExODA4NDkuMzAyODcxMi0yLjU5OTE5MTctLjk0OTI3LjEzMjM2NjItLjM0NTMwMzMuMjU4Mzg4OS0uNjM5MjAzNC4zMDU3MTExLS43MjgxOTc0LjMyNTQ4NzUtLjc1MzYyNDRjLjAzNjI0MzgtLjA4Mjc5NDMuMDcyMzQzNy0uMTY0ODgyMy4xMDgxMjk3LS4yNDU4NzE2em0zNS40NDUxMjA5LS4xNDM0NDQ5aC0zLjQ1Njg0Mzl2My42NTg4NjczaDMuNDM0Mzk2OGwuMDU0NzEwNi0uMDI1MzkyLjA4NjU5ODQtLjA0ODg5ODMuMTE0NzUzNi0uMDc4NjgyMmMuMjkyNjQyOC0uMjIxMTQ0OC43MzE2MDcxLS43MTQ5Nzk3LjczMTYwNzEtMS42ODc2ODQ3cy0uNDI4OTg3OC0xLjQ1NjU2MzQtLjcxNDk3OTctMS42NzEwNTczbC0uMTEyMTQ1NS0uMDc2MDc0MS0uMDg0NjMwMy0uMDQ2OTMwMXptLTE1LjQ0MjY0NTYtLjc2MDYyMTggMS42MjczMjAxIDEuMjg4Mjk1MWMtLjE4MDgxMzQuNzA1MTcyLS4zMTgyMzE1IDEuNDEwMzQ0LS40MTIyNTQ1IDIuMTE1NTE2bC0uMDYyMzgwNi41Mjg4NzktMS44MzA3MzUtMS40NDY1MDY3Yy4xODA4MTM0LS44MTM2Ni4zODQyMjg0LTEuNjQ5OTIxNy42NzgwNS0yLjQ4NjE4MzR6bTQuMDAwNDk1MS02LjMwNTg2NTEgMS4wMTcwNzUgMS41MzY5MTM0Yy0uMzk3Nzg5My40MTU4NzA3LS43NjY2NDg1LjgzMTc0MTMtMS4wOTUwMDU1IDEuMjcwNzU2MWwtLjIzODQ5MjguMzMzOTYyMy0xLjA4NDg4MDEtMS42MjczMjAxYy40MDY4My0uNTE5ODM4My44ODE0NjUxLTEuMDM5Njc2NyAxLjQwMTMwMzQtMS41MTQzMTE3em0tMTYuMTgyNzkzNi0zLjM0NTA0NjcgMS42MDQ3MTgzIDEuNDAxMzAzNGMtLjQwNjgzLjQyMzc4MTItLjgwMDk0NjUuODcyOTg5NC0xLjE3MjgxNDYgMS4zMjg1NTQybC0uMzY0MDk4Ny40NTY5Nzc1LTEuNzQwMzI4NC0xLjQ5MTcxMDFjLjUxOTgzODMtLjU2NTA0MTYgMS4wODQ4OC0xLjEzMDA4MzMgMS42NzI1MjM0LTEuNjk1MTI1em0yMi4zOTgyNTIxLS4wOTA0MDY3LjQ5NzIzNjYgMS40OTE3MTAxYy0uNTI0MzU4Ni4xNjI3MzItMS4wNDg3MTczLjM2ODg1OTItMS41NzMwNzYuNjA2ODA5NWwtLjM5MzI2OS4xODQyNDg4LS41MTk4Mzg0LTEuNTU5NTE1Yy41NjUwNDE3LS4yNDg2MTg0IDEuMjIwNDkwMS0uNDk3MjM2NyAxLjk4ODk0NjgtLjcyMzI1MzR6bTUuMjg4NzktLjU0MjQ0Yy41Nzg2MDI3LjAzNjE2MjcgMS4xNzE2NzA1LjEwMTI1NTUgMS43NzkyMDMzLjIwNjg1MDVsLjQ1ODM2MTguMDg2OTcxMi0uMDkwNDA2NyAxLjQwMTMwMzRjLS41OTY2ODQtLjEyNjU2OTQtMS4xOTMzNjgtLjIwOTc0MzUtMS43OTAwNTItLjI0OTUyMjRsLS40NDc1MTMtLjAyMTY5NzZ6bS0xOC41NTU5Njg2LTYuMjM4MDYwMSAxLjAxNzA3NSAxLjU1OTUxNWMtLjQ0MDczMjUuMjIwMzY2My0uODY4NzUxNi40NjYxNTk0LTEuMzAzMTI3NC43Mjc4NDQzbC0uNDM3MjAxLjI2NjYyOTEtMS4wMzk2NzY3LTEuNTgyMTE2N2MuNjEwMjQ1LS4zNjE2MjY3IDEuMTk3ODg4NC0uNjc4MDUgMS43NjI5MzAxLS45NzE4NzE3em0xOC41MTA3NjUzLjYzMjg0NjcuMDkwNDA2Ny0xLjQ5MTcxLjQ0MzUwNzMuMTMwNTU2NC4zODM5ODAzLjEyMDMyNTIuMzI4NTQ1OC4xMDk5MDc5LjI3NzIwMzcuMDk5MzA0OC4zMjg0OTE1LjEyODY2OS4yOTY0ODguMTMyNzExMi4xMzQxNDUxLjA2OTU4MzgtLjA5MDQwNjcgMS41MTQzMTE3Yy0uNDgyMTY4OS0uMTk1ODgxMS0uOTY0MzM3OC0uMzgxNzE3LTEuNDUzMjAzNS0uNTU3NTA3OHptLTguNTQzNDMwMS0yLjgyNTIwODQuNDUyMDMzMyAxLjM3ODcwMTdoLS4yMjYwMTY3Yy0uNDkxNTg2MiAwLS45ODMxNzI1LjAxMjcxMzQtMS40NzQ3NTg4LjA0NzY3NTRsLS40OTE1ODYyLjA0MjczMTMtLjQyOTQzMTctMS4zMzM0OTg0Yy43NDU4NTUtLjA5MDQwNjcgMS40NjkxMDg0LS4xMzU2MSAyLjE2OTc2MDEtLjEzNTYxeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" />
			</div>
			{/* <ul>
				{data?.map(user => (
					<li key={user.id}>
						{user.name} - {user.email}
					</li>
				))}
			</ul> */}
			<ul className="text-center w-96">
				{data?.map(user => {
					return (
						<li className="text-base flex border-b border-gray-400 py-4 justify-between gap-2" key={user.id}>
							<NextLink className="text-black font-semibold" href={`/users/${user.id}`}>
								{user.name}
							</NextLink>
							<span className="text-gray-800">{user.email}</span>
							<button className="text-sm font-medium bg-zinc-300 px-2 py-1 rounded hover:bg-zinc-400" onClick={() => deleteMutation.mutate(user)}>
								Delete
							</button>
						</li>
					);
				})}
				<li className="text-base flex py-4 justify-between gap-2">
					<NextLink className="ml-auto text-sm font-medium bg-blue-300 px-4 py-1 rounded hover:bg-blue-400" href={`/users/new`}>
						add
					</NextLink>
					{/* <button className="text-sm font-medium bg-zinc-300 px-2 py-1 rounded hover:bg-zinc-400" onClick={() => deleteMutation.mutate(user)}>
						Delete
					</button> */}
				</li>
			</ul>
		</main>
	);
}
// we need (1) page to show, (2) page to update
