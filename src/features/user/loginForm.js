import { loginAsync } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/spinner";
import { Formik } from "formik";

export default function LoginForm() {
  const { loading } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }else if(!values.password){
            errors.password = "Password is required"
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(loginAsync(values.email, values.password));
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
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
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
            <span className="text-danger">{errors.email && touched.email && errors.email}</span>
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
            <span className="text-danger">{errors.password && touched.password && errors.password}</span>
          </div>
          <div className="d-flex flex-row justify-content-end ">
            <input
              type={"submit"}
              disabled={loading === "loading" ? true : false}
              value={loading === "loading" ? <Spinner /> : "Submit"}
              className={
                "form-control form-control-lg w-25 text-white bg-primary"
              }
            />
          </div>
        </form>
      )}
    </Formik>
  );
}
