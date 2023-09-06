import { useUsersQuery } from "../lib";

const UserList = () => {
    const { data: users, isLoading } = useUsersQuery();

    if (isLoading) {
        return (<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">
        </div>)

    }
    return (
        <div className="flex flex-col items-start justify-start h-screen ">
            <h1 className="text-2xl font-bold px-2">User List</h1>
            <ul>
                {users?.map((user, i) => (
                    <li
                        className="text-xl font-bold text-blue-500 cursor-pointer 
                        hover:bg-blue-300 hover:text-gray-300 hover:shadow-lg my-4 px-2 py-1 rounded-md
                    "
                        key={user.id}>
                        {i + 1}.{" "}
                        {user.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default UserList