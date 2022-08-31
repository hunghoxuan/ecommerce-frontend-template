import React from "react";

import { Column, Row, Img, Text, Button, Input, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const InteractiveFAQsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:p-[27px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] w-[100%]">
        <header className="w-[93%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_group_8.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[13%]"
              alt="Group"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[217px] xl:ml-[248px] 2xl:ml-[279px] 3xl:ml-[334px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
              Products
            </Text>
            <Img
              src="images/img_arrowdown_gray_901.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[1%]"
              alt="arrowdown"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
              Resouces
            </Text>
            <Img
              src="images/img_arrowdown_gray_901.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[1%]"
              alt="arrowdown One"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
              Request a demo
            </Text>
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[172px] xl:ml-[197px] 2xl:ml-[222px] 3xl:ml-[266px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
              Sign in
            </Text>
            <Button
              className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[12%]"
              shape="RoundedBorder6"
            >
              Sign up for free
            </Button>
          </Row>
        </header>
        <Text className="font-semibold 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] 2xl:mt-[93px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-black_900 w-[auto]">
          Hello, how can we help?
        </Text>
        <Row className="items-center justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[43%]">
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="flex w-[84%]"
            name="InputField"
            placeholder="Ask a question..."
            prefix={
              <Img
                src="images/img_search.svg"
                className="cursor-pointer ml-[3px] lg:w-[12px] lg:h-[13px] lg:mr-[10px] xl:w-[14px] xl:h-[15px] xl:mr-[11px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[13px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[15px] my-[auto]"
                alt="search"
              />
            }
            suffix={
              inputvalue?.length > 0 ? (
                <CloseSVG
                  color="#bac1ce"
                  className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[17px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                  onClick={() => setInputvalue("")}
                />
              ) : (
                ""
              )
            }
            shape="srcRoundedBorder6"
            size="mdSrc"
          ></Input>
          <Button
            className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[15%]"
            shape="RoundedBorder6"
          >
            Search
          </Button>
        </Row>
        <Column className="lg:mb-[164px] xl:mb-[188px] 2xl:mb-[212px] 3xl:mb-[254px] 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] w-[69%]">
          <Row className="justify-between w-[100%]">
            <Text className="font-semibold mt-[4px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
              What Is This App & How It Works?
            </Text>
            <Img
              src="images/img_menu_26X26.svg"
              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
              alt="menu"
            />
          </Row>
          <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[89%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi augue
            at fringilla posuere ac, et diam. Augue pulvinar eget purus, iaculis
            porta adipiscing pulvinar mi ante. Suspendisse ullamcorper etiam
            natoque et blandit. Adipiscing lacus, vitae morbi sed. Amet, enim
            vel nec ipsum ac sed. Nulla fermentum turpis penatibus placerat.
          </Text>
          <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]" />
          <Row className="justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
            <Text className="font-semibold mt-[4px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
              What Is This App & How It Works?
            </Text>
            <Img
              src="images/img_plus.svg"
              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
              alt="plus"
            />
          </Row>
          <Line className="bg-bluegray_100 h-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
          <Row className="justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
            <Text className="font-semibold mt-[4px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
              What Is This App & How It Works?
            </Text>
            <Img
              src="images/img_plus.svg"
              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
              alt="plus One"
            />
          </Row>
          <Line className="bg-bluegray_100 h-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
          <Row className="justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
            <Text className="font-semibold mt-[4px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
              What Is This App & How It Works?
            </Text>
            <Img
              src="images/img_plus.svg"
              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
              alt="plus Two"
            />
          </Row>
          <Line className="bg-bluegray_100 h-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
          <Row className="justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
            <Text className="font-semibold mt-[4px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
              What Is This App & How It Works?
            </Text>
            <Img
              src="images/img_plus.svg"
              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
              alt="plus Three"
            />
          </Row>
          <Line className="bg-bluegray_100 h-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default InteractiveFAQsPage;
