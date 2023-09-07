import { useUserPostsQuery } from "../lib";

type PostProps = {
    userId: number | undefined;
}
const Posts: React.FC<PostProps> = ({
    userId
}) => {
    const { data: posts, isLoading } = useUserPostsQuery(userId!);
    console.log(posts)
    if (isLoading) {
        return (<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">
        </div>)
    }
    return (
        <div className="flex-1 ml-32 flex-col items-start justify-start h-screen ">
            <h1 className="text-2xl font-bold px-2">Post List</h1>
            <ul>
                {posts?.map((post, i) => (
                    <li
                        className="text-xl font-bold text-blue-500 cursor-pointer 
                        hover:bg-blue-300 hover:text-gray-300 hover:shadow-lg my-4 px-2 py-1 rounded-md
                    "
                        key={post.id}>
                        {i + 1}.{" "}
                        {post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Posts