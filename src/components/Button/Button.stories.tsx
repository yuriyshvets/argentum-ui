import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});

Contained.args = {
  children: "Hello world!",
};

Contained.argTypes = {
  color: {
    options: ["primary", "secondary"],
    control: { type: "select" },
  },
};
