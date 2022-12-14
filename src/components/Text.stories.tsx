import { Meta, StoryObj } from "@storybook/react";
import { Children } from "react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Hello World",
  },
  argTypes: {
    size: {
        options: ["sm", "md", "lg"],
        control: { type: "radio" },
        size: "md",
    }
  }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text p</p>,
  },
  argTypes:{
    children: {
        table: { disable: true },
    },
    asChild: {
      table: { disable: true },
  }
  }
};
