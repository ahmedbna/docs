import { type Registry } from 'shadcn/registry';

export const ui: Registry['items'] = [
  {
    name: 'button',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slot'],
    files: [
      {
        path: 'ui/button.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'card',
    type: 'registry:ui',
    files: [
      {
        path: 'ui/card.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
