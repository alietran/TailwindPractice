import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ButtonCustom";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="bg-bluelight pt-[30px]">
      <div className="flex m-contain items-center justify-between ">
        <div className="flex  items-center drop-shadow-3xl">
          <img src="../src/assets/book.png" alt="Google" />
          <h2 className="font-rubik text-[24.86px] font-bold text-[#56548C] ">
            E- School
          </h2>
        </div>
        <div className="flex w-96 justify-between items-center ">
          <Link to="">Books</Link>
          <Link to="">Courses</Link>
          <Link to="">Others</Link>
          <Link to="">Blog</Link>
          <Button content="Sign In" />
        </div>
      </div>
    </div>
  );
}
