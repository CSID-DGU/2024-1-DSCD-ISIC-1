import { PageLayout } from "@/components/PageLayout";
import { Box } from "@/components/common/Box";
import { Text } from "@/components/common/Text";
import { Wrapper } from "@/components/common/Wrapper";
import { Link, useNavigate } from "react-router-dom";
import PEOPLE_IMG from "@/assets/images/people.png";
import CASE from "@/assets/images/briefCase.svg";
import CAP from "@/assets/images/graduationCap.svg";
import { useEffect } from "react";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const moveToLogin = () => {
      navigate("/login");
    };
    if (!sessionStorage.getItem("token")) {
      moveToLogin();
    }
  }, [navigate]);

  return (
    <PageLayout $gap="0.8rem">
      <Box
        width="90%"
        height="380px"
        $backgroundColor="#F3E1B0"
        radius="17px 17px 17px 17px"
        $shadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        margin="10px 0"
      >
        <Box width="90%" $backgroundColor="transparent">
          <Text size="2.7rem" color="white" $padding="0" $selfProps="start">
            졸업한 선배의
          </Text>
          <Text size="2.7rem" color="white" $padding="0" $selfProps="start">
            밥벌이 알아보기
          </Text>
        </Box>
        <Wrapper width="80%" $margin="20% 0 0 0" $isFlex={true}>
          <img src={PEOPLE_IMG} alt="선배이미지" />
        </Wrapper>
      </Box>
      <Box
        width="90%"
        height="70px"
        radius="17px 17px 17px 17px"
        $shadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      >
        <Link
          to="/info"
          style={{
            textDecoration: "none",
            color: "black",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          내 정보 입력하기 📚
        </Link>
      </Box>
      <Box
        width="90%"
        height="140px"
        $flexDirection="row"
        $backgroundColor="transparent"
        $justifyProps="space-between"
      >
        <Box
          width="46%"
          height="100%"
          radius="24px"
          $justifyProps="space-around"
          $shadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        >
          <Link
            to="/job"
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              height="45%"
              $backgroundColor="transparent"
              $padding="1.5rem 0"
            >
              <img src={CASE} alt="회사가방" />
            </Box>
            <Text size="1rem" color="black">
              직업 추천 받기
            </Text>
          </Link>
        </Box>
        <Box
          width="46%"
          height="100%"
          radius="24px"
          // border="20px"
          $justifyProps="space-around"
          $shadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        >
          <Link
            to="/senior"
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              height="45%"
              $backgroundColor="transparent"
              $padding="1.5rem 0"
            >
              <img src={CAP} alt="학사모" />
            </Box>
            <Text size="1rem" color="black">
              선배 추천 받기
            </Text>
          </Link>
        </Box>
      </Box>
      <Link
        to={"/login"}
        style={{
          color: "black",
          textDecoration: "underline",
          marginTop: "1rem",
        }}
      >
        로그아웃 하기
      </Link>
    </PageLayout>
  );
};
