import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace with actual subscription logic (API call)
    if (email.trim()) {
      console.log("Subscribed with:", email);
      alert("Thanks for subscribing!");
      setEmail("");
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-white text-gray-900 shadow-xl">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-[40px] font-bold">Stay Inspired</h1>
        <p className="text-sm md:text-base text-gray-600 mt-2 max-w-xl">
          Join our newsletter and be the first to discover new updates, exclusive offers, and inspiration.
        </p>
      </div>

      {/* FORM STARTS HERE */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full px-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 px-4 py-2.5 border border-gray-300 rounded outline-none max-w-66 w-full text-gray-800 focus:ring-2 focus:ring-primary-400"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 group bg-primary hover:bg-primary-dull text-white px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all"
        >
          Subscribe
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </form>
      {/* FORM ENDS HERE */}

      <p className="text-gray-500 mt-6 text-xs text-center">
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
      </p>
    </div>
  );
};

export default Newsletter;