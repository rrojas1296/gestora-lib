import Button from "@/components/Button/Button";
import Dialog from "@/components/Dialog/Dialog";
import withColorSchema from "@/decorators/withColorSchema";
import type { Meta, StoryObj } from "@storybook/react";
import { useState, type ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Dialog>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: "Dialog",
  tags: ["dialog"],
  decorators: [withColorSchema],
};

export default meta;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} setOpen={setOpen}>
          Dialog Content
        </Dialog>
      </>
    );
  },
};
