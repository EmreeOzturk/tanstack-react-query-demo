import Posts from "./components/Posts"
import UserList from "./components/UserList"
import { useState } from "react"
export default function App() {
  const [userId, setUserId] = useState<number | undefined>()
  return (
    <main className=" bg-gradient-to-r py-16 overflow-hidden from-green-800/40 to-blue-500/70 h-screen w-screen">
      <div className="max-w-7xl mx-auto flex justify-between ">
        <UserList setUserId={setUserId} userId={userId} />
        <Posts userId={userId} />
      </div>
    </main>
  )
}

