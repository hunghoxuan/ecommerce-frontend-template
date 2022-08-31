import React from "react";

import {
  Column,
  Row,
  Img,
  Input,
  Text,
  SelectBox,
  List,
  Line,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const FavouritesPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center justify-end mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs1 w-[100%]">
            <Img
              src="images/img_group.svg"
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
        <Column className="bg-white_A700 items-center justify-end lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 shadow-bs1 w-[78%]">
          <Row className="items-center justify-between lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] w-[99%]">
            <Text className="font-semibold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
              Favourites
            </Text>
            <SelectBox
              className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[10%]"
              placeholderClassName="text-bluegray_900"
              name="Frame9870"
              placeholder="Filter & Sort"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_bluegray_900.svg"
                  className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                  alt="arrow_down"
                />
              }
            ></SelectBox>
          </Row>
          <List
            className="font-opensans gap-[0] min-h-[auto] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[99%]"
            orientation="vertical"
          >
            <Row className="items-center justify-between lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] w-[100%]">
              <Img
                src="images/img_pngwing1.png"
                className="lg:h-[140px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] rounded-radius4 lg:w-[140px] xl:w-[160px] 2xl:w-[180px] 3xl:w-[216px]"
                alt="pngwingOne"
              />
              <Column className="py-[2px] w-[82%]">
                <Row className="justify-between mt-[2px] w-[100%]">
                  <Text className="font-medium mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                    Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                  </Text>
                  <Img
                    src="images/img_trash.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[2%]"
                    alt="trash"
                  />
                </Row>
                <Text className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_400 w-[auto]">
                  (Blue,6GB RAM, 128GB Storage)
                </Text>
                <Row className="items-end justify-evenly lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                  <Column className="font-opensans w-[81%]">
                    <Row className="items-center w-[13%]">
                      <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                        Color:
                      </Text>
                      <Text className="font-medium mb-[1px] ml-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                        Blue
                      </Text>
                    </Row>
                    <Row className="items-end lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[22%]">
                      <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                        <span className="text-colors1 font-opensans font-semibold">
                          $
                        </span>
                        <span className="text-colors2 font-opensans font-semibold">
                          555.29
                        </span>
                      </Text>
                      <Text className="font-medium line-through mb-[1px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                        <span className="text-colors3 font-opensans font-semibold">
                          $
                        </span>
                        <span className="text-colors3 font-opensans font-semibold">
                          55.99
                        </span>
                      </Text>
                    </Row>
                  </Column>
                  <Button
                    className="font-gilroy font-semibold mb-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                    shape="RoundedBorder6"
                  >
                    Move to cart
                  </Button>
                </Row>
              </Column>
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
            <Row className="items-center justify-between lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] w-[100%]">
              <Img
                src="images/img_pngwing1.png"
                className="lg:h-[140px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] rounded-radius4 lg:w-[140px] xl:w-[160px] 2xl:w-[180px] 3xl:w-[216px]"
                alt="pngwingOne One"
              />
              <Column className="py-[2px] w-[82%]">
                <Row className="justify-between mt-[2px] w-[100%]">
                  <Text className="font-medium mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                    Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                  </Text>
                  <Img
                    src="images/img_trash.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[2%]"
                    alt="trash One"
                  />
                </Row>
                <Text className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_400 w-[auto]">
                  (Blue,6GB RAM, 128GB Storage)
                </Text>
                <Row className="items-end justify-evenly lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                  <Column className="font-opensans w-[81%]">
                    <Row className="items-center w-[13%]">
                      <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                        Color:
                      </Text>
                      <Text className="font-medium mb-[1px] ml-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                        Blue
                      </Text>
                    </Row>
                    <Row className="items-end lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[22%]">
                      <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                        <span className="text-colors1 font-opensans font-semibold">
                          $
                        </span>
                        <span className="text-colors2 font-opensans font-semibold">
                          555.29
                        </span>
                      </Text>
                      <Text className="font-medium line-through mb-[1px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                        <span className="text-colors3 font-opensans font-semibold">
                          $
                        </span>
                        <span className="text-colors3 font-opensans font-semibold">
                          55.99
                        </span>
                      </Text>
                    </Row>
                  </Column>
                  <Button
                    className="font-gilroy font-semibold mb-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                    shape="RoundedBorder6"
                  >
                    Move to cart
                  </Button>
                </Row>
              </Column>
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
            <Row className="items-center justify-between lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] w-[100%]">
              <Img
                src="images/img_pngwing1.png"
                className="lg:h-[140px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] rounded-radius4 lg:w-[140px] xl:w-[160px] 2xl:w-[180px] 3xl:w-[216px]"
                alt="pngwingOne Two"
              />
              <Column className="py-[2px] w-[82%]">
                <Row className="justify-between mt-[2px] w-[100%]">
                  <Text className="font-medium mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                    Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                  </Text>
                  <Img
                    src="images/img_trash.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[2%]"
                    alt="trash Two"
                  />
                </Row>
                <Text className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_400 w-[auto]">
                  (Blue,6GB RAM, 128GB Storage)
                </Text>
                <Row className="items-end justify-evenly lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                  <Column className="font-opensans w-[81%]">
                    <Row className="items-center w-[13%]">
                      <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                        Color:
                      </Text>
                      <Text className="font-medium mb-[1px] ml-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                        Blue
                      </Text>
                    </Row>
                    <Row className="items-end lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[22%]">
                      <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                        <span className="text-colors1 font-opensans font-semibold">
                          $
                        </span>
                        <span className="text-colors2 font-opensans font-semibold">
                          555.29
                        </span>
                      </Text>
                      <Text className="font-medium line-through mb-[1px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                        <span className="text-colors3 font-opensans font-semibold">
                          $
                        </span>
                        <span className="text-colors3 font-opensans font-semibold">
                          55.99
                        </span>
                      </Text>
                    </Row>
                  </Column>
                  <Button
                    className="font-gilroy font-semibold mb-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                    shape="RoundedBorder6"
                  >
                    Move to cart
                  </Button>
                </Row>
              </Column>
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
            <Row className="items-center justify-between lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] w-[100%]">
              <Img
                src="images/img_pngwing1.png"
                className="lg:h-[140px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] rounded-radius4 lg:w-[140px] xl:w-[160px] 2xl:w-[180px] 3xl:w-[216px]"
                alt="pngwingOne Three"
              />
              <Column className="lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[82%]">
                <Row className="justify-between w-[100%]">
                  <Text className="font-medium mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                    Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                  </Text>
                  <Img
                    src="images/img_trash.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[2%]"
                    alt="trash Three"
                  />
                </Row>
                <Text className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_400 w-[auto]">
                  (Blue,6GB RAM, 128GB Storage)
                </Text>
                <Row className="items-end justify-evenly lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                  <Column className="font-opensans w-[81%]">
                    <Row className="items-center w-[13%]">
                      <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                        Color:
                      </Text>
                      <Text className="font-medium mb-[1px] ml-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                        Blue
                      </Text>
                    </Row>
                    <Row className="items-end lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[22%]">
                      <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                        <span className="text-colors1 font-opensans font-semibold">
                          $
                        </span>
                        <span className="text-colors2 font-opensans font-semibold">
                          555.29
                        </span>
                      </Text>
                      <Text className="font-medium line-through lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                        <span className="text-colors3 font-opensans font-semibold">
                          $
                        </span>
                        <span className="text-colors3 font-opensans font-semibold">
                          55.99
                        </span>
                      </Text>
                    </Row>
                  </Column>
                  <Button
                    className="font-gilroy font-semibold lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                    shape="RoundedBorder6"
                    size="lg"
                  >
                    Move to cart
                  </Button>
                </Row>
              </Column>
            </Row>
          </List>
        </Column>
      </Column>
    </>
  );
};

export default FavouritesPage;
