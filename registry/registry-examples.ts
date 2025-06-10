import { type Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
  {
    name: 'button-demo',
    type: 'registry:example',
    registryDependencies: ['button'],
    files: [
      {
        path: 'examples/button-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
];
