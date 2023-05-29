import React from "react";

type Props = { content: string , className: string, onClick?: () => void};

export default function ButtonCustom({ content, className, onClick }: Props) {
  return (
    <button
      className={
        "bg-green-500 hover:bg-green-600 transition-base   rounded-large text-white font-[Roboto] " +
        className
      }
      onClick={onClick}
    >
      {content}
    </button>
  );
}
