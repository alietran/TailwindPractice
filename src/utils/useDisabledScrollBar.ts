import React, { useEffect } from "react";

type Props = {
  isOpen: boolean;
};

export default function useDisabledScrollBar({ isOpen }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
}
