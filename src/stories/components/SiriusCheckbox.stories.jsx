import {fn} from '@storybook/test';
import {SiriusCheckbox} from '../../components/base/SiriusCheckbox/SiriusCheckbox';

export default {
  title: 'Sirius Components/Checkbox',
  component: SiriusCheckbox,
  parameters: {layout: 'center'},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    checked: false,
    onChange: fn(),
    text: 'Checkbox text lorem ipsum',
  },
};

export const Base = {};
