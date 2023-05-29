import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ButtonCustom";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import useDisabledScrollBar from "../utils/useDisabledScrollBar";
type Props = {};

export default function Header({}: Props) {
  console.log("ásâs")
  const navigate = useNavigate();
  const [optionMenu, setOptionMenu] = useState(true);
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const handleLogin = () => {
    navigate("/login");
  };
  const handleOpenMenu = () => {
    console.log(optionMenu);
    setOptionMenu(!optionMenu);
    setHiddenMenu(!hiddenMenu);
  };
  useDisabledScrollBar({ isOpen: hiddenMenu });

  return (
    <div className="md:bg-bluelight bg-white md:p-[30px] py-[15px] ">
      <div className=" flex md:m-contain mx-7 items-center justify-between ">
        <div className="flex  items-center drop-shadow-3xl ">
          <img src="../src/assets/book.png" alt="Google" />
          <h2 className="font-rubik text-[24.86px] font-bold text-[#56548C] ml-2">
            E- School
          </h2>
        </div>
        <div className={`md:flex ${hiddenMenu ? "block" : "hidden"} `}>
          <ul className="fixed md:text-lg text-3xl animate-swipeRight  w-full md:w-96 bg-white md:bg-bluelight md:z-auto md:static top-20  h-full  left-0  md:justify-between items-center  flex md:flex-row   flex-col ">
            <li>
              <Link to="">Books</Link>
            </li>
            <li>
              <Link to="">Courses</Link>
            </li>
            <li>
              <Link to="">Others</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <Button
              className="py-0 mb-3 px-5 md:px-7 md:py-3 "
              content="Sign In"
              onClick={handleLogin}
            />
          </ul>
        </div>
        <div className="md:hidden cursor-pointer">
          <span onClick={handleOpenMenu} className="text-xl">
            {" "}
            {optionMenu ? <AiOutlineMenu /> : <AiOutlineCloseCircle />}
          </span>
        </div>
      </div>
    </div>
  );
}
