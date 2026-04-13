import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import * as StoriesModule from '../stories/Footer.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);

describe('Footer', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: renders footer with content and copyright', async () => {
      await Default.run();
    });
  });
});