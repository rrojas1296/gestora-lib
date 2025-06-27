import Button from "@/components/Button/Button";
import HomeIcon from "@/components/Icons/HomeIcon";
import withColorSchema from "@/decorators/withColorSchema";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  title: "Button",
  component: Button,
  tags: ["button"],
  argTypes: {
    variant: {
      options: ["filled", "ghost", "icon"],
      control: { type: "select" },
    },
  },
  args: {
    variant: "filled",
  },
  decorators: [withColorSchema],
};

export default meta;
type Story = StoryObj<StoryProps>;

export const Filled: Story = {
  args: {
    children: "Click me",
    variant: "filled",
  },
};

export const Ghost: Story = {
  args: {
    children: "Click me",
    variant: "ghost",
  },
};

export const Icon: Story = {
  args: {
    children: <HomeIcon className="w-5 h-5 stroke-current" />,
    variant: "icon",
  },
};

export const Outlined: Story = {
  args: {
    children: "Click me",
    variant: "outlined",
  },
};
