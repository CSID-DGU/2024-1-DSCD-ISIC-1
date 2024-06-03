import { useState } from "react";
import Select, { StylesConfig, MultiValue } from "react-select";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Header } from "@/components/common/Header";
import { Wrapper } from "@/components/common/Wrapper";
import { Text } from "@/components/common/Text";
import { Input } from "@/components/common/Input";
import { skills, grades, fields, Option } from "@/constant/options";
import { TextArea } from "@/components/common/TextArea";
import { Button } from "@/components/common/Button";
import { Grid } from "@/components/common/Grid";
import BACK from "@/assets/images/back.svg";
import { Box } from "@/components/common/Box";

export const Info = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<MultiValue<Option>>([]);
  const navigate = useNavigate();

  const customStyles: StylesConfig<Option, false> = {
    container: (provided) => ({
      ...provided,
      width: "100%",
    }),
  };

  const handleSkillsChange = (
    newValue: MultiValue<Option>
    // actionMeta: ActionMeta<Option>
  ) => {
    setSelectedSkills(newValue);
  };

  return (
    <PageLayout $justifyContent="start">
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
        내 정보 입력하기
      </Text>
      <Wrapper
        width="85%"
        $gap="5px"
        $isFlex={true}
        $flexDirection="column"
        $margin="30px 0px 0px 0px"
        $padding="15px"
      >
        <Text color="black" size="16px" $selfProps="flex-start">
          주전공
        </Text>
        <Input
          width="98%"
          height="35px"
          $type="text"
          $radius="6px"
          name="major"
        />
        <Text color="black" size="16px" $selfProps="flex-start">
          복수전공
        </Text>
        <Input
          width="98%"
          height="35px"
          $type="text"
          $radius="6px"
          name="minor"
        />
        <Text color="black" size="16px" $selfProps="flex-start">
          학점
        </Text>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={grades}
          styles={customStyles}
          placeholder="학점을 선택해주세요."
        ></Select>
        <Text color="black" size="16px" $selfProps="flex-start">
          보유기술
        </Text>
        <Select
          isMulti
          value={selectedSkills}
          onChange={handleSkillsChange}
          options={skills}
          styles={customStyles}
          placeholder="보유기술을 선택해주세요."
        ></Select>
        {selectedSkills.length > 0 && (
          <Grid>
            {selectedSkills.map((skill) => (
              <Box height="40px" $backgroundColor="#9F5757" radius="10px">
                <Text color="black" size="15px">
                  {skill.label}
                </Text>
              </Box>
            ))}
          </Grid>
        )}
        <Text color="black" size="16px" $selfProps="flex-start">
          수상이력
        </Text>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={fields}
          styles={customStyles}
          placeholder="관련분야를 선택해주세요."
        ></Select>
        <TextArea
          width="98%"
          height="100px"
          defaultString="세부 설명을 입력해주세요."
          $radius="6px"
        ></TextArea>
        <Text color="black" size="16px" $selfProps="flex-start">
          동아리 활동
        </Text>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={fields}
          styles={customStyles}
          placeholder="관련분야를 선택해주세요."
        ></Select>
        <TextArea
          width="98%"
          height="100px"
          defaultString="세부 설명을 입력해주세요."
          $radius="6px"
        ></TextArea>
        <Text color="black" size="16px" $selfProps="flex-start">
          프로젝트 경험
        </Text>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={fields}
          styles={customStyles}
          placeholder="관련분야를 선택해주세요."
        ></Select>
        <TextArea
          width="98%"
          height="100px"
          defaultString="세부 설명을 입력해주세요."
          $radius="6px"
        ></TextArea>
        <Button
          margin="20px 0px 0px 0px"
          width="100%"
          height="50px"
          backgroundColor="#4D3E3E"
          radius="5px"
          color="white"
        >
          저장하기
        </Button>
      </Wrapper>
    </PageLayout>
  );
};