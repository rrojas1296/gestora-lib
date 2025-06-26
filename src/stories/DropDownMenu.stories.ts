import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DropdownMenuDemo from "@/components/DropdownMenu/DropdownMenu";
import withColorSchema from "@/decorators/withColorSchema";

type StoryProps = ComponentProps<typeof DropdownMenuDemo>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: "Dropdown",
  component: DropdownMenuDemo,
  tags: ["dropdown"],
  args: {},
  decorators: [withColorSchema],
};

export default meta;

export const Default: Story = {
  args: {},
};
