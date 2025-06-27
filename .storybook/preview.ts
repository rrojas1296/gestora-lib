import type { Preview } from "@storybook/react";
import "../src/styles/index.css";
import "../src/styles/theme.css";
import "../src/styles/html.css";

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
