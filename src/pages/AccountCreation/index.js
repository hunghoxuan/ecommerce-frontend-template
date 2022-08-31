import React from "react";

import { Column, Row, Img, Text, Button, Input } from "components";

const AccountCreationPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:p-[27px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] w-[100%]">
        <header className="w-[92%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_group10392_15.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[13%]"
              alt="Group10392"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[221px] xl:ml-[253px] 2xl:ml-[285px] 3xl:ml-[342px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
              Products
            </Text>
            <Img
              src="images/img_arrowdown_gray_900.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[1%]"
              alt="arrowdown"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
              Resouces
            </Text>
            <Img
              src="images/img_arrowdown_gray_900.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[1%]"
              alt="arrowdown One"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
              Request a demo
            </Text>
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[175px] xl:ml-[200px] 2xl:ml-[225px] 3xl:ml-[270px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
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
        <Text className="font-semibold lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
          Create Account
        </Text>
        <Column className="lg:mb-[283px] xl:mb-[323px] 2xl:mb-[364px] 3xl:mb-[437px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[39%]">
          <Row className="items-center justify-between w-[100%]">
            <Column className="w-[48%]">
              <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                First Name
              </Text>
              <Input
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                type="text"
                name="Group10198"
                placeholder="Enter First Name"
                shape="RoundedBorder8"
                variant="OutlineBluegray100"
              ></Input>
            </Column>
            <Column className="mt-[1px] w-[48%]">
              <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Last Name
              </Text>
              <Input
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                type="text"
                name="Group10198 One"
                placeholder="Enter Last Name"
                shape="RoundedBorder8"
                variant="OutlineBluegray100"
              ></Input>
            </Column>
          </Row>
          <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
            Mobile Number
          </Text>
          <Input
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
            type="number"
            name="Group10198 Two"
            placeholder="Enter Your Number"
            shape="RoundedBorder8"
            variant="OutlineBluegray100"
          ></Input>
          <Text className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
            Email
          </Text>
          <Input
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
            type="email"
            name="Group10198 Three"
            placeholder="Enter Your Email"
            shape="RoundedBorder8"
            variant="OutlineBluegray100"
          ></Input>
          <Text className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
            Set Password
          </Text>
          <Input
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
            type="password"
            name="Group10198 Four"
            placeholder="Set Password"
            shape="RoundedBorder8"
            variant="OutlineBluegray100"
          ></Input>
          <Button
            className="font-medium lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
            shape="RoundedBorder6"
          >
            Create Account
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default AccountCreationPage;
