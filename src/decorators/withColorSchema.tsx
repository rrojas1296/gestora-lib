import type { DecoratorFunction } from "storybook/internal/types";

const withColorSchema: DecoratorFunction = (Story, context) => {
  const { scheme } = context.globals;
  document.documentElement.classList.add("htmlcontainer");

  if (scheme === "light") {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    return <Story />;
  }

  if (scheme === "dark") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    return <Story />;
  }
};

export default withColorSchema;
