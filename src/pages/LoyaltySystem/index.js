import React from "react";

import { Column, Row, Img, Input, Stack, Text, Line, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const LoyaltySystemPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy justify-end mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_group_10.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] w-[12%]"
              alt="Group"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:ml-[101px] 3xl:ml-[121px] flex lg:ml-[78px] w-[29%] xl:ml-[89px]"
              name="InputField"
              placeholder="Search Items, Customer etc"
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
        </Column>
        <Row className="items-center mr-[auto] w-[83%]">
          <aside className="w-[28%]">
            <Column className="">
              <Column className="bg-white_A700 justify-end lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[90%]">
                <Row className="items-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mr-[auto] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[43%]">
                  <Img
                    src="images/img_settings.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    alt="settings"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Row className="ml-[2px] mr-[auto] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] py-[1px] w-[59%]">
                  <Line className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]" />
                  <Img
                    src="images/img_menu_18X20.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] w-[13%]"
                    alt="menu"
                  />
                  <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[auto]">
                    Rewards Points
                  </Text>
                </Row>
                <Column className="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[49%]">
                  <Row className="w-[85%]">
                    <Img
                      src="images/img_user.svg"
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[20%]"
                      alt="user"
                    />
                    <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Friend List
                    </Text>
                  </Row>
                  <Row className="ml-[1px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[90%]">
                    <Img
                      src="images/img_minimize.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="minimize"
                    />
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Categories
                    </Text>
                  </Row>
                  <Row className="ml-[1px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[57%]">
                    <Img
                      src="images/img_vector_bluegray_700.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="Vector"
                    />
                    <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Items
                    </Text>
                  </Row>
                  <Row className="ml-[3px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[62%]">
                    <Img
                      src="images/img_bag.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[21%]"
                      alt="bag"
                    />
                    <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Orders
                    </Text>
                  </Row>
                  <Row className="ml-[1px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[78%]">
                    <Img
                      src="images/img_ticket_14X20.svg"
                      className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] mt-[1px] w-[21%]"
                      alt="ticket"
                    />
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Coupons
                    </Text>
                  </Row>
                  <Row className="ml-[3px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[98%]">
                    <Img
                      src="images/img_notification.svg"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] w-[13%]"
                      alt="notification One"
                    />
                    <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Notifications
                    </Text>
                  </Row>
                  <Row className="ml-[1px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[73%]">
                    <Img
                      src="images/img_settings_20X19.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[21%]"
                      alt="settings One"
                    />
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Settings
                    </Text>
                  </Row>
                  <Row className="font-opensans ml-[1px] lg:mt-[269px] xl:mt-[307px] 2xl:mt-[346px] 3xl:mt-[415px] w-[53%]">
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
          <Column className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[72%]">
            <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_902 w-[auto]">
              Rewards Points
            </Text>
            <Column className="items-center lg:ml-[169px] xl:ml-[193px] 2xl:ml-[218px] 3xl:ml-[261px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[75%]">
              <Row className="items-center justify-between w-[100%]">
                <Row className="bg-white_A700 items-center lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius6 w-[72%]">
                  <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[65%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                      Total Reward Points
                    </Text>
                    <Text className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-bluegray_900 w-[auto]">
                      $500
                    </Text>
                  </Column>
                  <Img
                    src="images/img_image2022051.png"
                    className="2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                    alt="image2022051"
                  />
                </Row>
                <Column className="items-center w-[25%]">
                  <Button
                    className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[99%]"
                    shape="RoundedBorder6"
                  >
                    Withdraw
                  </Button>
                  <Button
                    className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                    shape="RoundedBorder6"
                    variant="OutlineBlueA700"
                  >
                    Deposit
                  </Button>
                </Column>
              </Row>
              <Column className="bg-white_A700 justify-end lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[24px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] rounded-radius6 w-[100%]">
                <Text className="font-gilroy font-semibold ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Recent Transactions
                </Text>
                <Text className="font-inter font-medium ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[auto]">
                  Today
                </Text>
                <Row className="font-gilroy items-center justify-between lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                    Earned Reward
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_600 w-[auto]">
                    +$10
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
                <Row className="font-gilroy items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                    Earned Reward
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_600 w-[auto]">
                    +$10
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
                <Row className="font-gilroy items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                    Transferred To Account
                  </Text>
                  <Text className="font-semibold mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_700 w-[auto]">
                    -$5
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
                <Text className="font-inter font-medium ml-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[auto]">
                  21/09/2021
                </Text>
                <Row className="font-gilroy items-center justify-between lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                    Earned Reward
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_600 w-[auto]">
                    +$10
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
                <Row className="font-gilroy items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                    Earned Reward
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_600 w-[auto]">
                    +$10
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
                <Row className="font-gilroy items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                    Transferred To Account
                  </Text>
                  <Text className="font-semibold mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_700 w-[auto]">
                    -$5
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
                <Text className="font-inter font-medium ml-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[auto]">
                  03/09/2021
                </Text>
                <Row className="font-gilroy items-center justify-between lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                    Earned Reward
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_600 w-[auto]">
                    +$10
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
                <Row className="font-gilroy items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Text className="font-normal mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                    Earned Reward
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_600 w-[auto]">
                    +$10
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
                <Row className="font-gilroy items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                    Transferred To Account
                  </Text>
                  <Text className="font-semibold mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_700 w-[auto]">
                    -$5
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 h-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default LoyaltySystemPage;
