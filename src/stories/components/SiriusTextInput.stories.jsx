import {fn} from '@storybook/test';
import {SiriusTextInput} from '../../components/base/SiriusTextInput/SiriusTextInput';

export default {
  title: 'Sirius Components/TextInput',
  component: SiriusTextInput,
  parameters: {layout: 'center'},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    type: 'text',
    onChange: fn(),
    placeholder: 'Placeholder',
  },
};

export const Text = {};

export const Password = {
  args: {
    type: 'password',
  },
};
