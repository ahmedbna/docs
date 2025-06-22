import { type Registry } from 'shadcn/registry';

export const ui: Registry['items'] = [
  {
    name: 'button',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slot'],
    registryDependencies: ['button'],
    files: [
      {
        path: 'ui/button.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
