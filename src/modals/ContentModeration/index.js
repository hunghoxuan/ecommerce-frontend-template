import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Row, Img, Button } from "components";

const ContentModerationModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[24%]"
        overlayClassName="bg-black_900_b2 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 justify-end lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius6 w-[100%]">
            <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Why Are You flagging This?
            </Text>
            <Row className="justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
              <Text className="font-medium mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                Off-Topic
              </Text>
              <Column className="bg-blue_A700 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                <div className="bg-white_A700 lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"></div>
              </Column>
            </Row>
            <Row className="justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
              <Text className="font-medium mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                Inappropriate
              </Text>
              <div className="bg-white_A700 border border-bluegray_200 border-solid lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"></div>
            </Row>
            <Row className="justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
              <Text className="font-medium mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                Spam
              </Text>
              <div className="bg-white_A700 border border-bluegray_200 border-solid lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"></div>
            </Row>
            <Row className="justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
              <Text className="font-medium mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                Notify Space Administration
              </Text>
              <div className="bg-white_A700 border border-bluegray_200 border-solid lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"></div>
            </Row>
            <Text className="font-medium lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
              Comments
            </Text>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-end lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius8 w-[100%]">
              <Column className="items-center 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mr-[52px] xl:mr-[60px] 2xl:mr-[68px] 3xl:mr-[81px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius7 w-[73%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  Say something about this post...
                </Text>
              </Column>
              <Img
                src="images/img_basetextarea.svg"
                className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[208px] xl:ml-[238px] 2xl:ml-[268px] 3xl:ml-[321px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                alt="Group216"
              />
            </Column>
            <Row className="items-center lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Button
                className="common-pointer font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[48%]"
                onClick={props.onRequestClose}
                shape="RoundedBorder6"
                variant="OutlineBlueA700"
              >
                Cancel
              </Button>
              <Button
                className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[48%]"
                shape="RoundedBorder6"
              >
                Submit
              </Button>
            </Row>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default ContentModerationModal;
