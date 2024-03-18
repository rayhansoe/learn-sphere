import { getUsers } from "@/lib/users";

export default async function Home() {
	// const users = await getUsers();
	return (
		<>
			<div className="max-w-sm h-full mx-auto">
				<h1>Hello world</h1>
				{/* <p>{JSON.stringify(users)}</p> */}
			</div>
		</>
	);
}
