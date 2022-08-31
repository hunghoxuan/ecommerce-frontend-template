import React from "react";

import { Column, Row, Img, Input, Text, Stack, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const CouponCodeGeneratorPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] 3xl:pb-[116px] lg:pb-[75px] xl:pb-[86px] 2xl:pb-[97px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs1 w-[100%]">
            <Img
              src="images/img_group_9.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] w-[12%]"
              alt="Group"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:ml-[52px] 3xl:ml-[62px] flex lg:ml-[40px] w-[36%] xl:ml-[46px]"
              name="InputField"
              placeholder="Search"
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
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[50px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
              Orders
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] w-[1%]"
              alt="arrowdown"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
              Categories
            </Text>
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
              More
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] w-[1%]"
              alt="arrowdown One"
            />
            <Img
              src="images/img_cart.svg"
              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] w-[2%]"
              alt="cart"
            />
          </Row>
        </header>
        <Column className="font-chivo items-center lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] w-[88%]">
          <Column
            className="bg-cover bg-repeat lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius16 w-[100%]"
            style={{ backgroundImage: "url('images/img_group6514.png')" }}
          >
            <Stack className="bg-white_A700 lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] rounded-radius1714 w-[17%]">
              <Img
                src="images/img_image62.png"
                className="absolute lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] w-[76%]"
                alt="imageSixtyTwo"
              />
            </Stack>
            <Text className="font-bold leading-[normal] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mr-[595px] xl:mr-[680px] 2xl:mr-[765px] 3xl:mr-[918px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-white_A700 w-[34%]">
              Get extra 20% off on Gadgets
            </Text>
          </Column>
          <Row className="font-gilroy justify-between lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] w-[100%]">
            <Text className="font-semibold mt-[3px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
              Deals Of The Day
            </Text>
            <Img
              src="images/img_clock.svg"
              className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] mb-[2px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
              alt="clock"
            />
          </Row>
          <List
            className="font-gilroy lg:gap-[21px] xl:gap-[24px] 2xl:gap-[28px] 3xl:gap-[33px] grid grid-cols-4 min-h-[auto] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 justify-end lg:py-[15px] xl:py-[17px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 shadow-bs w-[100%]">
              <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[3px] w-[84%]">
                <Img
                  src="images/img_pngwing1_4.png"
                  className="lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[100%]"
                  alt="pngwingOne"
                />
                <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_902 w-[auto]">
                  Flat 20% OFF
                </Text>
              </Column>
              <Row className="bg-blue_50 border-blue_A700 border-bw137 border-dashed items-center justify-between lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_A700 w-[auto]">
                  32JU80P
                </Text>
                <Img
                  src="images/img_file_1.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:mr-[10px] xl:mr-[11px] 2xl:mr-[13px] 3xl:mr-[15px] w-[6%]"
                  alt="file"
                />
              </Row>
              <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                12,Nov,2021
              </Text>
            </Column>
            <Column className="bg-white_A700 justify-end lg:py-[15px] xl:py-[17px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 shadow-bs w-[100%]">
              <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[3px] w-[84%]">
                <Img
                  src="images/img_pngwing1_5.png"
                  className="lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[100%]"
                  alt="pngwingOne One"
                />
                <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_902 w-[auto]">
                  Flat 20% OFF
                </Text>
              </Column>
              <Row className="bg-blue_50 border-blue_A700 border-bw137 border-dashed items-center justify-between lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_A700 w-[auto]">
                  32JU80P
                </Text>
                <Img
                  src="images/img_file_1.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:mr-[10px] xl:mr-[11px] 2xl:mr-[13px] 3xl:mr-[15px] w-[6%]"
                  alt="file One"
                />
              </Row>
              <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                12,Nov,2021
              </Text>
            </Column>
            <Column className="bg-white_A700 justify-end lg:py-[15px] xl:py-[17px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 shadow-bs w-[100%]">
              <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[3px] w-[84%]">
                <Img
                  src="images/img_pngwing1_6.png"
                  className="lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[100%]"
                  alt="pngwingOne Two"
                />
                <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_902 w-[auto]">
                  Flat 20% OFF
                </Text>
              </Column>
              <Row className="bg-blue_50 border-blue_A700 border-bw137 border-dashed items-center justify-between lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_A700 w-[auto]">
                  32JU80P
                </Text>
                <Img
                  src="images/img_file_1.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:mr-[10px] xl:mr-[11px] 2xl:mr-[13px] 3xl:mr-[15px] w-[6%]"
                  alt="file Two"
                />
              </Row>
              <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                12,Nov,2021
              </Text>
            </Column>
            <Column className="bg-white_A700 justify-end lg:py-[15px] xl:py-[17px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 shadow-bs w-[100%]">
              <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[3px] w-[84%]">
                <Img
                  src="images/img_pngwing1_7.png"
                  className="lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[100%]"
                  alt="pngwingOne Three"
                />
                <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_902 w-[auto]">
                  Flat 20% OFF
                </Text>
              </Column>
              <Row className="bg-blue_50 border-blue_A700 border-bw137 border-dashed items-center justify-between lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
                <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_A700 w-[auto]">
                  32JU80P
                </Text>
                <Img
                  src="images/img_file_1.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:mr-[10px] xl:mr-[11px] 2xl:mr-[13px] 3xl:mr-[15px] w-[6%]"
                  alt="file Three"
                />
              </Row>
              <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                12,Nov,2021
              </Text>
            </Column>
          </List>
        </Column>
      </Column>
    </>
  );
};

export default CouponCodeGeneratorPage;
