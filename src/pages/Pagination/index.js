import React from "react";

import {
  Column,
  Row,
  Img,
  Input,
  Stack,
  Text,
  Line,
  Grid,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const PaginationPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_51 font-gilroy mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_group_38.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] w-[12%]"
              alt="Group"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:ml-[101px] 3xl:ml-[121px] flex lg:ml-[78px] w-[29%] xl:ml-[89px]"
              name="InputField"
              placeholder="Search"
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
        <Row className="w-[88%]">
          <aside className="w-[26%]">
            <Column className="">
              <Column className="bg-white_A700 justify-end lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[90%]">
                <Column className="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[45%]">
                  <Row className="items-center ml-[3px] w-[97%]">
                    <Img
                      src="images/img_settings.svg"
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      alt="settings"
                    />
                    <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Dashboard
                    </Text>
                  </Row>
                  <Row className="lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[62%]">
                    <Img
                      src="images/img_user.svg"
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[30%]"
                      alt="user"
                    />
                    <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Users
                    </Text>
                  </Row>
                  <Row className="ml-[1px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[98%]">
                    <Img
                      src="images/img_minimize.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="minimize"
                    />
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Categories
                    </Text>
                  </Row>
                  <Row className="ml-[1px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[62%]">
                    <Img
                      src="images/img_vector_bluegray_700.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="Vector"
                    />
                    <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Items
                    </Text>
                  </Row>
                  <Row className="ml-[3px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[68%]">
                    <Img
                      src="images/img_bag.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[21%]"
                      alt="bag"
                    />
                    <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Orders
                    </Text>
                  </Row>
                </Column>
                <Row className="ml-[2px] mr-[auto] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] py-[1px] w-[29%]">
                  <Line className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]" />
                  <Img
                    src="images/img_clock.svg"
                    className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                    alt="clock"
                  />
                  <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A700 w-[auto]">
                    Blog
                  </Text>
                </Row>
                <Column className="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[48%]">
                  <Row className="ml-[2px] w-[98%]">
                    <Img
                      src="images/img_notification.svg"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] w-[13%]"
                      alt="notification One"
                    />
                    <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Notifications
                    </Text>
                  </Row>
                  <Row className="lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[73%]">
                    <Img
                      src="images/img_settings_20X19.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[21%]"
                      alt="settings One"
                    />
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                      Settings
                    </Text>
                  </Row>
                  <Row className="font-opensans ml-[1px] lg:mt-[320px] xl:mt-[366px] 2xl:mt-[412px] 3xl:mt-[494px] w-[53%]">
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
          <Column className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[74%]">
            <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 w-[auto]">
              Blogs
            </Text>
            <Grid className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-2 lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
              <Row className="bg-white_A700 items-end lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
                <Column className="lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                  <Text className="font-semibold lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[92%]">
                    Battlegrounds Mobile India iOS release date
                  </Text>
                  <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400_90 w-[90%]">
                    Krafton has been dropping hints about <br />
                    the BGMI iOS version for a few days.{" "}
                  </Text>
                </Column>
                <Img
                  src="images/img_rectangle19.png"
                  className="2xl:h-[102px] 3xl:h-[122px] lg:h-[79px] xl:h-[90px] lg:mb-[21px] xl:mb-[24px] 2xl:mb-[28px] 3xl:mb-[33px] rounded-radius4 w-[30%]"
                  alt="RectangleNineteen"
                />
              </Row>
              <Row className="bg-white_A700 items-end lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
                <Column className="lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                  <Text className="font-semibold lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[92%]">
                    Battlegrounds Mobile India iOS release date
                  </Text>
                  <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400_90 w-[90%]">
                    Krafton has been dropping hints about <br />
                    the BGMI iOS version for a few days.{" "}
                  </Text>
                </Column>
                <Img
                  src="images/img_rectangle19.png"
                  className="2xl:h-[102px] 3xl:h-[122px] lg:h-[79px] xl:h-[90px] lg:mb-[21px] xl:mb-[24px] 2xl:mb-[28px] 3xl:mb-[33px] rounded-radius4 w-[30%]"
                  alt="RectangleNineteen One"
                />
              </Row>
              <Row className="bg-white_A700 items-end lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
                <Column className="lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                  <Text className="font-semibold lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[92%]">
                    Battlegrounds Mobile India iOS release date
                  </Text>
                  <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400_90 w-[90%]">
                    Krafton has been dropping hints about <br />
                    the BGMI iOS version for a few days.{" "}
                  </Text>
                </Column>
                <Img
                  src="images/img_rectangle19.png"
                  className="2xl:h-[102px] 3xl:h-[122px] lg:h-[79px] xl:h-[90px] lg:mb-[21px] xl:mb-[24px] 2xl:mb-[28px] 3xl:mb-[33px] rounded-radius4 w-[30%]"
                  alt="RectangleNineteen Two"
                />
              </Row>
              <Row className="bg-white_A700 items-end lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
                <Column className="lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                  <Text className="font-semibold lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[92%]">
                    Battlegrounds Mobile India iOS release date
                  </Text>
                  <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400_90 w-[90%]">
                    Krafton has been dropping hints about <br />
                    the BGMI iOS version for a few days.{" "}
                  </Text>
                </Column>
                <Img
                  src="images/img_rectangle19.png"
                  className="2xl:h-[102px] 3xl:h-[122px] lg:h-[79px] xl:h-[90px] lg:mb-[21px] xl:mb-[24px] 2xl:mb-[28px] 3xl:mb-[33px] rounded-radius4 w-[30%]"
                  alt="RectangleNineteen Three"
                />
              </Row>
              <Row className="bg-white_A700 items-end lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
                <Column className="lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                  <Text className="font-semibold lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[92%]">
                    Battlegrounds Mobile India iOS release date
                  </Text>
                  <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400_90 w-[90%]">
                    Krafton has been dropping hints about <br />
                    the BGMI iOS version for a few days.{" "}
                  </Text>
                </Column>
                <Img
                  src="images/img_rectangle19.png"
                  className="2xl:h-[102px] 3xl:h-[122px] lg:h-[79px] xl:h-[90px] lg:mb-[21px] xl:mb-[24px] 2xl:mb-[28px] 3xl:mb-[33px] rounded-radius4 w-[30%]"
                  alt="RectangleNineteen Four"
                />
              </Row>
              <Row className="bg-white_A700 items-end lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
                <Column className="lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                  <Text className="font-semibold lg:leading-[22px] xl:leading-[25px] 2xl:leading-[29px] 3xl:leading-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[92%]">
                    Battlegrounds Mobile India iOS release date
                  </Text>
                  <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400_90 w-[90%]">
                    Krafton has been dropping hints about <br />
                    the BGMI iOS version for a few days.{" "}
                  </Text>
                </Column>
                <Img
                  src="images/img_rectangle19.png"
                  className="2xl:h-[102px] 3xl:h-[122px] lg:h-[79px] xl:h-[90px] lg:mb-[21px] xl:mb-[24px] 2xl:mb-[28px] 3xl:mb-[33px] rounded-radius4 w-[30%]"
                  alt="RectangleNineteen Five"
                />
              </Row>
            </Grid>
            <Row className="items-center justify-end ml-[auto] 3xl:mt-[104px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[87px] w-[29%]">
              <Button
                className="flex lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                shape="icbRoundedBorder4"
                size="lgIcn"
                variant="icbFillBluegray30087"
              >
                <Img
                  src="images/img_arrowleft.svg"
                  className="flex items-center justify-center"
                  alt="arrowleft"
                />
              </Button>
              <Button
                className="font-bold font-gilroy lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                shape="RoundedBorder6"
                size="md"
                variant="OutlineBlueA7001_2"
              >
                1
              </Button>
              <Button
                className="font-bold font-gilroy lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                shape="RoundedBorder6"
                size="md"
                variant="OutlineBluegray100"
              >
                2
              </Button>
              <Button
                className="font-bold font-sfprotext lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                shape="RoundedBorder6"
                size="md"
                variant="OutlineBluegray100"
              >
                ...
              </Button>
              <Button
                className="font-bold font-gilroy lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                shape="RoundedBorder6"
                size="md"
                variant="OutlineBluegray100"
              >
                9
              </Button>
              <Button
                className="font-bold font-gilroy lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                shape="RoundedBorder6"
                size="md"
                variant="OutlineBluegray100"
              >
                10
              </Button>
              <Button
                className="flex lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                shape="icbRoundedBorder4"
                size="lgIcn"
                variant="icbOutlineBluegray100"
              >
                <Img
                  src="images/img_arrowleft_bluegray_400.svg"
                  className="flex items-center justify-center"
                  alt="arrowleft One"
                />
              </Button>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default PaginationPage;
