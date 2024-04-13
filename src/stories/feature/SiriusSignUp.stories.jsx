import { userEvent, within } from '@storybook/test';

import { SiriusSignUp } from '../../components/feature/SiriusSignUp/SiriusSignUp';

export default {
  component: SiriusSignUp,
};

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const fullNameInput = canvas.getByPlaceholderText('Full name', {
      selector: 'input',
    });

    await userEvent.type(fullNameInput, 'Pedro Pedrez', {
      delay: 100,
    });

    const emailInput = canvas.getByPlaceholderText('Email', {
      selector: 'input',
    });

    await userEvent.type(emailInput, 'example-email@email.com', {
      delay: 100,
    });

    const passwordInput = canvas.getByPlaceholderText('Password', {
      selector: 'input',
    });

    await userEvent.type(passwordInput, 'ExamplePassword', {
      delay: 100,
    });

    const confirmPasswordInput = canvas.getByPlaceholderText('Confirm password', {
      selector: 'input',
    });

    await userEvent.type(confirmPasswordInput, 'ExamplePassword', {
      delay: 100,
    });

    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = canvas.getByRole('button');

    await userEvent.click(submitButton);
  },
};