// Registry configuration for accordion component and examples

import React from 'react';

const accordionRegistry = {
  // Main accordion component
  accordion: {
    name: 'accordion',
    description:
      'A vertically stacked set of interactive headings that each reveal a section of content.',
    type: 'registry:ui',
    registryDependencies: ['text', 'view', 'icon'],
    files: [
      {
        path: 'registry/ui/accordion.tsx',
        type: 'registry:ui',
        target: '',
      },
    ],
    component: React.lazy(async () => {
      const mod = await import('@/registry/components/ui/accordion');
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === 'function' || typeof mod[key] === 'object'
        ) || 'accordion';
      return { default: mod.default || mod[exportName] };
    }),
    categories: ['disclosure'],
    meta: {
      importPath: '@/components/ui/accordion',
      exports: [
        'Accordion',
        'AccordionItem',
        'AccordionTrigger',
        'AccordionContent',
      ],
    },
  },

  // Default demo
  'accordion-demo': {
    name: 'accordion-demo',
    description: 'A basic accordion with collapsible sections',
    type: 'registry:example',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'registry/examples/accordion-demo.tsx',
        type: 'registry:example',
        target: '',
      },
    ],
    component: React.lazy(async () => {
      const mod = await import('@/registry/examples/accordion-demo');
      return { default: mod.AccordionDemo || mod.default };
    }),
    categories: ['disclosure'],
    meta: undefined,
  },

  // Single selection example
  'accordion-single': {
    name: 'accordion-single',
    description: 'An accordion that allows only one item to be open at a time',
    type: 'registry:example',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'registry/examples/accordion-single.tsx',
        type: 'registry:example',
        target: '',
      },
    ],
    component: React.lazy(async () => {
      const mod = await import('@/registry/examples/accordion-single');
      return { default: mod.AccordionSingle || mod.default };
    }),
    categories: ['disclosure'],
    meta: undefined,
  },

  // Multiple selection example
  'accordion-multiple': {
    name: 'accordion-multiple',
    description:
      'An accordion that allows multiple items to be open simultaneously',
    type: 'registry:example',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'registry/examples/accordion-multiple.tsx',
        type: 'registry:example',
        target: '',
      },
    ],
    component: React.lazy(async () => {
      const mod = await import('@/registry/examples/accordion-multiple');
      return { default: mod.AccordionMultiple || mod.default };
    }),
    categories: ['disclosure'],
    meta: undefined,
  },

  // Controlled example
  'accordion-controlled': {
    name: 'accordion-controlled',
    description: 'An accordion with controlled state management',
    type: 'registry:example',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'registry/examples/accordion-controlled.tsx',
        type: 'registry:example',
        target: '',
      },
    ],
    component: React.lazy(async () => {
      const mod = await import('@/registry/examples/accordion-controlled');
      return { default: mod.AccordionControlled || mod.default };
    }),
    categories: ['disclosure'],
    meta: undefined,
  },

  // FAQ style example
  'accordion-faq': {
    name: 'accordion-faq',
    description:
      'An accordion formatted as a frequently asked questions section',
    type: 'registry:example',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'registry/examples/accordion-faq.tsx',
        type: 'registry:example',
        target: '',
      },
    ],
    component: React.lazy(async () => {
      const mod = await import('@/registry/examples/accordion-faq');
      return { default: mod.AccordionFAQ || mod.default };
    }),
    categories: ['disclosure'],
    meta: undefined,
  },

  // Non-collapsible example
  'accordion-non-collapsible': {
    name: 'accordion-non-collapsible',
    description: 'An accordion where at least one item must always remain open',
    type: 'registry:example',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'registry/examples/accordion-non-collapsible.tsx',
        type: 'registry:example',
        target: '',
      },
    ],
    component: React.lazy(async () => {
      const mod = await import('@/registry/examples/accordion-non-collapsible');
      return { default: mod.AccordionNonCollapsible || mod.default };
    }),
    categories: ['disclosure'],
    meta: undefined,
  },

  // Custom styled example
  'accordion-styled': {
    name: 'accordion-styled',
    description: 'An accordion with custom styling and icons',
    type: 'registry:example',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'registry/examples/accordion-styled.tsx',
        type: 'registry:example',
        target: '',
      },
    ],
    component: React.lazy(async () => {
      const mod = await import('@/registry/examples/accordion-styled');
      return { default: mod.AccordionStyled || mod.default };
    }),
    categories: ['disclosure'],
    meta: undefined,
  },

  // Demo screen combining all examples
  'accordion-demo-screen': {
    name: 'accordion-demo-screen',
    description: 'A comprehensive demo screen showing all accordion variations',
    type: 'registry:example',
    registryDependencies: ['accordion'],
    files: [
      {
        path: 'registry/examples/accordion-demo-screen.tsx',
        type: 'registry:example',
        target: '',
      },
    ],
    component: React.lazy(async () => {
      const mod = await import('@/registry/examples/accordion-demo-screen');
      return { default: mod.AccordionDemoScreen || mod.default };
    }),
    categories: ['disclosure'],
    meta: undefined,
  },
};

export default accordionRegistry;
