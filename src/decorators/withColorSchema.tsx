import type { DecoratorFunction } from "storybook/internal/types";

const withColorSchema: DecoratorFunction = (Story, context) => {
  const { scheme } = context.globals;
  document.documentElement.classList.remove("dark");

  if (scheme === "dark") {
    document.documentElement.classList.add("dark");
    return <Story />;
  } else {
    return <Story />;
  }
};

export default withColorSchema;
