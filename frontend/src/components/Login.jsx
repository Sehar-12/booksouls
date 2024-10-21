import React from 'react';
import loginimg from '../../public/Loginimage.png';
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="mx-4 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80 my-20 border-2 w-full max-w-[800px] h-[500px] rounded shadow-lg flex flex-col md:flex-row">
      {/* Form Section */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl md:text-4xl font-semibold text-black mb-4 md:mb-6">
          Log<span className="text-pink-500">In</span>
        </h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="font-bold">
            Email:
          </label>
          <input
          {...register("email")} 
            id="email"
            type="email"
            className="border border-gray-300 rounded px-4 py-2"
            placeholder="Enter your email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}"
            required
          />

          
          <label htmlFor="password" className="font-bold">
            Password:
            <span className="font-light font-size-7 ml-7">
              <a href="/" className="text-blue-500 hover:underline">Forgot password?</a>
            </span>
          </label>
          <input
          {...register("password")} 
            id="password"
            type="password"
            className="border border-gray-300 rounded px-4 py-2"
            placeholder="Enter password"
            pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
            title="Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, %, *, ?, &)." 
            required
          />
         
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-800 mr-16 ml-16 mt-4 text-white px-4 py-2 rounded transition"
          >
            LOG IN
          </button>
          <p className='mt-4'>Dont have a Account?<span className='ml-1 text-blue-500'><a href='/Signup' className='hover:underline onClick:text-blue-900'>Sign Up</a></span></p>
        </form>
      </div>

      {/* Image Section */}
      <div className="flex-1 hidden md:block">
        <img
          src={loginimg}
          alt="Illustration of books for login"
          className="w-full h-full object-cover rounded-r"
        />
      </div>
    </div>
  );
}

export default Login;
