import {SiriusText} from '../../components/base/SiriusText/SiriusText';

export default {
  title: 'Sirius Components/Text',
  component: SiriusText,
  parameters: {layout: 'center'},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: 'Text',
    variant: 'default',
    type: 'text',
  },
};

export const Base = {};

export const Secondary = {
  variant: 'secondary',
};

export const Warning = {
  variant: 'warning',
};

export const Danger = {
  variant: 'danger',
};

export const Link = {
  type: 'link',
  href: '#',
};
