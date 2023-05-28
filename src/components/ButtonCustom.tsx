import React from "react";

type Props = { content: string };

export default function ButtonCustom({ content }: Props) {
  return (
    <button className="bg-green-500 hover:bg-green-600 transition-base   px-7 py-2 rounded-large text-white font-[Roboto]">
      {content}
    </button>
  );
}
