import { Sidebar } from "./components/Sidebar";
import { Chat } from "./components/Chat";

export default function Home() {
  return (
    <div className="flex items-start justify-start w-screen h-screen">
      <Sidebar />

      <Chat />
    </div>
  );
}
