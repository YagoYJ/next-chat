import { TMessage } from "@/types/message";

interface MessageProps {
  message: TMessage;
}

export function Message({ message }: MessageProps) {
  return message.sender === "me" ? (
    <p className="block w-fit max-w-[90%] md:max-w-[70%] bg-white py-2 px-3 ml-auto rounded-2xl rounded-tr-none text-sm">
      {message.message}
    </p>
  ) : (
    <div className="flex items-start justify-start gap-2 w-fit max-w-[90%] md:max-w-[70%]">
      <div className="w-11 h-11 rounded-full bg-slate-500" />

      <div className="flex flex-col items-start justify-start flex-1">
        <strong className="text-sm font-medium">{message.sender}</strong>
        <p className="block bg-green-100 py-2 px-3 mr-auto rounded-2xl rounded-tl-none text-sm">
          {message.message}
        </p>
      </div>
    </div>
  );
}
