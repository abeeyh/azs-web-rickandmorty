import React from 'react';
import { Story, Meta } from '@storybook/react';
import ImageWithFallback, { ImageWithFallbackProps } from './ImageWithFallback';

export default {
  title: 'Components/Atoms/ImageWithFallback',
  component: ImageWithFallback,
} as Meta;

const Template: Story<ImageWithFallbackProps> = (args) => (
  <ImageWithFallback {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://img.elo7.com.br/product/zoom/2AC1187/placa-decorativa-quadro-anime-rick-and-morty-h347-filme.jpg',
  alt: 'Example Image',
};

export const Default2 = Template.bind({});
Default2.args = {
  src: 'https://tm.ibxk.com.br/sites/6/2021/07/60ef216c412ea.jpg',
  alt: 'Example Image',
};

export const ErrorFallback = Template.bind({});
ErrorFallback.args = {
  src: '',
  alt: 'Example Image',
};
