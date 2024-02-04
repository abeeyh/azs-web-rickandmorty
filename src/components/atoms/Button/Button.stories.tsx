import { Story, Meta } from '@storybook/react';
import CustomButton, { CustomButtonProps } from './Button';
import { Typography } from '@mui/material';

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
  children: <Typography>Click me</Typography>,
  variant: 'contained',
  color: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: <Typography>Disabled Button</Typography>,
  variant: 'contained',
  color: 'primary',
  disabled: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: <Typography>Outlined Button</Typography>,
  variant: 'outlined',
  color: 'primary',
};

export const Text = Template.bind({});
Text.args = {
  children: <Typography>Text Button</Typography>,
  variant: 'text',
  color: 'primary',
};

export const OnClickAlert = Template.bind({});
OnClickAlert.args = {
  children: <Typography>Alert Button</Typography>,
  variant: 'contained',
  color: 'primary',
  onClick: () => alert('Button clicked'),
};
