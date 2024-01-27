import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState("true");
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        ></img>
      </div>
      <form className="absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black my-36 bg-opacity-80">
        <h1 className="py-4 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-800"
        />
        <button className="w-full p-4 my-6 bg-red-700 rounded-lg">
          Sign In
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
