import { Story, Meta } from '@storybook/react';
import CustomButton, { CustomButtonProps } from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: CustomButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<CustomButtonProps> = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Click me',
  variant: 'contained',
  color: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  variant: 'contained',
  color: 'primary',
  disabled: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  text: 'Outlined Button',
  variant: 'outlined',
  color: 'primary',
};

export const Text = Template.bind({});
Text.args = {
  text: 'Text Button',
  variant: 'text',
  color: 'primary',
};

export const onClickAlert = Template.bind({});
onClickAlert.args = {
  text: 'Alert Button',
  variant: 'contained',
  color: 'primary',
  onClick: () => alert('Button clicked'),
};
