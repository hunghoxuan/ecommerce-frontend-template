import React from "react";

import { Column, Row, Img, Input, Stack, Text, Line, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const CommunityForumPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_51 font-gilroy items-center mx-[auto] w-[100%]">
        <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
          <Img
            src="images/img_group_37.svg"
            className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] w-[12%]"
            alt="Group"
          />
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:ml-[101px] 3xl:ml-[121px] flex lg:ml-[78px] w-[29%] xl:ml-[89px]"
            name="InputField"
            placeholder="Yelloww"
            prefix={
              <Img
                src="images/img_search.svg"
                className="cursor-pointer ml-[0] lg:w-[12px] lg:h-[13px] lg:mr-[10px] xl:w-[14px] xl:h-[15px] xl:mr-[11px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[13px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[15px] my-[auto]"
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
            size="smSrc"
          ></Input>
          <Stack className="bg-white_A700 border border-bluegray_100 border-solid font-opensans lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[373px] xl:ml-[427px] 2xl:ml-[480px] 3xl:ml-[576px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]">
            <Img
              src="images/img_notification.svg"
              className="absolute lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-[0] justify-center m-[auto] w-[38%]"
              alt="notification"
            />
            <Text className="absolute bg-red_700 border border-bluegray_50 border-solid flex font-semibold items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] right-[0] rounded-radius50 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 top-[2%] w-[18px]">
              2
            </Text>
          </Stack>
          <Column className="border border-blue_A701 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] px-[4px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]">
            <Img
              src="images/img_profileimglarg.png"
              className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
              alt="ProfileImgLarg"
            />
          </Column>
        </Row>
        <Row className="w-[97%]">
          <aside className="w-[25%]">
            <Column className="">
              <Column className="bg-white_A700 justify-end lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[86%]">
                <Row className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mr-[auto] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[39%]">
                  <Img
                    src="images/img_settings.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    alt="settings"
                  />
                  <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Payments
                  </Text>
                </Row>
                <Row className="ml-[2px] mr-[auto] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] py-[1px] rounded-radius8 w-[68%]">
                  <Line className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]" />
                  <Img
                    src="images/img_user_17X21.svg"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[3px] w-[12%]"
                    alt="user"
                  />
                  <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[auto]">
                    Community Forum
                  </Text>
                </Row>
                <Column className="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[55%]">
                  <Row className="ml-[1px] w-[99%]">
                    <Img
                      src="images/img_vector_18X20.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[14%]"
                      alt="Vector"
                    />
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Wallet & Cards
                    </Text>
                  </Row>
                  <Row className="lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[88%]">
                    <Img
                      src="images/img_settings_17X22.svg"
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[18%]"
                      alt="settings One"
                    />
                    <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Transactions
                    </Text>
                  </Row>
                  <Row className="ml-[1px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[69%]">
                    <Img
                      src="images/img_arrowup.svg"
                      className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[2px] w-[20%]"
                      alt="arrowup"
                    />
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Analytics
                    </Text>
                  </Row>
                  <Row className="ml-[1px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[73%]">
                    <Img
                      src="images/img_menu_20X20.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="menu"
                    />
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Messages
                    </Text>
                  </Row>
                  <Row className="ml-[1px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[64%]">
                    <Img
                      src="images/img_settings_20X19.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[21%]"
                      alt="settings Two"
                    />
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Settings
                    </Text>
                  </Row>
                  <Row className="font-opensans ml-[1px] lg:mt-[371px] xl:mt-[425px] 2xl:mt-[478px] 3xl:mt-[573px] w-[46%]">
                    <Img
                      src="images/img_question.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="question"
                    />
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Help
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </aside>
          <Text className="font-semibold lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 w-[auto]">
            All Topics
          </Text>
          <Button
            className="2xl:ml-[768px] 2xl:mt-[30px] 3xl:ml-[922px] 3xl:mt-[36px] flex items-center justify-center lg:ml-[597px] lg:mt-[23px] text-center w-[14%] xl:ml-[683px] xl:mt-[26px]"
            leftIcon={
              <Img
                src="images/img_plus_20X20.svg"
                className="text-center lg:w-[15px] lg:h-[16px] lg:mr-[7px] xl:w-[17px] xl:h-[18px] xl:mr-[8px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[10px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[12px]"
                alt="plus"
              />
            }
            shape="RoundedBorder6"
          >
            <div className="bg-transparent font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
              Ask a Question
            </div>
          </Button>
        </Row>
      </Column>
    </>
  );
};

export default CommunityForumPage;
