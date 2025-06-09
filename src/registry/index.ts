import { registryItemSchema, type Registry } from 'shadcn/registry';
import { z } from 'zod';

import { ui } from '@/registry/registry-ui';

const DEPRECATED_ITEMS = [
  'toast',
  'toast-demo',
  'toast-destructive',
  'toast-simple',
  'toast-with-action',
  'toast-with-title',
];

export const registry = {
  name: 'shadcn/ui',
  homepage: 'https://ui.shadcn.com',
  items: z.array(registryItemSchema).parse(
    [
      {
        name: 'index',
        type: 'registry:style',
        dependencies: ['class-variance-authority', 'lucide-react'],
        devDependencies: ['tw-animate-css'],
        registryDependencies: ['utils'],
        cssVars: {},
        files: [],
      },
      ...ui,
    ]
      .filter((item) => {
        return !DEPRECATED_ITEMS.includes(item.name);
      })
      .map((item) => {
        // Temporary fix for dashboard-01.
        if (item.name === 'dashboard-01') {
          item.dependencies?.push('@tabler/icons-react');
        }

        if (item.name === 'accordion' && 'tailwind' in item) {
          delete item.tailwind;
        }

        return item;
      })
  ),
} satisfies Registry;
