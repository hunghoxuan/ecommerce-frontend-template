import { Input } from "components";
export default {
  title: "ecommerce_fe/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder8",
  variant: "srcOutlineBluegray300",
  size: "md",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
