'use client';

import type { PlaygroundItem } from '@/types/playground';
import { templateItems } from './data/templates';
import { nextItems } from './data/nextjs';
import { reactItems } from './data/react';
import { hookItems } from './data/hooks';
import { jsItems } from './data/js';
import { tsItems } from './data/ts';
import { testingItems } from './data/testing';
import { pluginItems } from './data/plugin';
import { uxItems } from './data/ux';
import { uiItems } from './data/ui';

export const playgroundItems: PlaygroundItem[] = [
  ...templateItems,
  ...nextItems,
  ...reactItems,
  ...hookItems,
  ...jsItems,
  ...tsItems,
  ...testingItems,
  ...pluginItems,
  ...uxItems,
  ...uiItems,
];
