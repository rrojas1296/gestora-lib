import Button from "@/components/Button/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import withColorSchema from "@/decorators/withColorSchema";
import type { Meta, StoryObj } from "@storybook/react";
import { useState, type ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Drawer>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: "Drawer",
  component: Drawer,
  tags: ["drawer"],
  decorators: [withColorSchema],
  args: {},
};

export default meta;
export const Default: Story = {
  render: () => {
    const [goal, setGoal] = useState(350);
    const onClick = (adjustment: number) => {
      setGoal(Math.max(200, Math.min(400, goal + adjustment)));
    };
    return (
      <>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="filled">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>
                  Set your daily activity goal.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                  <Button
                    variant="outlined"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => onClick(-10)}
                    disabled={goal <= 200}
                  >
                    <span className="sr-only">Decrease</span>
                  </Button>
                  <div className="flex-1 text-center">
                    <div className="text-7xl font-bold tracking-tighter">
                      {goal}
                    </div>
                    <div className="text-muted-foreground text-[0.70rem] uppercase">
                      Calories/day
                    </div>
                  </div>
                  <Button
                    variant="outlined"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={() => onClick(10)}
                    disabled={goal >= 400}
                  >
                    <span className="sr-only">Increase</span>
                  </Button>
                </div>
                <div className="mt-3 h-[120px]"></div>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outlined">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </>
    );
  },
};
