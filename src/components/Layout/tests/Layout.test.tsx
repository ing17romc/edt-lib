import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import * as StoriesModule from '../stories/Layout.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);

describe('Layout', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: renders layout with NavBar, main content, and Footer', async () => {
      await Default.run();
    });
  });
});