import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
const meta: Meta<typeof Text> = {
  title: "Micro/Text",
  component: Text,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    TextTag: {
      description: "Escolha entre:",
    },
    Text: {
      description: "Texto do título da aplicação"
    }
  },
  args: {
    TextTag: "h1",
    Text: "text"
  },
};
export default meta;
type Story = StoryObj<typeof Text>;
export const Primary: Story = {
};
