import React from "react";

import {
  Column,
  Row,
  Img,
  Input,
  Stack,
  Text,
  Line,
  Button,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const FreeCreditsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] w-[100%]">
        <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
          <Img
            src="images/img_group_2.svg"
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
        <Row className="justify-evenly w-[98%]">
          <aside className="w-[24%]">
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
                <Row className="ml-[2px] mr-[auto] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] py-[1px] w-[46%]">
                  <Line className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]" />
                  <Img
                    src="images/img_menu_18X20.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] w-[17%]"
                    alt="menu"
                  />
                  <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[auto]">
                    My Credits
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
          <Column className="items-center lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[76%]">
            <Row className="items-center justify-between w-[100%]">
              <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 w-[auto]">
                My Credits
              </Text>
              <Button
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[15%]"
                shape="RoundedBorder6"
              >
                Earn Free Credits
              </Button>
            </Row>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 justify-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[100%]">
                <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  Total Credits
                </Text>
                <Text className="font-semibold lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-bluegray_900 w-[auto]">
                  $50,000
                </Text>
              </Column>
              <Column className="bg-white_A700 justify-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[100%]">
                <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  Free Credits
                </Text>
                <Text className="font-semibold lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-bluegray_900 w-[auto]">
                  $10,000
                </Text>
              </Column>
              <Column className="bg-white_A700 justify-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[100%]">
                <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  Redeemed Credits
                </Text>
                <Text className="font-semibold lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-bluegray_900 w-[auto]">
                  $08,000
                </Text>
              </Column>
            </List>
            <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
              <Column className="bg-white_A700 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[71%]">
                <Row className="items-center 2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[8px] xl:pr-[9px] w-[100%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 w-[auto]">
                    Total Credits
                  </Text>
                  <Row className="border border-bluegray_400 border-solid items-center lg:ml-[247px] xl:ml-[282px] 2xl:ml-[318px] 3xl:ml-[381px] 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] w-[33%]">
                    <Column className="items-center mt-[3px] w-[41%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[auto]">
                        Yearly
                      </Text>
                      <Line className="bg-blue_A700 h-[2px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[71%]" />
                    </Column>
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Monthly
                    </Text>
                    <Text className="font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      Daily
                    </Text>
                  </Row>
                  <Img
                    src="images/img_morevertical.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] w-[2px]"
                    alt="morevertical"
                  />
                </Row>
                <Text className="font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_902 w-[auto]">
                  $50,000
                </Text>
                <Row className="lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] pl-[4px] w-[100%]">
                  <Column className="mt-[2px] w-[4%]">
                    <Text className="font-normal ml-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      50K
                    </Text>
                    <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      40K
                    </Text>
                    <Text className="font-normal ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      30K
                    </Text>
                    <Text className="font-normal ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      20K
                    </Text>
                    <Text className="font-normal ml-[4px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      10K
                    </Text>
                    <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      5K
                    </Text>
                    <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      0K
                    </Text>
                  </Column>
                  <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[6%]">
                    <div className="bg-blue_A701 lg:h-[165px] xl:h-[189px] 2xl:h-[213px] 3xl:h-[255px] rounded-radius5 w-[67%]"></div>
                    <Text className="font-normal ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Jan
                    </Text>
                  </Column>
                  <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[102px] xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] w-[6%]">
                    <div className="bg-blue_A701 lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius5 w-[67%]"></div>
                    <Text className="font-normal ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Feb
                    </Text>
                  </Column>
                  <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[6%]">
                    <div className="bg-blue_A701 lg:h-[137px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] rounded-radius5 w-[67%]"></div>
                    <Text className="font-normal ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Mar
                    </Text>
                  </Column>
                  <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[6%]">
                    <div className="bg-blue_A701 lg:h-[141px] xl:h-[162px] 2xl:h-[182px] 3xl:h-[218px] rounded-radius5 w-[67%]"></div>
                    <Text className="font-normal ml-[2px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Apr
                    </Text>
                  </Column>
                  <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[122px] xl:mt-[139px] 2xl:mt-[157px] 3xl:mt-[188px] w-[6%]">
                    <div className="bg-blue_A701 lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] rounded-radius5 w-[67%]"></div>
                    <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      May
                    </Text>
                  </Column>
                  <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] 2xl:mt-[94px] w-[6%]">
                    <div className="bg-blue_A701 xl:h-[105px] 2xl:h-[119px] 3xl:h-[142px] lg:h-[92px] rounded-radius5 w-[67%]"></div>
                    <Text className="font-normal ml-[2px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Jun
                    </Text>
                  </Column>
                  <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[6%]">
                    <div className="bg-blue_A701 lg:h-[127px] xl:h-[146px] 2xl:h-[164px] 3xl:h-[196px] rounded-radius5 w-[67%]"></div>
                    <Text className="font-normal ml-[4px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Jul
                    </Text>
                  </Column>
                  <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] w-[6%]">
                    <div className="bg-blue_A701 2xl:h-[105px] 3xl:h-[125px] lg:h-[81px] xl:h-[93px] rounded-radius5 w-[67%]"></div>
                    <Text className="font-normal ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Aug
                    </Text>
                  </Column>
                  <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 3xl:mt-[109px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[91px] w-[6%]">
                    <div className="bg-blue_A701 xl:h-[108px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[95px] rounded-radius5 w-[67%]"></div>
                    <Text className="font-normal ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Sep
                    </Text>
                  </Column>
                  <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[6%]">
                    <div className="bg-blue_A701 lg:h-[120px] xl:h-[137px] 2xl:h-[155px] 3xl:h-[185px] rounded-radius5 w-[67%]"></div>
                    <Text className="font-normal ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                      Oct
                    </Text>
                  </Column>
                  <List
                    className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 min-h-[auto] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[12%]"
                    orientation="horizontal"
                  >
                    <Column className="items-center w-[100%]">
                      <div className="bg-blue_A701 lg:h-[135px] xl:h-[154px] 2xl:h-[174px] 3xl:h-[208px] rounded-radius5 w-[100%]"></div>
                      <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                        Nov
                      </Text>
                    </Column>
                    <Column className="items-center w-[100%]">
                      <div className="bg-blue_A701 lg:h-[135px] xl:h-[154px] 2xl:h-[174px] 3xl:h-[208px] rounded-radius5 w-[100%]"></div>
                      <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_900 w-[auto]">
                        Des
                      </Text>
                    </Column>
                  </List>
                </Row>
              </Column>
              <Column className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[26%]">
                <Row className="items-center justify-between pr-[1px] py-[1px] w-[100%]">
                  <Text className="font-semibold mb-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 w-[auto]">
                    Friend List
                  </Text>
                  <Img
                    src="images/img_morevertical.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] w-[1%]"
                    alt="morevertical One"
                  />
                </Row>
                <List
                  className="gap-[0] mb-[1px] min-h-[auto] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] 3xl:pr-[112px] lg:pr-[73px] xl:pr-[83px] 2xl:pr-[94px] w-[100%]">
                    <Img
                      src="images/img_jankoferlicg.png"
                      className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius3 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      alt="jankoferlicG"
                    />
                    <Column className="mb-[4px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[64%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_902 w-[auto]">
                        Benny Chagur
                      </Text>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_401 w-[auto]">
                        Member
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] 3xl:pr-[112px] lg:pr-[73px] xl:pr-[83px] 2xl:pr-[94px] w-[100%]">
                    <Img
                      src="images/img_studioportrait.png"
                      className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius3 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      alt="studioportrait"
                    />
                    <Column className="mb-[4px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[64%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_902 w-[auto]">
                        Chynita Heree
                      </Text>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_401 w-[auto]">
                        Member
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] 3xl:pr-[104px] lg:pr-[67px] xl:pr-[77px] 2xl:pr-[87px] w-[100%]">
                    <Img
                      src="images/img_youngbeardedm.png"
                      className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius3 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      alt="youngbeardedm"
                    />
                    <Column className="mb-[4px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[66%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_902 w-[auto]">
                        David Yers
                      </Text>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_401 w-[auto]">
                        Regular Customer
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] 2xl:pr-[100px] 3xl:pr-[120px] lg:pr-[77px] xl:pr-[88px] w-[100%]">
                    <Img
                      src="images/img_cheerfulindian.png"
                      className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius3 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      alt="cheerfulindian"
                    />
                    <Column className="mb-[4px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[63%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_902 w-[auto]">
                        Hayder Jahid
                      </Text>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_401 w-[auto]">
                        Member
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] 2xl:pr-[100px] 3xl:pr-[120px] lg:pr-[77px] xl:pr-[88px] w-[100%]">
                    <Img
                      src="images/img_cheerfulindian.png"
                      className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius3 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      alt="cheerfulindian One"
                    />
                    <Column className="mb-[4px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[63%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_902 w-[auto]">
                        Hayder Jahid
                      </Text>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_401 w-[auto]">
                        Member
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] 2xl:pr-[100px] 3xl:pr-[120px] lg:pr-[77px] xl:pr-[88px] w-[100%]">
                    <Img
                      src="images/img_cheerfulindian.png"
                      className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius3 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      alt="cheerfulindian Two"
                    />
                    <Column className="mb-[4px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[63%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_902 w-[auto]">
                        Hayder Jahid
                      </Text>
                      <Text className="font-normal mt-[1px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_401 w-[auto]">
                        Member
                      </Text>
                    </Column>
                  </Row>
                </List>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default FreeCreditsPage;
