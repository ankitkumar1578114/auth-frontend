import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

function App() {
  const responseMessage = async (response) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${response.credential}`,
        },
      };
      console.log(response);

      const res = await axios.get("http://localhost:4000/", config);
      console.log(res);
      localStorage.setItem("token", response.credential);
    } catch (err) {
      console.log(err);
    }
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div>
      <h2>React Google Login</h2>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}
export default App;
