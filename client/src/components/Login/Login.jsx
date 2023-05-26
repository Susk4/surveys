import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../state/authSlice";
import { useLoginMutation } from "../../state/surveysApiSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const [authLogin] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email || email === "") {
      newErrors.email = "Email is required";
    }
    if (!password || password === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    console.log(email, password);

    try {
      const result = await authLogin({
        strategy: "local",
        email: email,
        password: password,
      }).unwrap();
      // console.log(await result);
      dispatch(login({ user: result.user, token: result.accessToken }));
      navigate("/", { replace: true });
    } catch (error) {
      newErrors.username = "Login error";
      setErrors(newErrors);
    }
  };

  return (
    <div className="h-full flex justify-center items-center ">
      <div className="form-control rounded shadow-2xl bg-slate-700 p-10 flex flex-col gap-10">
        <div>
          <p className="text-2xl ">Welcome to Surveys</p>
          <p>Sign in to you account</p>
        </div>
        <div className="flex flex-col gap-2">
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
          Sign in
        </button>
        <p className="text-xs">
          No account yet?{" "}
          <Link to="/register" className="underline">
            Create an account.
          </Link>
        </p>
      </div>
    </div>
  );
}
