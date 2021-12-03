import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Home from "./Home";
const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/register", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    reset();
  };

  return (
    <div>
      <Home />
      <div className="w-full mr-64 mt-12 bg-no-repeat bg-cover bg-center">
        <div className="flex justify-end">
          <div className="bg-white  mt-12 w-1/2 flex justify-center items-center">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <h1 className="text-2xl font-bold">
                    Register to your account
                  </h1>
                </div>

                <div className="my-3">
                  <label className="block text-md mb-2" for="email">
                    First Name
                  </label>
                  <input
                    className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                    type="text"
                    name="FirstName"
                    {...register("first_name")}
                    placeholder="write your first name here"
                  />
                </div>
                <div className="my-3">
                  <label className="block text-md mb-2" for="email">
                    Last Name
                  </label>
                  <input
                    className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                    type="text"
                    name="LastName"
                    {...register("last_name")}
                    placeholder="write your last name here"
                  />
                </div>
                <div className="my-3">
                  <label className="block text-md mb-2" for="email">
                    Email
                  </label>
                  <input
                    className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                    type="email"
                    name="email"
                    {...register("email")}
                    placeholder="write your email here"
                  />
                </div>

                <div className="mt-5">
                  <label className="block text-md mb-2" for="password">
                    Password
                  </label>
                  <input
                    className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                    type="password"
                    name="password"
                    {...register("password")}
                    placeholder="password here ..."
                  />
                </div>
                <div className="my-3">
                  <label className="block text-md mb-2" for="email">
                    Phonenumber
                  </label>
                  <input
                    className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                    type="phone"
                    name="phonenumber"
                    {...register("phonenumber")}
                    placeholder="write your phone number here"
                  />
                </div>

                <div className="flex justify-between">
                  <div>
                    <input
                      className="cursor-pointer"
                      type="radio"
                      name="rememberme"
                    />
                    <span className="text-sm">Remember Me</span>
                  </div>
                  <span className="text-sm text-blue-700 hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </div>
                <div className="">
                  <button
                    className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
                    type="submit"
                  >
                    Register now
                  </button>
                  <div className="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
                    <img
                      className=" h-5 cursor-pointer"
                      src="https://i.imgur.com/arC60SB.png"
                      alt=""
                    />
                    <button>Or sign-in with google</button>
                  </div>
                </div>
              </form>
              <p className="mt-8"> Dont have an account? </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
