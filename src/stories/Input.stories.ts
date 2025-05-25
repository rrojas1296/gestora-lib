import type { ComponentProps } from "react";
import Input from "../components/Input";
import type { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Input>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: "Input",
  component: Input,
  tags: ["input"],
  args: {
    placeholder: "Enter here text",
  },
};

export default meta;

export const Default: Story = {
  args: {
    placeholder: "Enter here text",
  },
};
