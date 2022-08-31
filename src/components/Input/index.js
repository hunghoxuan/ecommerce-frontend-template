import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray100: "bg-white_A700 border border-bluegray_100 border-solid",
  OutlineBluegray300: "bg-white_A700 border border-bluegray_300 border-solid",
  UnderLineBluegray100: "border-b-[1px] border-bluegray_100",
  srcOutlineBluegray300:
    "bg-white_A700 border border-bluegray_300 border-solid",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder4: "rounded-radius4",
  srcRoundedBorder6: "rounded-radius6",
};
const sizes = {
  sm: "lg:pb-[17px] xl:pb-[19px] pb-[22px] 3xl:pb-[26px] lg:pt-[10px] xl:pt-[11px] pt-[13px] 3xl:pt-[15px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px]",
  md: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  lg: "lg:pb-[10px] xl:pb-[12px] pb-[14px] 3xl:pb-[16px] lg:pt-[14px] xl:pt-[16px] pt-[19px] 3xl:pt-[22px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px]",
  xl: "lg:p-[24px] xl:p-[27px] p-[31px] 3xl:p-[37px]",
  "2xl": "lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px]",
  "3xl": "lg:pb-[14px] xl:pb-[16px] pb-[19px] 3xl:pb-[22px]",
  "4xl": "lg:pb-[24px] xl:pb-[28px] pb-[32px] 3xl:pb-[38px]",
  smSrc: "lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px]",
  mdSrc:
    "lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pt-[14px] xl:pt-[16px] pt-[19px] 3xl:pt-[22px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "RoundedBorder4",
    "srcRoundedBorder6",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBluegray100",
    "OutlineBluegray300",
    "UnderLineBluegray100",
    "srcOutlineBluegray300",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "smSrc",
    "mdSrc",
  ]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "srcOutlineBluegray300",
  size: "md",
};

export { Input };
