import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function useLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
      email: "abc@gmail.com",
      password: "password",
    });


  const handleChangeCredentials = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      toast.error("Please enter Email or Password");
    } else {
      try {
        setIsLoading(true);
        const response = await axios.post(
          "https://netflix-clone-apis.vercel.app/api/v1/login",
          credentials,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = response.data;
        if (data?.success) {
          setIsLoading(false);
          localStorage.setItem("token", data?.token);
          navigate("/home");
        } else {
          toast.error(data?.message ?? "Something Went Wrong");
          setIsLoading(false);
        }
      } catch (error) {
        toast.error(error?.response.data.message ?? "Something Went Wrong");
        setIsLoading(false);
      }
    }
  };

  return {
    credentials,
    isLoading,
    handleChangeCredentials,
    handleLogin,
    ToastContainer,
  };
}
