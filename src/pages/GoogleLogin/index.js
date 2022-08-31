import React from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { Column, Img, Text, Input, Button, Row, Line } from "components";

const GoogleLoginPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:p-[116px] xl:p-[133px] 2xl:p-[150px] 3xl:p-[180px] w-[100%]">
        <Img
          src="images/img_group_35X162.svg"
          className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[14%]"
          alt="Group"
        />
        <Text className="font-semibold lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
          Sign in to Recharge Direct
        </Text>
        <Column className="lg:mb-[17px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[45%]">
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
            name="InputField"
            placeholder="Enter Password"
            suffix={
              <Img
                src="images/img_eye.svg"
                className="mr-[4px] lg:w-[12px] lg:ml-[27px] xl:w-[14px] xl:ml-[31px] 2xl:w-[16px] 2xl:ml-[35px] 3xl:w-[19px] 3xl:ml-[42px] my-[auto]"
                alt="eye"
              />
            }
            shape="RoundedBorder8"
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
          <Row className="lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
            <Line className="bg-bluegray_200 h-[1px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[33%]" />
            <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_200 w-[auto]">
              Or continue with
            </Text>
            <Line className="bg-bluegray_200 h-[1px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[33%]" />
          </Row>
          <Button
            className="2xl:mt-[29px] 3xl:mt-[34px] flex items-center justify-center lg:mt-[22px] text-center w-[100%] xl:mt-[25px]"
            onClick={googleSignIn}
            leftIcon={
              <Img
                src="images/img_google.svg"
                className="text-center lg:w-[17px] lg:h-[18px] lg:mr-[6px] xl:w-[20px] xl:h-[21px] xl:mr-[7px] 2xl:w-[23px] 2xl:h-[24px] 2xl:mr-[8px] 3xl:w-[27px] 3xl:h-[28px] 3xl:mr-[9px]"
                alt="google"
              />
            }
            shape="RoundedBorder6"
            variant="OutlineBlueA700"
          >
            <div className="common-pointer bg-transparent font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Sign in with Google
            </div>
          </Button>
          <Button
            className="2xl:mt-[17px] 3xl:mt-[20px] flex items-center justify-center lg:mt-[13px] text-center w-[100%] xl:mt-[15px]"
            leftIcon={
              <Img
                src="images/img_facebook.svg"
                className="text-center lg:w-[8px] lg:mr-[8px] xl:w-[9px] xl:mr-[9px] 2xl:w-[11px] 2xl:mr-[11px] 3xl:w-[13px] 3xl:mr-[13px]"
                alt="facebook"
              />
            }
            shape="RoundedBorder6"
            variant="OutlineBlueA700"
          >
            <div className="bg-transparent font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
              Sign in with Facebook
            </div>
          </Button>
          <Button
            className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
            shape="RoundedBorder6"
            variant="OutlineBlueA700"
          >
            Sign in with Linkedin
          </Button>
          <Text className="font-normal lg:ml-[104px] xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
            <span className="text-colors font-gilroy">
              Don’t have an account?{" "}
            </span>
            <span className="text-colors font-gilroy font-bold"> </span>
            <span className="text-colors1 font-gilroy font-bold underline">
              Sign up.
            </span>
          </Text>
        </Column>
      </Column>
    </>
  );
};

export default GoogleLoginPage;
