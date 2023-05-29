import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

type Props = {
  children: React.ReactNode;
};

export default function UserGuard({ children }: Props) {
  const { user } = useAppSelector((state) => state.auth);
  console.log("user", user);
  if (user === null) {
    console.log("235");
    return <Navigate to="/login" />;
  }
  return <> {children}</>;
}
