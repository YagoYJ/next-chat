type Chat = {
  lastMessage: string;
  name: string;
};

const chats = [
  {
    lastMessage: "Bora trabalhar",
    name: "Trabalho",
  },
  {
    lastMessage: "Bora jogar",
    name: "Games",
  },
] satisfies Chat[];

export function Sidebar() {
  return (
    <aside className="py-12 w-1/6 h-screen">
      <h1 className="text-2xl font-bold text-gray-700 px-5 mb-6">Grupos</h1>

      <div className="flex flex-col gap-5">
        {chats.map((chat) => (
          <button
            key={chat.name}
            className="flex items-center gap-2 hover:bg-slate-400/20 px-5 py-2 rounded-e"
          >
            <div className="w-10 h-10 bg-slate-500 rounded-full" />

            <div className="flex flex-col items-start gap-1">
              <strong className="text-xs font-bold">{chat.name}</strong>
              <p className="text-xs gray-500">{chat.lastMessage}</p>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}
