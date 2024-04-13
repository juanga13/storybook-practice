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
  args: {
    variant: 'secondary',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
  },
};

export const Link = {
  args: {
    type: 'link',
    href: '#',
  },
};
