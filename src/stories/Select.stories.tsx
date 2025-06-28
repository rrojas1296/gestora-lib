import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import withColorSchema from "@/decorators/withColorSchema";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Select>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: "Select",
  component: Select,
  decorators: [withColorSchema],
  argTypes: {},
};

export default meta;

export const Default: Story = {
  render: () => {
    return (
      <Select>
        <SelectTrigger className="w-md">
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
          <SelectItem value="out_of_stock">Out of stock</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};
