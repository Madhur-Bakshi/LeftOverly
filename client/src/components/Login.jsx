import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignup ? "/api/auth/signup" : "/api/auth/login";

    try {
      const res = await axios.post(endpoint, formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } catch (err) {
      console.error(err); // ✅ log full error
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        {isSignup ? "Sign Up" : "Login"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignup && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {isSignup ? "Create Account" : "Login"}
        </button>
      </form>
      <p className="mt-4 text-center">
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="text-blue-600 underline"
        >
          {isSignup ? "Login here" : "Sign up here"}
        </button>
      </p>
    </div>
  );
};

export default Login;
