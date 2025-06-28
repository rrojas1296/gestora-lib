import Button from "@/components/Button/Button";
import Sidebar from "@/components/ui/sidebar";
import withColorSchema from "@/decorators/withColorSchema";
import type { Meta, StoryObj } from "@storybook/react";
import { useState, type ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Sidebar>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: "Sidebar",
  component: Sidebar,
  tags: ["sidebar"],
  decorators: [withColorSchema],
  argTypes: {
    position: {
      control: "select",
      options: ["left", "right", "bottom"],
      description: "Posición del sidebar",
      defaultValue: "left",
    },
    open: {
      table: {
        disable: true,
      },
    },
    setOpen: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Interactive: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button variant="filled" onClick={() => setOpen((prev) => !prev)}>
          Open Sidebar
        </Button>
        <Sidebar {...args} open={open} setOpen={setOpen}>
          Sidebar Content
        </Sidebar>
      </div>
    );
  },
};
