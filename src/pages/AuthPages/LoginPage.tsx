import Logo from "../../assets/image/logo.svg";
const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md  rounded-lg p-6">
        {/* Logo */}
        <div className="text-center mb-6">
        <img src={Logo} alt="Logo" className="mb-4"  style={{ width: "230px", height: "auto" , margin:"auto"}} />

        </div>

        {/* Title */}
        <h2 className=" font-semi-bold  text-3xl text-gray-900 text-center mb-6">
        Log in to your account
                </h2>

        {/* Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-3 py-2 border rounded-md text-gray-900 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-3 py-2 border rounded-md text-gray-900 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Password"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-gray-600"
              >
                Remember for 30 days
              </label>
            </div>
            <a href="#" className="text-sm font-medium text-black hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-md shadow-md hover:opacity-90 focus:outline-none focus:ring focus:ring-orange-300"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="border-t w-full border-gray-300"></div>
          <p className="px-4 text-sm text-gray-500">or</p>
          <div className="border-t w-full border-gray-300"></div>
        </div>

        {/* Sign in with Google */}
        <button className="w-full py-2 border border-gray-300 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 48 48"
            fill="currentColor"
          >
            <path
              d="M44.5 20H24v8.5h11.8c-1.5 4-5.6 6.8-11.8 6.8-6.9 0-12.5-5.6-12.5-12.5S17.1 10.3 24 10.3c3.2 0 6.1 1.2 8.3 3.1l6.3-6.3C34.9 4.6 29.8 2.8 24 2.8 12.9 2.8 3.8 11.9 3.8 24S12.9 45.2 24 45.2c10.4 0 20-7.2 20-20 0-1.4-.1-2.7-.5-4.2z"
              fill="#FFC107"
            />
            <path
              d="M6.3 14.9l6.7 4.9c1.8-4.7 5.7-8.3 10.7-9.5l-3.2-7.1c-6.6 1.6-12 6.1-14.2 11.7z"
              fill="#FF3D00"
            />
            <path
              d="M24 44c5.8 0 10.6-1.9 14.3-5.2l-6.7-5.3c-2.4 1.5-5.4 2.4-8.6 2.4-5.1 0-9.5-3.4-11-8.1l-6.6 5.1c2.3 5.7 8 9.7 14.6 9.7z"
              fill="#4CAF50"
            />
            <path
              d="M44.5 20H24v8.5h11.8c-1.2 3.1-3.8 5.5-6.9 6.8l5.4 4.3c4.6-4.2 7.2-10.3 7.2-17.6 0-1.6-.2-3.2-.5-4.5z"
              fill="#1976D2"
            />
          </svg>
          Sign in with Google
        </button>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/Signup" className="text-black hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
