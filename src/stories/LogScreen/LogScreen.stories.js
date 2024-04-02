import { LogScreen } from "./LogScreen";
import { fn } from "@storybook/test";

export default {
  title: "Components/LogScreen",
  component: LogScreen,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onClick: fn(),
  },
};

export const Screen = {};
