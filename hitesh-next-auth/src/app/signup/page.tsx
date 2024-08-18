import React, { useState } from 'react'
import axios from "axios";
import {toast} from "react-hot-toast";
export default function SignupPage() {

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response =  await axios.post("/api/users/signup", user);

      console.log("Signup success", response.data);
    } catch (error: any) {
      console.log("Signup failed")

    }
  }

  return (
    <div>Signup page</div>
  )
}