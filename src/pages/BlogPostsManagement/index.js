import React from "react";

import {
  Column,
  Row,
  Img,
  Input,
  Stack,
  Text,
  Line,
  Switch,
  List,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const BlogPostsManagementPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_51 font-gilroy items-center mx-[auto] w-[100%]">
        <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
          <Img
            src="images/img_group_22.svg"
            className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] w-[12%]"
            alt="Group"
          />
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:ml-[101px] 3xl:ml-[121px] flex lg:ml-[78px] w-[29%] xl:ml-[89px]"
            name="InputField"
            placeholder="Search "
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
        <Row className="items-center justify-evenly w-[97%]">
          <aside className="w-[25%]">
            <Column className="">
              <Column className="bg-white_A700 justify-end lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[86%]">
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
                    <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
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
          <Column className="w-[75%]">
            <Row className="w-[100%]">
              <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 w-[auto]">
                Blog Posts Management
              </Text>
              <Text className="font-semibold lg:ml-[455px] xl:ml-[520px] 2xl:ml-[585px] 3xl:ml-[702px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 w-[auto]">
                Automated Publishing
              </Text>
              <Stack className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[5%]">
                <Switch value={true} className="absolute w-[100%]" />
                <Switch value={true} className="absolute w-[100%]" />
              </Stack>
            </Row>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]"
              orientation="horizontal"
            >
              <Row className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[100%]">
                <Column className="lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[41%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Blogs Uploaded
                  </Text>
                  <Text className="font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_902 w-[auto]">
                    87
                  </Text>
                </Column>
                <Img
                  src="images/img_chartsmicro.svg"
                  className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[53%]"
                  alt="Chartsmicro"
                />
              </Row>
              <Row className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[100%]">
                <Column className="lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] mt-[4px] w-[47%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Total Clicks
                  </Text>
                  <Text className="font-bold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_902 w-[auto]">
                    3.5k
                  </Text>
                </Column>
                <Img
                  src="images/img_chartsmicro.svg"
                  className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] w-[53%]"
                  alt="Chartsmicro One"
                />
              </Row>
              <Row className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[100%]">
                <Column className="lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[47%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Total Earnings
                  </Text>
                  <Text className="font-bold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_902 w-[auto]">
                    5,732
                  </Text>
                </Column>
                <Img
                  src="images/img_chartsmicro.svg"
                  className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] w-[53%]"
                  alt="Chartsmicro Two"
                />
              </Row>
            </List>
            <Img
              src="images/img_rectangle1388_347X1040.png"
              className="lg:h-[270px] xl:h-[309px] 2xl:h-[348px] 3xl:h-[417px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius6 w-[100%]"
              alt="Rectangle1388"
            />
            <Input
              className="font-medium p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-black_901 text-black_901 w-[100%]"
              wrapClassName="2xl:mt-[30px] 3xl:mt-[36px] lg:mt-[23px] w-[100%] xl:mt-[26px]"
              type="number"
              name="country"
              placeholder="Battlegrounds Mobile India iOS release date"
              shape="RoundedBorder8"
              size="lg"
              variant="OutlineBluegray300"
            ></Input>
            <Row className="bg-white_A700 border border-bluegray_300 border-solid items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius6 w-[100%]">
              <Column className="items-center lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] rounded-radius4 w-[13%]">
                <Row className="items-center justify-between rounded-radius4 w-[100%]">
                  <Button
                    className="flex lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    shape="icbRoundedBorder4"
                    size="smIcn"
                    variant="icbFillGray300"
                  >
                    <Img
                      src="images/img_mobile.svg"
                      className="flex items-center justify-center"
                      alt="mobile"
                    />
                  </Button>
                  <Img
                    src="images/img_map.svg"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[5%]"
                    alt="map"
                  />
                  <Img
                    src="images/img_refresh.svg"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[13%]"
                    alt="refresh"
                  />
                  <Img
                    src="images/img_iconstypeunde.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius4 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="IconsTypeunde"
                  />
                </Row>
              </Column>
              <Button
                className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:w-[21px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                shape="icbRoundedBorder4"
                size="mdIcn"
                variant="icbFillGray52"
              >
                <Img
                  src="images/img_link.svg"
                  className="flex items-center justify-center lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px]"
                  alt="link"
                />
              </Button>
              <Row className="bg-gray_52 items-center justify-end lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] p-[4px] rounded-radius4 w-[10%]">
                <Img
                  src="images/img_location.svg"
                  className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[16%]"
                  alt="location"
                />
                <Img
                  src="images/img_volume_11X18.svg"
                  className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[20%]"
                  alt="volume"
                />
                <Img
                  src="images/img_volume_12X18.svg"
                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[2px] w-[20%]"
                  alt="volume One"
                />
              </Row>
              <Row className="bg-gray_52 lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[10%]">
                <Img
                  src="images/img_menu_13X17.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] my-[1px] w-[19%]"
                  alt="menu"
                />
                <Img
                  src="images/img_send.svg"
                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[1px] w-[19%]"
                  alt="send"
                />
                <Img
                  src="images/img_vector_gray_500.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] my-[2px] w-[19%]"
                  alt="Vector One"
                />
              </Row>
            </Row>
            <Column className="bg-white_A700 border border-bluegray_300 border-solid pb-[1px] px-[1px] rounded-radius6 w-[100%]">
              <Line className="bg-bluegray_101 h-[1px] w-[29%]" />
              <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mr-[14px] xl:mr-[16px] 2xl:mr-[19px] 3xl:mr-[22px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[97%]">
                Krafton has been dropping hints about the BGMI iOS version for a
                few days. In the social media post that announced special
                rewards on 50 million downloads dated August 5, 2021, the
                caption clearly stated "We are preparing for all Indian players
                to receive rewards regardless of their OS [apple emoji]."
                Additionally, Krafton also shared a reveal poster that has the
                Apple mascot in it. While speculations about Battlegrounds
                Mobile India release date have been made in the past, Krafton
                might have revealed the date accidentally.
              </Text>
              <Img
                src="images/img_basetextarea.svg"
                className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] 2xl:ml-[1029px] 3xl:ml-[1235px] lg:ml-[800px] xl:ml-[915px] my-[1px] lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"
                alt="baseTextarea"
              />
            </Column>
            <Button
              className="font-medium lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[48%]"
              shape="RoundedBorder6"
            >
              Save Changes
            </Button>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default BlogPostsManagementPage;
