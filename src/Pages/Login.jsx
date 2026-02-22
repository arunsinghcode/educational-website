function Login() {
  const handleLogin = () => {
    alert("Login functionality can be added later");
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="Email" />
      <br />

      <input type="password" placeholder="Password" />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;