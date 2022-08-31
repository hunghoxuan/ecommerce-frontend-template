import React from "react";

import { Column, Row, Img, Text, Button } from "components";

const TermsAndConditionsPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-gilroy justify-end mx-[auto] lg:pt-[27px] xl:pt-[31px] 2xl:pt-[35px] 3xl:pt-[42px] lg:px-[27px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] w-[100%]">
        <Column className="items-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[92%]">
          <header className="w-[100%]">
            <Row className="items-center w-[100%]">
              <Img
                src="images/img_group10392_20.svg"
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
        </Column>
        <Text className="font-semibold lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 underline w-[auto]">
          Terms and Conditions
        </Text>
        <Column className="items-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] px-[1px] w-[92%]">
          <Text className="font-normal lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
            Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
            cras morbi adipiscing fringilla dolor nunc aliquam consequat dolor.
            Condimentum morbi et morbi eleifend viverra consequat consectetur
            lorem. Aliquet elit tortor eu sollicitudin eu nulla commodo
            phasellus. Mauris nunc mi aliquet pellentesque.
            <br />
            Arcu justo orci dolor in. Ac porttitor mi quis quam id varius. Amet
            vestibulum rhoncus massa bibendum nisl. Facilisis egestas quam non
            posuere proin tellus dolor. Commodo diam imperdiet lorem maecenas
            enim sit. Ullamcorper varius turpis pellentesque adipiscing turpis.
            Ipsum cursus sagittis nunc, enim. Vulputate etiam senectus nulla
            sociis quam et. Semper integer diam nulla et bibendum fringilla.
          </Text>
        </Column>
        <Text className="font-semibold lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 underline w-[auto]">
          Lorem ipsum
        </Text>
        <Column className="items-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] px-[1px] w-[92%]">
          <Text className="font-normal lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
            Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
            cras morbi adipiscing fringilla dolor nunc aliquam consequat dolor.
            Condimentum morbi et morbi eleifend viverra consequat consectetur
            lorem. Aliquet elit tortor eu sollicitudin eu nulla commodo
            phasellus
          </Text>
        </Column>
        <Text className="font-semibold lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 underline w-[auto]">
          Lorem ipsum
        </Text>
        <Column className="items-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] px-[1px] w-[92%]">
          <Text className="font-normal lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
            Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
            cras morbi adipiscing fringilla dolor nunc aliquam consequat dolor.
            Condimentum morbi et morbi eleifend viverra consequat consectetur
            lorem. Aliquet elit tortor eu sollicitudin eu nulla commodo
            phasellus
          </Text>
        </Column>
        <Text className="font-semibold lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 underline w-[auto]">
          Lorem ipsum
        </Text>
        <Column className="items-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] px-[1px] w-[92%]">
          <Text className="font-normal lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
            Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
            cras morbi adipiscing fringilla dolor nunc aliquam consequat dolor.
            Condimentum morbi et morbi eleifend viverra consequat consectetur
            lorem. Aliquet elit tortor eu sollicitudin eu nulla commodo
            phasellus
          </Text>
        </Column>
        <Text className="font-semibold lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 underline w-[auto]">
          Lorem ipsum
        </Text>
        <Column className="items-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] px-[1px] w-[92%]">
          <Text className="font-normal lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
            molestie ullamcorper at tempor. Gravida id tempus nunc, ac tempus.
            Sapien porttitor sem etiam ipsum sed turpis hac in sagittis. Erat
            cras morbi adipiscing fringilla dolor nunc aliquam consequat dolor.
            Condimentum morbi et morbi eleifend viverra consequat consectetur
            lorem. Aliquet elit tortor eu sollicitudin eu nulla commodo
            phasellus
          </Text>
        </Column>
      </Column>
    </>
  );
};

export default TermsAndConditionsPage;
