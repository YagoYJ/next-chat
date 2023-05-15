import { TGroup } from "@/types/chat";
import { TMessage } from "@/types/message";
import { Message } from "./Message";
import { MessageInput } from "./MessageInput";

const group = {
  name: "Trabalho",
  groupLength: 10,
} satisfies TGroup;

const messages = [
  {
    id: 1,
    message: "Cuida!",
    sender: "Cleitin",
  },
  {
    id: 2,
    message:
      "To aqui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae rem voluptates consequatur corporis laboriosam, quaerat architecto tenetur molestiae veniam tempora ut facilis odio dignissimos vero enim quo aut in. ",
    sender: "me",
  },
  {
    id: 3,
    message: "bora logo! lorem ipsum dolor sit amet consectetur adipis",
    sender: "Francisquin",
  },
  {
    id: 4,
    message: "Cuida!",
    sender: "Cleitin",
  },
  {
    id: 5,
    message:
      "To aqui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae rem voluptates consequatur corporis laboriosam, quaerat architecto tenetur molestiae veniam tempora ut facilis odio dignissimos vero enim quo aut in. ",
    sender: "me",
  },
  {
    id: 6,
    message: "bora logo! lorem ipsum dolor sit amet consectetur adipis",
    sender: "Francisquin",
  },
  {
    id: 7,
    message: "Cuida!",
    sender: "Cleitin",
  },
  {
    id: 8,
    message:
      "To aqui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae rem voluptates consequatur corporis laboriosam, quaerat architecto tenetur molestiae veniam tempora ut facilis odio dignissimos vero enim quo aut in. ",
    sender: "me",
  },
  {
    id: 9,
    message: "bora logo! lorem ipsum dolor sit amet consectetur adipis",
    sender: "Francisquin",
  },
] satisfies TMessage[];

export function Chat() {
  return (
    <main className="flex flex-col flex-1 h-full px-3">
      <div className="flex items-center justify-start gap-2 mt-12 pl-2">
        <div className="w-10 h-10 rounded-full bg-slate-500" />

        <div className="flex flex-col items-start justify-center">
          <strong className="text-xs font-bold">{group.name}</strong>
          <span className="text-xs text-gray-500">
            {group.groupLength} pessoas no grupo
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center justify-end h-full bg-slate-300 rounded-t-lg overflow-hidden">
        <div className="w-full flex flex-col gap-3 pb-14 p-3 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-300">
          {messages.map((message) => (
            <Message key={`message-${message.id}`} message={message} />
          ))}
        </div>

        <MessageInput
          className="w-full h-12 px-3 rounded-l-lg"
          type="text"
          name="message"
          placeholder="Digite sua mensagem..."
        />
      </div>
    </main>
  );
}
