import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/User/UserApi";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../features/User/UserSlice";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, data, error }] = useLoginMutation();
  const [formError, setFormError] = useState(null);
  console.log(data);
  const handleRegister = () => {
    navigate("/register");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (error?.data) {
      setFormError(error.data.message);
    }

    if (data?.Token) {
      localStorage.setItem("user", JSON.stringify({ ...data }));
      navigate("/");
      dispatch(authenticateUser({ ...data }));
    }
  }, [error, data, dispatch, navigate]);
  const userType = "user";
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({
      email,
      password,
      userType,
    });
  };
  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <h4 className="mt-1 mb-5 pb-1 fw-bolder">F-Commerce</h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="text-center pt-1 mb-1 pb-1">
                        <button
                          className="btn btn-primary fw-bold"
                          type="submit"
                          disabled={isLoading}
                        >
                          Login
                        </button>
                        {formError && (
                          <div className="p-1 m-1 text-danger">{formError}</div>
                        )}
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          onClick={handleRegister}
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Your One Stop Shopping Solution.</h4>
                    <p className="small mb-0">
                      Buy everything from one place. Your trusted shop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
