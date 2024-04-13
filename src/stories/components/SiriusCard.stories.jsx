import { SiriusButton } from '../../components/base/SiriusButton/SiriusButton';
import {SiriusCard} from '../../components/base/SiriusCard/SiriusCard';

const getTestContent = () => (
  <div className=''>
    <h3 className='font-bold'>Custom card content</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper id nulla
      sed pulvinar. Nunc in elementum metus. Phasellus porta lorem a nisl volutpat, id
      dictum augue sollicitudin. Nam aliquet lacus eget nisl sollicitudin scelerisque.
      Fusce non sapien non nisl interdum pharetra.
    </p>
    <br />
    <h3 className='font-bold'>Custom card content</h3>
    <p>
      Vivamus blandit sem ac lorem egestas facilisis. Nam quis massa turpis. Sed eleifend
      fermentum nulla, ut gravida dui blandit ac. Nulla facilisi. Sed sit amet ligula in
      quam ullamcorper pellentesque bibendum eget dui. Vestibulum consequat lorem nulla, a
      vehicula quam porta tempor. Cras venenatis ligula et felis malesuada pretium quis id
      ligula. Aliquam nec tellus purus.
    </p>
    <br/>
    <div className='flex flex-row-reverse gap-2'>
      <SiriusButton>Accept</SiriusButton>
      <SiriusButton>Back</SiriusButton>
    </div>
  </div>
);

export default {
  title: 'Sirius Components/Card',
  component: SiriusCard,
  parameters: {layout: 'center'},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    title: 'Card Title',
    children: getTestContent(),
    // children: 'Hi',
  },
};

export const Base = {
  args: {
    // title
    // children
    // bordered
    // style
  },
};

export const Bordered = {
  args: {
    bordered: true,
  },
};

export const CustomStyled = {
  args: {
    style: {
      backgroundColor: '#d6d6d6',
    },
  },
};
