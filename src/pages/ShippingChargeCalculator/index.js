import React from "react";

import { Column, Row, Img, Input, Text, Button, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ShippingChargeCalculatorPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] lg:pb-[56px] xl:pb-[64px] 2xl:pb-[73px] 3xl:pb-[87px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs1 w-[100%]">
            <Img
              src="images/img_group_5.svg"
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
          <Column className="bg-white_A700 lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 shadow-bs w-[67%]">
            <Row className="items-center lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[77%]">
              <Img
                src="images/img_pngwing1.png"
                className="lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] rounded-radius4 lg:w-[150px] xl:w-[172px] 2xl:w-[194px] 3xl:w-[232px]"
                alt="pngwingOne"
              />
              <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[65%]">
                <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                  Samsung Galaxy M12
                </Text>
                <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_400 w-[auto]">
                  (Blue,6GB RAM, 128GB Storage)
                </Text>
                <Row className="items-center lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[23%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
                    Color:
                  </Text>
                  <Text className="font-medium ml-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                    Blue
                  </Text>
                </Row>
                <Row className="font-opensans items-end lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[37%]">
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
                <Row className="font-gilroy items-center justify-evenly xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                  <Button
                    className="flex lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                    shape="icbRoundedBorder4"
                    size="lgIcn"
                    variant="icbOutlineBluegray1001_2"
                  >
                    <Img
                      src="images/img_frame49.svg"
                      className="flex items-center justify-center"
                      alt="FrameFortyNine"
                    />
                  </Button>
                  <Button
                    className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[16%]"
                    shape="RoundedBorder6"
                    size="md"
                    variant="OutlineBluegray400"
                  >
                    1
                  </Button>
                  <Button
                    className="flex lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                    shape="icbRoundedBorder4"
                    size="lgIcn"
                    variant="icbOutlineBluegray1001_2"
                  >
                    <Img
                      src="images/img_plus_36X36.svg"
                      className="flex items-center justify-center lg:h-[8px] xl:h-[9px] 2xl:h-[11px] 3xl:h-[13px]"
                      alt="plus"
                    />
                  </Button>
                  <Line className="bg-bluegray_100 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[1px]" />
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
                    Save For Later
                  </Text>
                  <Line className="bg-bluegray_100 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[1px]" />
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_700 w-[auto]">
                    Remove
                  </Text>
                </Row>
              </Column>
            </Row>
            <Text className="font-medium lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
              Shipping Charges
            </Text>
            <Text className="font-medium lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Pick-up Area Pin Code
            </Text>
            <Input
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
              wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[65%] xl:mt-[5px]"
              name="zipcode"
              placeholder="333333"
              shape="RoundedBorder8"
              variant="OutlineBluegray100"
            ></Input>
            <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Delivery Area Pin Code
            </Text>
            <Input
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
              wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[65%] xl:mt-[5px]"
              name="zipcode One"
              placeholder="333333"
              shape="RoundedBorder8"
              variant="OutlineBluegray100"
            ></Input>
            <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Weight
            </Text>
            <Input
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_801 text-bluegray_801 w-[100%]"
              wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[65%] xl:mt-[5px]"
              name="weight"
              placeholder="0.5 KG"
              shape="RoundedBorder8"
              variant="OutlineBluegray100"
            ></Input>
            <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Cash On Delivery and Name Pay Balance Applicable
            </Text>
            <Input
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_801 text-bluegray_801 w-[100%]"
              wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[65%] xl:mt-[5px]"
              name="InputField One"
              placeholder="Not Applicable"
              shape="RoundedBorder8"
              variant="OutlineBluegray100"
            ></Input>
            <Text className="font-semibold lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Charge
            </Text>
            <Row className="items-center 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[40%]">
              <Text className="font-bold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
                $199
              </Text>
              <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                ( Includes : Import free deposit )
              </Text>
            </Row>
          </Column>
          <Column className="bg-white_A700 justify-end lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 shadow-bs w-[31%]">
            <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
              Price Details
            </Text>
            <Line className="bg-bluegray_100 h-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[91%]" />
            <Row className="items-center justify-between lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[91%]">
              <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                Price(2 iteam)
              </Text>
              <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
                $1110.58
              </Text>
            </Row>
            <Row className="items-center justify-between lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[91%]">
              <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                Discount
              </Text>
              <Text className="font-medium mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-green_600 w-[auto]">
                -$111.98
              </Text>
            </Row>
            <Row className="justify-between lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[91%]">
              <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                Delivery Charges
              </Text>
              <Text className="font-medium mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
                $199
              </Text>
            </Row>
            <Line className="bg-bluegray_100 h-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[91%]" />
            <Row className="justify-between lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[91%]">
              <Text className="font-medium mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                Total Amount
              </Text>
              <Text className="font-medium mb-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                $1120.58
              </Text>
            </Row>
            <Button
              className="font-semibold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[91%]"
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

export default ShippingChargeCalculatorPage;
