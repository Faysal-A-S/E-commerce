import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/User/UserApi";
import { authenticateUser } from "../features/User/UserSlice";
import { useDispatch } from "react-redux";

const AdminRegister = () => {
  const handleLogin = () => {
    navigate("/admin/login");
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading, data, error }] = useRegisterMutation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(null);
  let userType = "admin";
  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({ name, email, password, userType });
  };

  useEffect(() => {
    if (error?.data) {
      setFormError(error.data.message);
    }
    if (data?.Token) {
      localStorage.setItem("user", JSON.stringify({ ...data }));
      dispatch(authenticateUser({ ...data }));
      navigate("/");
    }
  }, [error, data, dispatch, navigate]);
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
                      <p>Register to your account as ADMIN</p>

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
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                          Register
                        </button>
                        {formError && (
                          <div className="p-1 m-1 text-danger">{formError}</div>
                        )}
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Already have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          onClick={handleLogin}
                        >
                          Login
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

export default AdminRegister;
