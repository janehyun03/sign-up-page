// "use client";
// import { useState } from "react";

// export default function Home() {
//   const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
//   const [isError, setIsError] = useState(false);
//   const [form, setForm] = useState({
//     firstName: "",
//     firstNameHasUserInput: false,
//     lastName: "",
//     lastNameHasUserInput: false,
//     email: "",
//     emailHasUserInput: false,
//     password: "",
//     passwordHasUserInput: false,
//   });

//   const validation = () => {
//     if (form.firstName == "") {
//       setIsError(true);
//     }
//     if (form.lastName == "") {
//       setIsError(true);
//     }
//     if (form.email == "") {
//       setIsError(true);
//     } else if (form.email !== "" && !emailPattern.test(form.email)) {
//       setIsError(true);
//     }
//     if (form.password == "") {
//       setIsError(true);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     validation();
//     setForm({
//       ...form,
//       firstNameHasUserInput: true,
//       lastNameHasUserInput: true,
//       emailHasUserInput: true,
//       passwordHasUserInput: true,
//     });

//     // submit이 되면 안되는 것!!

//     console.log("submitted");
//     console.log(form);
//     console.log("error", isError);
//   };

//   const onChange = (e) => {
//     validation();
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//       [e.target.name + "HasUserInput"]: true,
//     });
//     console.log("error", isError);
//     console.log("changed");
//     console.log(form);
//   };

//   const isErrorForFirstName =
//     form.firstName == "" && form.firstNameHasUserInput == true;
//   const isErrorForLastName =
//     form.lastName == "" && form.lastNameHasUserInput == true;
//   const isErrorForEmail = form.email == "" && form.emailHasUserInput == true;
//   const isErrorForPassword =
//     form.password == "" && form.passwordHasUserInput == true;

//   return (
//     <>
//       <div className="container bg-cover">
//         <div className="sentence">
//           <div className="title">Learn to code by watching others</div>
//           <div className="desc">
//             See how experienced developers solve problems in real-time. Watching
//             scripted tutorials is great, but understanding how developers think
//             is invaluable.
//           </div>
//         </div>
//         <div className="card">
//           <div className="max-w-sm p-3 text-white rounded shadow-slate-600 shadow-lg  first_card">
//             <span className="font-bold">Try it free 7 days </span>
//             <span>then $20/mo.thereafter</span>
//           </div>
//           <div className="max-w-sm p-6 bg-white border border-gray-200 rounded shadow second_card t shadow-slate-600 shadow-lg">
//             <form onSubmit={handleSubmit}>
//               <input
//                 className={
//                   isErrorForFirstName
//                     ? "border border-red-500 text-gray-900 text-sm rounded block w-full p-2 inputError"
//                     : "border border-gray-300 text-gray-900 text-sm rounded block w-full p-2"
//                 }
//                 type="text"
//                 name="firstName"
//                 placeholder={"First name"}
//                 value={form.firstName}
//                 onChange={onChange}
//               ></input>
//               {isError
//                 ? form.firstName == "" && (
//                     <div className="error">First Name cannot be empty</div>
//                   )
//                 : ""}
//               <input
//                 className={
//                   isErrorForLastName
//                     ? "border border-red-500 text-gray-900 text-sm rounded block w-full p-2 inputError"
//                     : "border border-gray-300 text-gray-900 text-sm rounded block w-full p-2"
//                 }
//                 type="text"
//                 name="lastName"
//                 placeholder={"Last name"}
//                 value={form.lastName}
//                 onChange={onChange}
//               ></input>

//               {isError
//                 ? form.lastName == "" && (
//                     <div className="error">Last Name cannot be empty</div>
//                   )
//                 : ""}
//               <input
//                 className={
//                   isErrorForEmail
//                     ? "border border-red-500 text-gray-900 text-sm rounded block w-full p-2 inputError"
//                     : "border border-gray-300 text-gray-900 text-sm rounded block w-full p-2"
//                 }
//                 type="email"
//                 name="email"
//                 placeholder={"Email Address"}
//                 value={form.email}
//                 onChange={onChange}
//               ></input>
//               {isError
//                 ? form.email == "" && (
//                     <div className="error">Email cannot be empty</div>
//                   )
//                 : ""}
//               {isError
//                 ? form.email !== "" &&
//                   !emailPattern.test(form.email) && (
//                     <div className="error">Looks like this is not an email</div>
//                   )
//                 : ""}

//               <input
//                 className={
//                   isErrorForPassword
//                     ? "border border-red-500 text-gray-900 text-sm rounded block w-full p-2 inputError"
//                     : "border border-gray-300 text-gray-900 text-sm rounded block w-full p-2"
//                 }
//                 type="password"
//                 name="password"
//                 placeholder={"password"}
//                 value={form.password}
//                 onChange={onChange}
//               ></input>
//               {isError
//                 ? form.password == "" && (
//                     <div className="error">Password cannot be empty</div>
//                   )
//                 : ""}
//               <button
//                 type="submit"
//                 className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-100 font-medium rounded text-sm px-5 py-2 me-2 mb-2"
//               >
//                 Claim your free trial
//               </button>
//               <div className="condition">
//                 <span>clicking the button, you are agreeing to our</span>
//                 <span className="condition_term">Terms and Services</span>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
