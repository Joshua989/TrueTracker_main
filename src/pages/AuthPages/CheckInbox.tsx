import logo from "../../assets/image/logo.svg";

const CheckInbox = () => {
  return (
    <div className="flex justify-center mt-16 min-h-screen ">
      <div className="w-full max-w-md bg-white   p-6 text-center">
        {/* Logo */}
        <div className="mb-6">
        <img src={logo} alt="Logo" className="mb-4"  style={{ width: "230px", height: "auto" , margin:"auto"}} />

        </div>

        {/* Title */}
        <h2 className="text-2xl font-semi-bold text-gray-900 mb-4">
          Check your inbox
        </h2>

        {/* Message */}
        <p className="text-gray-700 font-normal mb-4">
          We just sent an email to{" "} <br />
          <span className="font-medium text-gray-900">
            olukitibijohn01@gmail.com
          </span>{" "}
          to verify your email and activate your account.
        </p>

        {/* Resend link */}
        <p className="text-sm text-gray-600">
          Didn’t receive the email?{" "}
          <a
            href="#"
            className="text-black-600 font-medium hover:underline"
          >
            Click to resend
          </a>
        </p>

        {/* Back to log in */}
        <div className="mt-6">
          <a
            href="/Login"
            className="flex items-center justify-center text-black font-medium hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back to log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default CheckInbox;
