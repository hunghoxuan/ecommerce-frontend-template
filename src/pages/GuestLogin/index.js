import React from "react";

import { Column, Img, Text, Input, Button } from "components";

const GuestLoginPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:p-[116px] xl:p-[133px] 2xl:p-[150px] 3xl:p-[180px] w-[100%]">
        <Img
          src="images/img_group_11.svg"
          className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[14%]"
          alt="Group"
        />
        <Text className="font-semibold lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
          Login as a Guest
        </Text>
        <Column className="lg:mb-[258px] xl:mb-[295px] 2xl:mb-[332px] 3xl:mb-[398px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[45%]">
          <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
            Email
          </Text>
          <Input
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
            wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
            type="email"
            name="email"
            placeholder="jane@gmail.com"
            shape="RoundedBorder8"
            variant="OutlineBluegray100"
          ></Input>
          <Text className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
            Password
          </Text>
          <Input
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
            wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] flex lg:mt-[6px] w-[100%] xl:mt-[7px]"
            type="password"
            name="password"
            placeholder="*********"
            suffix={
              <Img
                src="images/img_eye.svg"
                className="mr-[0] lg:w-[12px] lg:ml-[27px] xl:w-[14px] xl:ml-[31px] 2xl:w-[16px] 2xl:ml-[35px] 3xl:w-[19px] 3xl:ml-[42px] my-[auto]"
                alt="eye"
              />
            }
            shape="RoundedBorder8"
            size="sm"
            variant="OutlineBluegray100"
          ></Input>
          <Text className="font-medium lg:ml-[284px] xl:ml-[325px] 2xl:ml-[366px] 3xl:ml-[439px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_A700 w-[auto]">
            Forgot Password?
          </Text>
          <Button
            className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
            shape="RoundedBorder6"
          >
            Log in
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default GuestLoginPage;
