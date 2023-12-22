import { useState } from "react";
import httpClient from "../httpClient";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
     await httpClient.post("//localhost:5000/register", {
        email,
        password,
      });

      window.location.href = "/";
    } catch (error) {
      if (error.response.status === 409) {
        alert("User already exist");
      }
    }
  };
  return (
    <div>
      <form>
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={registerUser}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
