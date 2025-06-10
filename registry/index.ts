import { registryItemSchema, type Registry } from 'shadcn/registry';
import { examples } from '@/registry/registry-examples';
import { ui } from '@/registry/registry-ui';
import { z } from 'zod';

export const registry = {
  name: 'shadcn/ui',
  homepage: 'https://ui.shadcn.com',
  items: z.array(registryItemSchema).parse([
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
    ...examples,
  ]),
} satisfies Registry;
