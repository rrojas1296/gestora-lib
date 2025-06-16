import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DropdownMenuDemo from "@/components/DropdownMenu/DropdownMenu";

type StoryProps = ComponentProps<typeof DropdownMenuDemo>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: "Dropdown",
  component: DropdownMenuDemo,
  tags: ["dropdown"],
  args: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
