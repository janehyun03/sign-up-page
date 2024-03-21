"use client";
import { useForm } from "react-hook-form";
import "./globals.css";

export default function Home() {
  const onSubmit = (data) => {
    console.log(data);
    alert("submitted");
    reset();
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  return (
    <>
      <div className="container bg-cover">
        <div className="sentence">
          <div className="title">Learn to code by watching others</div>
          <div className="desc">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding ‹›how developers
            think is invaluable.
          </div>
        </div>
        <div className="card">
          <div className="max-w-sm p-3 text-white rounded shadow-slate-600 shadow-lg first_card">
            <span className="font-bold">Try it free 7 days </span>
            <span>then $20/mo.thereafter</span>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded shadow second_card t shadow-slate-600 shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                id="firstName"
                className={
                  errors.FirstName
                    ? "border border-red-500 text-gray-900 text-sm rounded block w-full p-2 inputError"
                    : "border border-gray-300 text-gray-900 text-sm rounded block w-full p-2"
                }
                placeholder={errors.FirstName ? "" : "First name"}
                {...register("FirstName", { required: true })}
              ></input>
              <div className="error">
                {errors.FirstName?.type === "required" &&
                  "FirstName cannot be empty"}
              </div>

              <input
                type="text"
                id="lastName"
                className={
                  errors.LastName
                    ? "border border-red-500 text-gray-900 text-sm rounded block w-full p-2 inputError"
                    : "border border-gray-300 text-gray-900 text-sm rounded block w-full p-2"
                }
                placeholder={errors.LastName ? "" : "Last name"}
                {...register("LastName", { required: true })}
              ></input>
              <div className="error">
                {errors.LastName?.type === "required" &&
                  "Last name cannot be empty"}
              </div>
              <input
                type="email"
                id="email"
                className={
                  errors.Email
                    ? "border border-red-500 text-gray-900 text-sm rounded block w-full p-2 inputError placeholder-red-400"
                    : "border border-gray-300 text-gray-900 text-sm rounded block w-full p-2"
                }
                placeholder={
                  errors.Email ? "email@example/com" : "Email Address"
                }
                {...register("Email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
                })}
              ></input>
              <div className="error">
                {errors.Email?.type === "required" && "Email cannot be empty"}
                {errors.Email?.type === "pattern" &&
                  "Looks like this is not an email"}
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder={errors.Pass ? "" : "password"}
                className={
                  errors.Pass
                    ? "border border-red-500 text-gray-900 text-sm rounded block w-full p-2 inputError"
                    : "border border-gray-300 text-gray-900 text-sm rounded block w-full p-2"
                }
                {...register("Pass", { required: true })}
              ></input>
              <div className="error">
                {errors.Pass?.type === "required" && "Password cannot be empty"}
              </div>
              <button
                type="submit"
                className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-100 font-medium rounded text-md px-5 py-2 me-2 mb-2"
              >
                Claim your free trial
              </button>
              <div className="condition_container">
                <span className="condition">
                  clicking the button, you are agreeing to our
                </span>
                <span className="condition_term">Terms and Services</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
