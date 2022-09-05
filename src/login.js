import { Formik } from "formik";
import Spinner from "./components/spinner";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "./features/user/userSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const { loading, error, success, user, message } = useSelector((state) => state.user);
  const dispatch = useDispatch()

  useEffect(() => {
    if(error){
        toast.error(message)
    }

    if(success || user){
        navigate('/')
    }

    dispatch(reset())

  }, [user, error, success, message, navigate, dispatch])

  return (
    <div className="h-100 w-100">
      <div className="row h-100">
        <div className="col-4 h-100 d-flex px-5 ">
          <div className="m-auto w-100 d-flex flex-column gap-2">
            <h3>Sign In</h3>
            <div>
              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Email is required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  } else if (!values.password) {
                    errors.password = "Password is required";
                  }
                  return errors;
                }}
                onSubmit={(values,) => {
                    dispatch(login({email: values.email, password: values.password}))
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="emailInput" className="h6">
                        Email/Username
                      </label>
                      <input
                        value={values.email}
                        name="email"
                        type={"text"}
                        className={"form-control form-control-lg"}
                        id={"emailInput"}
                        placeholder="example@abc.com"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <span className="text-danger">
                        {errors.email && touched.email && errors.email}
                      </span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="emailInput" className="h6">
                        Password
                      </label>
                      <input
                        value={values.password}
                        name="password"
                        type={"password"}
                        className={"form-control form-control-lg"}
                        id={"emailInput"}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <span className="text-danger">
                        {errors.password && touched.password && errors.password}
                      </span>
                    </div>
                    <input
                      type={"submit"}
                      disabled={loading}
                      value={loading ? <Spinner /> : "Submit"}
                      className={
                        "form-control form-control-lg w-100 text-white bg-primary"
                      }
                    />
                  </form>
                )}
              </Formik>
            </div>
          </div>
          <span
            className="position-absolute w-100"
            style={{ bottom: "10px", alignSelf: "center" }}
          >
            &copy; Panthera Technologies 2022
          </span>
        </div>
        <div className="col-8 login"></div>
      </div>
      {/* <div className="row h-100 ">
        <div className="col-4 h-100">
          <div className="w-100">
            <h2 className="mb-5">Sign In</h2>
            <LoginForm />
          </div>
        </div>
        <div className="col-8 h-100 bg-primary"></div>
      </div> */}
    </div>
  );
}
