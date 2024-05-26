import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Header } from "@/components/common/Header";
import { Text } from "@/components/common/Text";
import BACK from "@/assets/images/back.svg";
export const SignUp = () => {
  const navigate = useNavigate();
  return (
    <PageLayout justify="start">
      <Header>
        <img
          src={BACK}
          alt="뒤로가기"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(-1);
          }}
        />
      </Header>
      <Text color="black" size="36px">
        회원가입
      </Text>
    </PageLayout>
  );
};
