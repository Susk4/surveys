import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!fullName || fullName === "") {
      newErrors.fullName = "Full name is required";
    }
    if (!email || email === "") {
      newErrors.email = "Email is required";
    }
    if (!password || password === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    console.log(fullName, email, password);
  };

  return (
    <div className="h-full flex justify-center items-center ">
      <div className="form-control rounded shadow-2xl bg-slate-700 p-10 flex flex-col gap-10">
        <div>
          <p className="text-2xl ">Welcome to Surveys</p>
          <p>Register a new account</p>
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Full name"
            className={`input input-bordered ${
              errors.fullName && "input-error"
            }`}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500">{errors.fullName}</p>
          )}
          <input
            type="email"
            placeholder="Email"
            className={`input input-bordered ${errors.email && "input-error"}`}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}

          <input
            type="password"
            placeholder="Passwword"
            className={`input input-bordered ${
              errors.password && "input-error"
            }`}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password}</p>
          )}
        </div>
        <button
          className="btn btn-wide btn-primary m-auto"
          onClick={handleSubmit}
        >
          Register
        </button>
        <p className="text-xs">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Sign in here.
          </Link>
        </p>
      </div>
    </div>
  );
}
