import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Toast from "@/components/Toast/Toast";
import withColorSchema from "@/decorators/withColorSchema";
import Button from "@/components/Button/Button";
import { toast, Toaster } from "sonner";

type StoryProps = ComponentProps<typeof Toast>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: "Toast",
  component: Toast,
  tags: ["input"],
  args: {
    text: "Here is the text example",
  },
  decorators: [withColorSchema],
};

export default meta;

const handleClick = (args: StoryProps) => {
  toast.custom(() => {
    return <Toast {...args} />;
  });
};
export const Success: Story = {
  args: {
    text: "Success text for example",
    type: "success",
  },
  render: (args) => {
    return (
      <>
        <Button onClick={() => handleClick(args)} variant="filled">
          Show Toast
        </Button>
        <Toaster />
      </>
    );
  },
};
export const Error: Story = {
  args: {
    text: "Error text for example",
    type: "error",
  },
  render: (args) => {
    return (
      <>
        <Button onClick={() => handleClick(args)} variant="filled">
          Show Toast
        </Button>
        <Toaster />
      </>
    );
  },
};
export const Warn: Story = {
  args: {
    text: "Warn text for example",
    type: "warn",
  },
  render: (args) => {
    return (
      <>
        <Button onClick={() => handleClick(args)} variant="filled">
          Show Toast
        </Button>
        <Toaster />
      </>
    );
  },
};
export const Loading: Story = {
  args: {
    text: "Loading text for example",
    type: "loading",
  },
  render: (args) => {
    return (
      <>
        <Button onClick={() => handleClick(args)} variant="filled">
          Show Toast
        </Button>
        <Toaster />
      </>
    );
  },
};
