import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";
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
    children: "🚀",
    variant: "icon",
  },
};
