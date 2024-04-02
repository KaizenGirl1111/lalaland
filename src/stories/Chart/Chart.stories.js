import { ChartComponent } from "./Chart";
import { fn } from "@storybook/test";

export default {
  title: "Components/Chart",
  component: ChartComponent,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onClick: fn(),
  },
};

export const Charts = {};
