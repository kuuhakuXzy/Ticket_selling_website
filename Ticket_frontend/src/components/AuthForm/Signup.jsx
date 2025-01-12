import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { createUser } from "../../api/ApiFunction";
import useShowToast from "../../hook/useShowToast";

const SignUp = () => {
  const [inputs, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const showToast = useShowToast();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const result = await createUser(inputs);
      showToast("success", "Registration successful!", result.message);
      setInput({ firstName: "", lastName: "", email: "", password: "" });
    } catch (error) {
      showToast("error", "Registration error", error.message);
    }
  };
  return (
    <>
    <Input
      type="email"
      placeholder="Email"
      outline={"2px solid black"}
      _placeholder={{ opacity: 0.5, color: "gray.700" }}
      focusBorderColor="black"
      color="black"
      value={inputs.email}
      onChange={(e) => setInput({ ...inputs, email: e.target.value })}
    />
    <Input
      type="text"
      placeholder="First Name"
      outline={"2px solid black"}
      _placeholder={{ opacity: 0.5, color: "gray.700" }}
      focusBorderColor="black"
      color="black"
      value={inputs.firstName}
      onChange={(e) => setInput({ ...inputs, firstName: e.target.value })}
    />
    <Input
      type="text"
      placeholder="Last Name"
      outline={"2px solid black"}
      _placeholder={{ opacity: 0.5, color: "gray.700" }}
      focusBorderColor="black"
      color="black"
      value={inputs.lastName}
      onChange={(e) => setInput({ ...inputs, lastName: e.target.value })}
    />
    <InputGroup>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        outline={"2px solid black"}
        _placeholder={{ opacity: 0.5, color: "gray.700" }}
        focusBorderColor="black"
        color="black"
        value={inputs.password}
        onChange={(e) => setInput({ ...inputs, password: e.target.value })}
      />
      <InputRightElement>
        <Button
          variant={"ghost"}
          size={"sm"}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <ViewIcon color={"black"}/> : <ViewOffIcon color={"black"}/>}
        </Button>
      </InputRightElement>
    </InputGroup>

    <Button w={"full"} color={"black"} colorScheme="yellow" onClick={handleRegistration}>
      Sign Up
    </Button>
  </>
  );
};

export default SignUp;
