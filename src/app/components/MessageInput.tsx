"use client";
import { InputHTMLAttributes } from "react";
import { PaperPlaneRight } from "@phosphor-icons/react";

export function MessageInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="w-full flex items-center p-3">
      <input className="w-full h-12 px-3 rounded-l-lg" {...props} />

      <button className="bg-white w-12 h-12 p-3 rounded-r-lg hover:bg-green-400 transition-colors">
        <PaperPlaneRight size={25} />
      </button>
    </div>
  );
}
