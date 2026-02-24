import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(userCredential.user);

      alert("Signup successful! Check your email for verification.");
      navigate("/login");

    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-card">

        <h2>Create Account</h2>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        {/* <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" />
        </div> */}

        <button className="signup-btn" onClick={handleSignup}>Signup</button>

        <p className="login-text">
         Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;




// import { useState } from "react";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import { useNavigate, Link } from "react-router-dom";
// import "./Signup.css";

// function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       await sendEmailVerification(userCredential.user);

//       alert("Signup successful! Check your email for verification.");
//       navigate("/login");

//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-card">

//         <h2>Create Account</h2>

//         <input
//           type="email"
//           placeholder="Enter Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button onClick={handleSignup}>Signup</button>

//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>

//       </div>
//     </div>
//   );
// }

// export default Signup;