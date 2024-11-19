import logo from "../../assets/image/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-white rounded-lg  p-14 flex flex-col items-center">
        <div className="flex flex-col align-middle h-auto w-96">
        <img src={logo} alt="Logo" className="mb-4"  style={{ width: "230px", height: "auto" , margin:"auto"}} />
        <h2 className=" font-semi-bold  text-3xl text-gray-900 text-center mb-6">
          Create an account
        </h2>
        <form className="w-full space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        <div>
        <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center w-5 h-5 bg-gray-300 rounded-full">
        <FontAwesomeIcon icon={faCheck} className="text-gray-600 text-xl" />
        </div>
          <p className="text-gray-400 font-medium">Must be at least 8 characters</p>
</div>
<div className="flex items-center space-x-2">
        <div className="flex items-center justify-center w-5 h-5 bg-gray-300 rounded-full">
        <FontAwesomeIcon icon={faCheck} className="text-gray-600 text-xl" />
        </div>
          <p className="text-gray-400 font-normal">Must contain one special character</p>
</div>

        </div>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-bold hover:opacity-90"
          >
            Get Started
          </button>
          <button
            type="button"
            className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100"
          >
            <img
              src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
              alt="Google"
              className="h-5"
            />
            
            Sign up with Google
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4 mb-10">
          Already have an account?{" "}
          <a href="/login" className="text-black-600 hover:underline">
            Log in
          </a>
        </p>
        <p className="text-center text-xs text-gray-500 mt-2">
          By creating an account, you agree to our{" "}
          <a href="/terms" className="text-black-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-black-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
        </div>
        
    </div>
  );
};

export default SignUpForm;
