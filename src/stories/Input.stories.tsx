import type { ComponentProps } from "react";
import Input from "../components/Input";
import type { Meta, StoryObj } from "@storybook/react";
import withColorSchema from "@/decorators/withColorSchema";
import EmailIcon from "@/components/Icons/EmailIcon";

type StoryProps = ComponentProps<typeof Input> & {
  hasIcon: boolean;
};
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: "Input",
  component: Input,
  tags: ["input"],
  argTypes: {
    hasIcon: {
      control: "boolean",
      description: "Icono a la derecha del input",
    },
    Icon: {
      table: {
        disable: true,
      },
    },
    containerClassName: {
      table: {
        disable: true,
      },
    },
    inputClassName: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withColorSchema],
};

export default meta;

export const Default: Story = {
  args: {
    placeholder: "Enter here text",
    hasIcon: true,
  },
  render: (args) => {
    const Icon = args.hasIcon ? (
      <EmailIcon className="w-5 h-5 stroke-current text-text-2" />
    ) : undefined;
    return <Input {...args} Icon={Icon} />;
  },
};
