import React from "react";

import { Column, Row, Img, Input, Text, List, Line, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const StoreCreditsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:pb-[228px] xl:pb-[261px] 2xl:pb-[294px] 3xl:pb-[353px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs1 w-[100%]">
            <Img
              src="images/img_group_15.svg"
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
        <Row className="lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[88%]">
          <Column className="bg-white_A700 lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius8 shadow-bs w-[67%]">
            <Input
              className="font-medium p-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-black_901 text-black_901 w-[100%]"
              wrapClassName="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[97%] xl:ml-[9px]"
              name="Group327"
              placeholder="Order Summary"
              size="4xl"
              variant="UnderLineBluegray100"
            ></Input>
            <List
              className="gap-[0] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] min-h-[auto] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[75%]"
              orientation="vertical"
            >
              <Row className="lg:my-[24px] xl:my-[28px] 2xl:my-[32px] 3xl:my-[38px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[100%]">
                <Img
                  src="images/img_pngwing1.png"
                  className="lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] my-[1px] rounded-radius4 lg:w-[150px] xl:w-[172px] 2xl:w-[194px] 3xl:w-[232px]"
                  alt="pngwingOne"
                />
                <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[48%]">
                  <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                    Samsung Galaxy M12
                  </Text>
                  <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_400 w-[auto]">
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <Row className="items-center lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[31%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
                      Color:
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                      Blue
                    </Text>
                  </Row>
                  <Row className="font-opensans items-end lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[51%]">
                    <Text className="font-medium mb-[3px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                      <span className="text-colors1 font-gilroy font-semibold">
                        $
                      </span>
                      <span className="text-colors5 font-gilroy font-semibold">
                        555.29
                      </span>
                    </Text>
                    <Text className="font-medium line-through lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      <span className="text-colors3 font-gilroy font-semibold">
                        $
                      </span>
                      <span className="text-colors3 font-gilroy font-semibold">
                        55.99
                      </span>
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="lg:my-[24px] xl:my-[28px] 2xl:my-[32px] 3xl:my-[38px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[100%]">
                <Img
                  src="images/img_pngwing1.png"
                  className="lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] my-[1px] rounded-radius4 lg:w-[150px] xl:w-[172px] 2xl:w-[194px] 3xl:w-[232px]"
                  alt="pngwingOne One"
                />
                <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[48%]">
                  <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                    Samsung Galaxy M12
                  </Text>
                  <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_400 w-[auto]">
                    (Blue,6GB RAM, 128GB Storage)
                  </Text>
                  <Row className="items-center lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[31%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
                      Color:
                    </Text>
                    <Text className="font-medium ml-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                      Blue
                    </Text>
                  </Row>
                  <Row className="font-opensans items-end lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[51%]">
                    <Text className="font-medium mb-[3px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                      <span className="text-colors1 font-gilroy font-semibold">
                        $
                      </span>
                      <span className="text-colors5 font-gilroy font-semibold">
                        555.29
                      </span>
                    </Text>
                    <Text className="font-medium line-through lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                      <span className="text-colors3 font-gilroy font-semibold">
                        $
                      </span>
                      <span className="text-colors3 font-gilroy font-semibold">
                        55.99
                      </span>
                    </Text>
                  </Row>
                </Column>
              </Row>
            </List>
          </Column>
          <Column className="bg-white_A700 items-center justify-end lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 shadow-bs w-[31%]">
            <Input
              className="font-medium p-[0] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] placeholder:text-black_901 text-black_901 w-[100%]"
              wrapClassName="mt-[1px] w-[91%]"
              name="Group329"
              placeholder="Price Details"
              size="3xl"
              variant="UnderLineBluegray100"
            ></Input>
            <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[91%]">
              <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                Price(2 iteam)
              </Text>
              <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
                $1110.58
              </Text>
            </Row>
            <Row className="items-center justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
              <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_600 w-[auto]">
                Store Credits
              </Text>
              <Text className="font-medium mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_600 w-[auto]">
                -$111.98
              </Text>
            </Row>
            <Row className="justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[91%]">
              <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                Delivery Charges
              </Text>
              <Text className="font-medium mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
                $10
              </Text>
            </Row>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[91%]" />
            <Row className="justify-between lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[91%]">
              <Text className="font-medium mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                Total Amount
              </Text>
              <Text className="font-medium mb-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                $1120.58
              </Text>
            </Row>
            <Button
              className="font-semibold lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[91%]"
              shape="RoundedBorder6"
            >
              Place Order
            </Button>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default StoreCreditsPage;
