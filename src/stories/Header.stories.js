import { Header } from "./Header";
import { fn } from "@storybook/test";
import Metrics from "./assets/metrics.png";
import listActive from "./assets/list-active.png";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onClick: fn(),
  },
};

export const LoggedIn = {
  args: {
    current: "logs",
    items: [
      {
        label: "Metrics",
        key: "metrics",
        icon: <img src={Metrics} width={14} height={12} />,
      },
      {
        label: "Logs",
        key: "logs",
        icon: <img src={listActive} width={14} height={12} />,
      },
    ],
  },
};
