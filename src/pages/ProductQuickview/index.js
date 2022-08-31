import React from "react";

import { Column, Row, Img, Input, Text, Button, SelectBox } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ProductQuickviewPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-end mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs1 w-[100%]">
            <Img
              src="images/img_group_8.svg"
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
        <Row className="lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] pb-[4px] pr-[4px] w-[88%]">
          <Column className="w-[51%]">
            <Row className="w-[96%]">
              <Column className="items-center w-[16%]">
                <Img
                  src="images/img_rectangle1213.png"
                  className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] rounded-radius6 3xl:w-[115px] lg:w-[74px] xl:w-[85px] 2xl:w-[96px]"
                  alt="Rectangle1213"
                />
                <Img
                  src="images/img_rectangle1214.png"
                  className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-radius6 3xl:w-[115px] lg:w-[74px] xl:w-[85px] 2xl:w-[96px]"
                  alt="Rectangle1214"
                />
                <Img
                  src="images/img_rectangle1215.png"
                  className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-radius6 3xl:w-[115px] lg:w-[74px] xl:w-[85px] 2xl:w-[96px]"
                  alt="Rectangle1215"
                />
                <Img
                  src="images/img_rectangle1216.png"
                  className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-radius6 3xl:w-[115px] lg:w-[74px] xl:w-[85px] 2xl:w-[96px]"
                  alt="Rectangle1216"
                />
                <Img
                  src="images/img_rectangle1217.png"
                  className="3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-radius6 3xl:w-[115px] lg:w-[74px] xl:w-[85px] 2xl:w-[96px]"
                  alt="Rectangle1217"
                />
              </Column>
              <Img
                src="images/img_rectangle163.png"
                className="lg:h-[399px] xl:h-[456px] 2xl:h-[513px] 3xl:h-[615px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] rounded-radius4 lg:w-[398px] xl:w-[455px] 2xl:w-[512px] 3xl:w-[614px]"
                alt="Rectangle163"
              />
            </Row>
            <Row className="items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[96%]">
              <Button
                className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[49%]"
                shape="RoundedBorder6"
                variant="OutlineBlueA700"
              >
                Add to Cart
              </Button>
              <Button
                className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[49%]"
                shape="RoundedBorder6"
              >
                Buy Now
              </Button>
            </Row>
          </Column>
          <Column className="3xl:mb-[111px] lg:mb-[72px] xl:mb-[82px] 2xl:mb-[93px] mt-[4px] w-[49%]">
            <Text className="font-gilroy font-medium lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[84%]">
              OnePlus 10R 5G (Sierra Black, 12GB RAM, 256GB Storage, 150W
              SuperVOOC)
            </Text>
            <Row className="font-gilroy justify-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pl-[1px] pt-[1px] w-[100%]">
              <Img
                src="images/img_vector_19X20.svg"
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] mt-[1px] w-[3%]"
                alt="Vector"
              />
              <Text className="font-medium 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[auto]">
                4.3/5
              </Text>
              <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                (112 Ratings l 94 Reviews)
              </Text>
              <Img
                src="images/img_share.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[3px] lg:ml-[241px] xl:ml-[275px] 2xl:ml-[310px] 3xl:ml-[372px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                alt="share"
              />
            </Row>
            <Text className="font-hairline font-urbanist italic lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
              <span className="text-colors5 font-gilroy font-semibold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px]">
                $499
              </span>
              <span className="text-colors5 font-gilroy"> </span>
              <span className="text-colors3 font-gilroy font-semibold line-through lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                $599
              </span>
            </Text>
            <SelectBox
              className="font-gilroy font-medium lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 w-[13%]"
              placeholderClassName="text-black_901"
              name="Group9970"
              placeholder="Shades"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_black_901.svg"
                  className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                  alt="arrow_down"
                />
              }
            ></SelectBox>
            <Img
              src="images/img_group9981.svg"
              className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[28%]"
              alt="Group9981"
            />
            <Row className="font-gilroy items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[68%]">
              <Column className="items-center lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[26%]">
                <Button
                  className="flex 3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] items-center justify-center 3xl:w-[104px] lg:w-[67px] xl:w-[77px] 2xl:w-[87px]"
                  shape="icbRoundedBorder12"
                  size="xlIcn"
                  variant="icbOutlineBluegray102"
                >
                  <Img
                    src="images/img_checkmark.svg"
                    className="flex items-center justify-center lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px]"
                    alt="checkmark"
                  />
                </Button>
                <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_800 w-[59%]">
                  100% <br />
                  Authentic
                </Text>
              </Column>
              <Column className="items-center lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[26%]">
                <Button
                  className="flex 3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] items-center justify-center 3xl:w-[104px] lg:w-[67px] xl:w-[77px] 2xl:w-[87px]"
                  shape="icbRoundedBorder12"
                  size="2xlIcn"
                  variant="icbOutlineBluegray102"
                >
                  <Img
                    src="images/img_reply.svg"
                    className="flex items-center justify-center lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px]"
                    alt="reply"
                  />
                </Button>
                <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_800 w-[46%]">
                  15 days
                  <br />
                  Returns
                </Text>
              </Column>
              <Column className="items-center lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[26%]">
                <Button
                  className="flex 3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] items-center justify-center 3xl:w-[104px] lg:w-[67px] xl:w-[77px] 2xl:w-[87px]"
                  shape="icbRoundedBorder12"
                  size="3xlIcn"
                  variant="icbOutlineBluegray102"
                >
                  <Img
                    src="images/img_vector_87X87.svg"
                    className="flex items-center justify-center"
                    alt="Vector One"
                  />
                </Button>
                <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_800 w-[57%]">
                  COD
                  <br />
                  Available
                </Text>
              </Column>
              <Column className="items-center pb-[3px] w-[21%]">
                <Button
                  className="flex 3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] items-center justify-center w-[100%]"
                  shape="icbRoundedBorder12"
                  size="2xlIcn"
                  variant="icbOutlineBluegray102"
                >
                  <Img
                    src="images/img_car.svg"
                    className="flex items-center justify-center"
                    alt="car"
                  />
                </Button>
                <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_800 w-[60%]">
                  Free
                  <br />
                  Delivery
                </Text>
              </Column>
            </Row>
            <Text className="font-gilroy font-medium lg:leading-[21px] xl:leading-[24px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[100%]">
              <span className="text-colors6 font-bold">About this item</span>
              <span className="text-colors6">
                <br />
                <br />
              </span>
              <span className="text-colors3">
                Camera: 50MP Main Camera with Sony IMX766 and 2MP Macro Camera
                with Dual LED Flash; 16MP Front (Selfie) Camera with Sony IMX471
                <br />
                <br />
                Camera Features: Nightscape2.0, Super Macro, UltraShot HDR,
                Smart Scene Recognition, Portrait mode, Pro mode, Panorama,
                Tilt-shift mode, Focus Peaking, Filters, Video Nightscape, Video
                HDR, Video Portrait Timelapse, Hyperlapse Mode
                <br />
                <br />
                Display: 6.7 Inches; 120 Hz IRIS Display; Resolution: 2400 X
                1080 pixels 394 ppi; Aspect Ratio: 20:9
                <br />
                <br />
                Display Features: Hyper Touch Mode, Reading Mode, Night Mode,
                Eye Comfort Mode, Auto brightness
                <br />
                <br />
                Operating System: OxygenOS based on Android 12
                <br />
                <br />
                Processor: MTK D8100 Max
                <br />
                <br />
                Battery & Charging: 5000 mAh with 80W SuperVOOC
                <br />
                <br />
                In-Display Fingerprint Sensor
                <br />
                <br />
                Special Features: Hyperboost gaming engine
                <br />
                <br />
                Alexa Hands-Free capable: Download the Alexa app to use Alexa
                hands-free. Play music, make calls, hear news, open apps,
                navigate, and more, all using just your voice, while on-the-go.
                <br />
                <br />
                Show Less
              </span>
            </Text>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ProductQuickviewPage;
