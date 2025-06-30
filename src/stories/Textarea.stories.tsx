import Textarea from "@/components/Textarea/Textarea";
import withColorSchema from "@/decorators/withColorSchema";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Textarea>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: "Textarea",
  component: Textarea,
  tags: ["textarea"],
  decorators: [withColorSchema],
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default: Story = {
  render: (args) => (
    <Textarea {...args} className="w-md" placeholder="Enter your text here" />
  ),
};

export default meta;
