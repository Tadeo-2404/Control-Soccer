const Login = () => {
  return (
    <div>
      <div class="wrapper">
        <form action="">
          <h1>Login</h1>
          <div class="input-box">
            <input type="text" placeholder="E-mail" required />
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" required />
          </div>

          <div class="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" class="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
