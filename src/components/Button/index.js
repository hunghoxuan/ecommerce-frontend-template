import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-radius6",
  icbRoundedBorder12: "rounded-radius12",
  icbRoundedBorder4: "rounded-radius4",
  icbCircleBorder25: "rounded-radius25",
};
const variants = {
  FillBlueA700: "bg-blue_A700 text-white_A700",
  OutlineBlueA700: "border border-blue_A700 border-solid text-blue_A700",
  OutlineBlueA7001_2:
    "bg-white_A700 border border-blue_A700 border-solid text-blue_A700",
  OutlineBluegray100:
    "bg-white_A700 border border-bluegray_100 border-solid text-bluegray_400",
  FillGreen600: "bg-green_600 text-gray_50",
  FillBlue50: "bg-blue_50 text-gray_903",
  FillBluegray100: "bg-bluegray_100 text-black_901",
  OutlineBluegray400: "border border-bluegray_400 border-solid text-black_901",
  icbOutlineBluegray102: "border border-bluegray_102 border-solid",
  icbFillGray300: "bg-gray_300",
  icbFillGray52: "bg-gray_52",
  icbFillBluegray30087: "bg-bluegray_300_87",
  icbOutlineBluegray100:
    "bg-white_A700 border border-bluegray_100 border-solid",
  icbOutlineBlueA700:
    "bg-white_A700 border border-blue_A700 border-solid shadow-bs",
  icbOutlineBlack9000c: "bg-white_A700 shadow-bs",
  icbOutlineBluegray1001_2: "border border-bluegray_100 border-solid",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  md: "3xl:p-[10px] lg:p-[7px] xl:p-[8px] p-[9px]",
  lg: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  xl: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  smIcn: "p-[3px]",
  mdIcn: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  lgIcn: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  xlIcn: "lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px]",
  "2xlIcn": "lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  "3xlIcn": "lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "icbRoundedBorder12",
    "icbRoundedBorder4",
    "icbCircleBorder25",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA700",
    "OutlineBlueA700",
    "OutlineBlueA7001_2",
    "OutlineBluegray100",
    "FillGreen600",
    "FillBlue50",
    "FillBluegray100",
    "OutlineBluegray400",
    "icbOutlineBluegray102",
    "icbFillGray300",
    "icbFillGray52",
    "icbFillBluegray30087",
    "icbOutlineBluegray100",
    "icbOutlineBlueA700",
    "icbOutlineBlack9000c",
    "icbOutlineBluegray1001_2",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
    "3xlIcn",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillBlueA700",
  size: "xl",
};

export { Button };
