function Signup() {
  const handleSignup = () => {
    alert("Signup functionality can be added later");
  };

  return (
    <div>
      <h2>Signup</h2>

      <input placeholder="Email" />
      <br />

      <input type="password" placeholder="Password" />
      <br />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;