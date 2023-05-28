import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="bg-black text-sub leading-7">
      <div className="flex w-4/5 my-0 mx-auto !pt-12 justify-between">
        {" "}
        <div className="col-span-2 w-[480px] ">
          Millions of people of all ages and from
          <br /> around the world are improving their lives with us
        </div>
        <div>
          <ul>
            <li className="font-bold text-lg text-white">Course</li>
            <li>
              <a href=""> Graphic</a>
            </li>
            <li>
              <a href="">Design Web</a>
            </li>
            <li>
              <a href="">Design Business</a>
            </li>
            <li>
              {" "}
              <a href="">Marketing</a>
            </li>
            <li>
              <a href="">Engineering</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold text-lg text-white">Terms</li>
            <li>
              <a href=""> Graphic</a>
            </li>
            <li>
              <a href="">Design Web</a>
            </li>
            <li>
              <a href="">Design Business</a>
            </li>
            <li>
              {" "}
              <a href="">Marketing</a>
            </li>
            <li>
              <a href="">Engineering</a>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <ul>
            <li className="font-bold text-lg text-white">Useful Link</li>
            <li>
              <a href=""> Graphic</a>
            </li>
            <li>
              <a href="">Design Web</a>
            </li>
            <li>
              <a href="">Design Business</a>
            </li>
            <li>
              {" "}
              <a href="">Marketing</a>
            </li>
            <li>
              <a href="">Engineering</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="pb-7 pt-9  text-center ">Copyright © 2020 www.com</p>
    </div>
  );
}
