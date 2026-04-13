import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import * as StoriesModule from '../stories/NavBar.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);

describe('NavBar', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: renders nav bar with logo, title, and links', async () => {
      await Default.run();
    });
  });
});