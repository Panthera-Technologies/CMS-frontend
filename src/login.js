import LoginForm from "./features/user/loginForm";

export default function Login() {
  return (
    <div className="container">
      <div className=" h-100 w-100 d-flex flex-col justify-content-center items-center">
        <div className="col bg-white m-auto p-5 d-flex flex-column rounded-lg ">
          <h2 className="mb-5">Sign In</h2>
          <LoginForm />
        </div>
        <div className="col h-100 bg-primary"></div>
      </div>
    </div>
  );
}
