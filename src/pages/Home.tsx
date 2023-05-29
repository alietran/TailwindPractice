import React from "react";
import ButtonCustom from "../components/ButtonCustom";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      {/*Banner */}
      <div className="bg-bluelight">
        {" "}
        <div className="m-contain flex justify-between py-[45px] ">
          <div className="max-w-405">
            <p className="text-red-500">Are you ready to Learn?</p>
            <p className="text-5xl font-bold leading-70">
              Learn With fun on
              <span className="text-green-500"> any schedule</span>
            </p>
            <p className="text-black font-bold  !leading-8 !pb-8 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              blandit facilisis quam netus.
            </p>
            <ButtonCustom className="shadow-buttonShadow px-9 py-3" content="Get Started" />
          </div>
          <div className="max-w-2xl ">
            <img src="../src/assets/present.png" alt="" />
          </div>
        </div>
      </div>
      {/* Topic */}
      <div className="grid grid-cols-4 w-4/5 my-0 mx-auto gap-7 py-[70px] ">
        <div className="bg-bluelight rounded-lg  text-center px-5 py-12  flex flex-col items-center hover:bg-white shadow-4xl transition-base">
          <img
            src="../src/assets/image1.png"
            alt=""
            className="w-[66px] h-[75px]"
          />
          <h3 className="text-2xl mt-6 font-medium text-violet">1500+ Topic</h3>
          <p>Learn Anythings</p>
        </div>
        <div className="bg-bluelight rounded-lg  text-center px-5 py-12  flex flex-col items-center hover:bg-white shadow-4xl transition-base ">
          <img
            src="../src/assets/image4.png"
            alt=""
            className="w-[66px] h-[75px]"
          />
          <h3 className="text-2xl mt-6 font-medium  text-violet">
            1800+ Students
          </h3>
          <p>Learn Anythings</p>
        </div>
        <div className="bg-bluelight rounded-lg  text-center px-5 py-12  flex flex-col items-center hover:bg-white shadow-4xl transition-base">
          <img
            src="../src/assets/image2.png"
            alt=""
            className="w-[66px] h-[75px]"
          />
          <h3 className="text-2xl mt-6 font-medium ">9K+ Test Token</h3>
          <p>Learn Anythings</p>
        </div>
        <div className="bg-bluelight rounded-lg  text-center px-5 py-12  flex flex-col items-center hover:bg-white shadow-4xl transition-base">
          <img
            src="../src/assets/image3.png"
            alt=""
            className="w-[66px] h-[75px]"
          />
          <h3 className="text-2xl mt-6 font-medium ">2000+ Student</h3>
          <p>Learn Anythings</p>
        </div>
      </div>
      {/* Online course */}
      <div>
        <h1 className="text-4xl font-bold text-violet text-center mt-5">
          Online Courses
        </h1>
        <div className="grid grid-cols-3 gap-7 w-4/5 my-0 mx-auto mt-[62px]">
          <div className="shadow-5xl  px-6 py-6 rounded-lg">
            <div className="flex flex-col items-center">
              <img
                src="../src/assets/Rectangle 6.png"
                alt=""
                className="w-[331px] h-[234px] "
              />
            </div>
            <h3 className="text-2xl !text-violet font-medium mt-5">
              Modern Psychology
            </h3>
            <p className="text-gray mb-5">Designation</p>
            <ButtonCustom className=" py-2 px-7" content="Buy Course" />
            <div className="flex justify-between mt-8 font-medium text-gray">
              <p className="flex">
                <img
                  className="w-[18px] h-5 mr-2"
                  src="../src/assets/Group.png"
                  alt=""
                />
                <span>Start 20 April, 2021</span>
              </p>
              <p className="flex">
                <img
                  className="w-5 h-[18px] mr-2"
                  src="../src/assets/people.png"
                  alt=""
                />
                <span>60 seats</span>
              </p>
            </div>
          </div>
          <div className="shadow-5xl  px-6 py-6 rounded-lg ">
            <div className="flex flex-col items-center">
              <img
                src="../src/assets/Rectangle 13.png"
                alt=""
                className="w-[331px] h-[234px] "
              />
            </div>

            <h3 className="text-2xl text-violet font-medium mt-5">
              Modern Psychology
            </h3>
            <p className="text-gray mb-5">Designation</p>
            <ButtonCustom className=" py-2 px-7" content="Buy Course" />
            <div className="flex justify-between mt-8 font-medium text-gray">
              <p className="flex">
                <img
                  className="w-[18px] h-5 mr-2"
                  src="../src/assets/Group.png"
                  alt=""
                />
                <span>Start 20 April, 2021</span>
              </p>
              <p className="flex ">
                <img
                  className="w-5 h-[18px] mr-2 "
                  src="../src/assets/people.png"
                  alt=""
                />
                <span> 60 seats</span>
              </p>
            </div>
          </div>
          <div className="shadow-5xl  px-6 py-6 rounded-lg ">
            <div className="flex flex-col items-center">
              <img
                src="../src/assets/Rectangle 15.png"
                alt=""
                className="w-[331px] h-[234px] "
              />
            </div>
            <h3 className="text-2xl text-violet font-medium mt-5">
              Modern Psychology
            </h3>
            <p className="text-gray mb-5">Designation</p>
            <ButtonCustom className=" py-2 px-7" content="Buy Course" />
            <div className="flex justify-between mt-8 font-medium text-gray">
              <p className="flex">
                <img
                  className="w-[18px] h-5 mr-2"
                  src="../src/assets/Group.png"
                  alt=""
                />
                <span>Start 20 April, 2021</span>
              </p>
              <p className="flex">
                <img
                  className="w-5 h-[18px] mr-2"
                  src="../src/assets/people.png"
                  alt=""
                />
                <span>60 seats</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="py-[70px] ">
        <h1 className="text-4xl font-bold text-center">Testimonial</h1>
        <div className="flex justify-center pt-20">
          {" "}
          <div className="max-w-3xl mr-14 ">
            <img
              src="../src/assets/Ellipse 5.png"
              alt=""
              className="w-[120px] h-[120px]"
            />
          </div>
          <p className="max-w-xl leading-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
    </div>
  );
}
