import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "@/components/common/Wrapper";
import { LogoFrame } from "@/components/LogoFrame";
import { LoginForm } from "@/components/LoginForm";
import { RequestLoginParams } from "@/types/auth";
import { postLogin } from "@/apis/login";
import { useSubmit } from "@/hooks/useSubmitStatus";

interface LoginResponse {
  data: {
    access: string;
    refresh?: string;
  };
  status: number;
}

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<RequestLoginParams>({
    username: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((cur: RequestLoginParams) => ({
      ...cur,
      [e.target.name]: e.target.value,
    }));
  };

  const successCallback = (response: LoginResponse) => {
    sessionStorage.setItem("access_token", response.data.access);
    navigate("/");
  };

  const { onSubmit } = useSubmit<LoginResponse>(
    postLogin,
    "로그인 성공",
    successCallback
  );

  return (
    <Wrapper height="100%">
      <LogoFrame></LogoFrame>
      <LoginForm
        onChange={onChange}
        handleLogin={() => onSubmit(user)}
      ></LoginForm>
    </Wrapper>
  );
};

export default Login;
