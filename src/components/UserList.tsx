import { useQuery } from "@tanstack/react-query";
import { getUsers, USER_QUERY_KEY } from "../lib";
import { User } from "../../types";

const UserList = () => {
    const { data: users, isLoading } = useQuery([USER_QUERY_KEY], getUsers);

    if (isLoading) {
        return <div
            className="flex items-center justify-center h-screen 
                bg-gradient-to-r from-green-800/40 to-blue-500/70
            "
        >
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">
            </div>
        </div>;
    }
    return (
        <div className="flex flex-col items-start justify-start h-screen ">
            <h1 className="text-2xl font-bold px-2">User List</h1>
            <ul>
                {(users as User[] | undefined)?.map((user, i) => (
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