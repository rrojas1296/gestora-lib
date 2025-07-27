import AutoComplete, {
  type AutoCompleteOption,
} from "@/components/AutoComplete/AutoComplete";
import withColorSchema from "@/decorators/withColorSchema";
import type { Meta, StoryObj } from "@storybook/react";
import { useState, type ComponentProps } from "react";

type StoryProps = ComponentProps<typeof AutoComplete>;

const meta: Meta<StoryProps> = {
  title: "Autocomplete",
  component: AutoComplete,
  decorators: [withColorSchema],
};

export const Default: StoryObj<StoryProps> = {
  render: () => {
    const opts = [
      {
        label: "Samsung",
        value: "samsung",
      },
      {
        label: "Apple",
        value: "apple",
      },
      {
        label: "Razer",
        value: "razer",
      },
      {
        label: "Mazda",
        value: "mazda",
      },
      {
        label: "Huawei",
        value: "huawei",
      },
      {
        label: "Xiaomi",
        value: "xiaomi",
      },
      {
        label: "Micronics",
        value: "micronics",
      },
      {
        label: "Xbox",
        value: "xbox",
      },
      {
        label: "Nintendo",
        value: "nintendo",
      },
      {
        label: "Microsoft",
        value: "microsoft",
      },
    ];
    const [value, setValue] = useState<AutoCompleteOption>();
    return (
      <>
        <AutoComplete
          options={opts}
          placeholder="Search a brand"
          containerClassName="w-[400px]"
          handleSelect={(val) => {
            setValue(val);
          }}
        />
        {JSON.stringify(value)}
      </>
    );
  },
};

export default meta;
