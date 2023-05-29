import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "../components/ButtonCustom";
import { User } from "../models/user";
import { login } from "../redux/Slices/authReducer";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { MdErrorOutline } from "react-icons/md";
import { toast } from "react-toastify";

type Props = {};

export default function Login({}: Props) {
  const dispatch = useAppDispatch();
  const { user, error } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log("userLogin", user);
  console.log("err", error);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      email: "admin@gmail.com",
      password: "Dat123456",
    },
  });
  const onSubmit: SubmitHandler<User> = (data: any) => dispatch(login(data));
  useEffect(() => {
    console.log("user", user);
    if (user) {
      console.log("user", user);
      navigate("/");
      toast.success("Login success!");
    }
  }, [user]);

  return (
    <div className="w-full h-full flex min-h-screen items-center bg-bluelight">
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <div>
          <img src="../src/assets/login.png" alt="" className="" />
        </div>
      </div>

      <div className=" w-1/2  bg-white h-screen flex flex-col justify-center p-20">
        <div className="mb-4">
          {" "}
          <h3 className="text-3xl font-semibold ">Login</h3>
          <p>Welcomback! Please enter your info.</p>
          {error && (
            <div className="border border-red-500 w-full py-2 px-2 flex text-red-500 mt-2">
              <span className=" text-2xl  mr-2">
                <MdErrorOutline />{" "}
              </span>
              <span>{error}</span>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            {" "}
            <span> {errors.email && <span>This field is required</span>}</span>
            <input
              placeholder="Email"
              className="border-b border-black p-2 bg-transparent focus:outline-none my-4"
              type="text"
              {...register("email", { required: "This field is required" })}
            />
          </div>
          <div className="flex flex-col">
            {" "}
            <input
              placeholder="Password"
              className="border-b border-black p-2 bg-transparent  focus:outline-none my-4"
              type="password"
              {...register("password", {
                required: "This field is required",
              })}
            />{" "}
            <span> {errors.email && <span>This field is required</span>}</span>
          </div>
          <div>
            {" "}
            <button
              className=" text-white cursor-pointer rounded-md  w-full p-3 mt-3 bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out"
              type="submit"
            >
              Login
            </button>
          </div>

          <div className="flex relative py-4 items-center justify-center ">
            <div className="bg-black h-[1px] w-full "></div>
            <p className="absolute text-xl px-2 text-black/80 bg-white">or</p>
          </div>
          <div className=" ">
            <button
              className="flex justify-center text-black rounded-md hover:bg-blue-50 border-black/40 cursor-pointer border w-full p-3 mt-3 bg-white transition duration-300 ease-in-out"
              type="submit"
            >
              <img
                src="../src/assets/gg_logo.webp"
                alt=""
                className="h-6 w-6 mr-2"
              />
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
