import React from "react";

import { Column, Row, Img, Input, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const AuctionBIddingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:pb-[44px] xl:pb-[50px] 2xl:pb-[57px] 3xl:pb-[68px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs1 w-[100%]">
            <Img
              src="images/img_group_35X162.svg"
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
        <Row className="items-center lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[88%]">
          <Column className="bg-white_A700 lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius8 shadow-bs w-[62%]">
            <Img
              src="images/img_rectangle1380.png"
              className="lg:h-[402px] xl:h-[460px] 2xl:h-[517px] 3xl:h-[620px] rounded-radius10 w-[100%]"
              alt="Rectangle1380"
            />
            <Row className="lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pb-[4px] w-[100%]">
              <Column className="lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[82%]">
                <Text className="font-semibold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-black_900 w-[auto]">
                  Secluded intown Treehouse
                </Text>
                <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                </Text>
              </Column>
              <Button
                className="flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                size="3xlIcn"
                variant="icbOutlineBlueA700"
              >
                <Img
                  src="images/img_arrowleft.svg"
                  className="flex items-center justify-center lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                  alt="arrowleft"
                />
              </Button>
              <Button
                className="flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                size="3xlIcn"
                variant="icbOutlineBlack9000c"
              >
                <Img
                  src="images/img_arrowright.svg"
                  className="flex items-center justify-center lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                  alt="arrowright"
                />
              </Button>
            </Row>
            <Text className="font-semibold lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              Review
            </Text>
            <Row className="items-end lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[25%]">
              <Img
                src="images/img_profileimglarg.png"
                className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                alt="ProfileImgLarg"
              />
              <Column className="items-center mb-[3px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] pb-[2px] w-[65%]">
                <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_901 w-[auto]">
                  Leslie Alexander
                </Text>
                <Row className="items-center justify-between 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[94%]">
                  <Img
                    src="images/img_star.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[14%]"
                    alt="Star"
                  />
                  <Img
                    src="images/img_star.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[14%]"
                    alt="Star One"
                  />
                  <Img
                    src="images/img_star.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[14%]"
                    alt="Star Two"
                  />
                  <Img
                    src="images/img_star.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[14%]"
                    alt="Star Three"
                  />
                  <Img
                    src="images/img_star_15X16.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[14%]"
                    alt="Star Four"
                  />
                </Row>
              </Column>
            </Row>
            <Text className="font-medium lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] mb-[4px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[97%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              congue purus sodales tincidunt. Egestas nunc habitant facilisi
              porttitor felis sit cras nulla in.
            </Text>
          </Column>
          <Column className="bg-white_A700 lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius8 shadow-bs w-[35%]">
            <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
              Place Your Bid
            </Text>
            <Row className="lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[100%]">
              <Column className="w-[73%]">
                <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  Ends In
                </Text>
                <Row className="items-center lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[62%]">
                  <Button
                    className="font-bold lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="FillBlue50"
                  >
                    00
                  </Button>
                  <Img
                    src="images/img_group24.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[2%]"
                    alt="GroupTwentyFour"
                  />
                  <Button
                    className="font-bold lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="FillBlue50"
                  >
                    00
                  </Button>
                  <Img
                    src="images/img_group24.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[2%]"
                    alt="Group9828"
                  />
                  <Button
                    className="font-bold lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="FillBlue50"
                  >
                    00
                  </Button>
                </Row>
              </Column>
              <Column className="items-center mt-[1px] w-[27%]">
                <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  Highest Bid
                </Text>
                <Text className="font-bold lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-blue_A700 w-[auto]">
                  $20,000
                </Text>
              </Column>
            </Row>
            <Row className="items-end justify-between lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]">
              <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                Bids History
              </Text>
              <Text className="font-medium mb-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                See All
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
              orientation="vertical"
            >
              <Row className="bg-gray_50 border border-bluegray_100 border-solid items-center lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius6 w-[100%]">
                <Img
                  src="images/img_rectangle755.png"
                  className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] rounded-radius3 lg:w-[42px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                  alt="Rectangle755"
                />
                <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  Ralph Edwards
                </Text>
                <Text className="font-bold 2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_A700 w-[auto]">
                  $20,000
                </Text>
              </Row>
              <Row className="bg-gray_50 border border-bluegray_100 border-solid items-center lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius6 w-[100%]">
                <Img
                  src="images/img_rectangle755.png"
                  className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] rounded-radius3 lg:w-[42px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                  alt="Rectangle755 One"
                />
                <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  Ralph Edwards
                </Text>
                <Text className="font-bold 2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_A700 w-[auto]">
                  $20,000
                </Text>
              </Row>
              <Row className="bg-gray_50 border border-bluegray_100 border-solid items-center lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius6 w-[100%]">
                <Img
                  src="images/img_rectangle755.png"
                  className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] rounded-radius3 lg:w-[42px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                  alt="Rectangle755 Two"
                />
                <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  Ralph Edwards
                </Text>
                <Text className="font-bold 2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_A700 w-[auto]">
                  $20,000
                </Text>
              </Row>
            </List>
            <Text className="font-medium lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
              Your Bid Amount
            </Text>
            <Input
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
              name="InputField One"
              placeholder="Enter amount"
              shape="RoundedBorder8"
              variant="OutlineBluegray100"
            ></Input>
            <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
              Your Proposal
            </Text>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-end lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius8 w-[100%]">
              <Text className="font-medium ml-[1px] lg:mr-[197px] xl:mr-[225px] 2xl:mr-[254px] 3xl:mr-[304px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_200 w-[auto]">
                Placeholder text
              </Text>
              <Img
                src="images/img_edit.svg"
                className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[280px] xl:ml-[320px] 2xl:ml-[360px] 3xl:ml-[432px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                alt="edit"
              />
            </Column>
            <Button
              className="font-medium mb-[2px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
              shape="RoundedBorder6"
            >
              Place Your Bid
            </Button>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AuctionBIddingPage;
