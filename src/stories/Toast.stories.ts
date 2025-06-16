import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Toast from "@/components/Toast/Toast";

type StoryProps = ComponentProps<typeof Toast>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: "Toast",
  component: Toast,
  tags: ["input"],
  args: {
    text: "Here is the text example",
  },
};

export default meta;

export const Success: Story = {
  args: {
    text: "Success text for example",
    type: "success",
  },
};
export const Error: Story = {
  args: {
    text: "Error text for example",
    type: "error",
  },
};
export const Warn: Story = {
  args: {
    text: "Warn text for example",
    type: "warn",
  },
};
