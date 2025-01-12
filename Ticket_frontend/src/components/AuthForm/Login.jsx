import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/ApiFunction";
import useShowToast from "../../hook/useShowToast";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const showToast = useShowToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(inputs); // Call login API with inputs
      localStorage.setItem("sessionID", data.sessionID);
      localStorage.setItem("userId", data.userId); // Save userId to localStorage
      localStorage.setItem("username", inputs.username); // Save username to localStorage
      console.log(data);
      showToast("success", "Login successful!", data.message);
      navigate("/home"); // Navigate to the home page
    } catch (error) {
      showToast("error", "Login error", error.message);
    }
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Username"
        outline={"2px solid black"}
        _placeholder={{ opacity: 0.5, color: "gray.700" }}
        focusBorderColor="black"
        color="black"
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <Input
        type="password"
        placeholder="Password"
        outline={"2px solid black"}
        _placeholder={{ opacity: 0.5, color: "gray.700" }}
        focusBorderColor="black"
        color="black"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <Button w={"full"} color={"black"} colorScheme="yellow" onClick={handleLogin}>
        Login
      </Button>
    </>
  );
};

export default Login;
