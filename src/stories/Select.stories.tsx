import Select, { type SelectOption } from "@/components/Select/Select";
import withColorSchema from "@/decorators/withColorSchema";
import type { Meta, StoryObj } from "@storybook/react";
import { useState, type ComponentProps } from "react";

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
    const options = [
      {
        label: "Option 1",
        value: "option-1",
      },
      {
        label: "Option 2",
        value: "option-2",
      },
      {
        label: "Option 3",
        value: "option-3",
      },
    ];
    const [value1, setValue1] = useState<SelectOption | undefined>();
    return (
      <div className="grid gap-96">
        <Select
          options={options}
          placeholder="Select an option"
          onChange={(val) => {
            setValue1(val);
          }}
          value={value1}
        />
      </div>
    );
  },
};
