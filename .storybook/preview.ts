import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    scheme: {
      name: "Scheme",
      description: "Color scheme",
      defaultValue: "light",
      toolbar: {
        icon: "arrowDown",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
