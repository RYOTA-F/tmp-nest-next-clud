---
name: 'Module Component'
root: 'components/'
output: '**/*'
ignore: []
questions:
  module: '親ディレクトリを入力'
  name: 'コンポーネント名を入力'
---

# `{{ inputs.module | lower }}/{{ inputs.name | pascal }}/index.tsx`

```tsx
import React from "react";
import type { FC } from "react";

type T{{ inputs.name | pascal }} = {};

/**
 * 〇〇コンポーネント
 * @module Components/{{ inputs.name | pascal }}
 */
const {{ inputs.name | pascal }}: FC<T{{ inputs.name | pascal }}> = ({}) => {
  return <div>{{ inputs.name | pascal }}</div>;
};

export default {{ inputs.name | pascal }};
```

# `../stories/components/{{ inputs.module | lower }}/{{ inputs.name | pascal }}/index.stories.tsx`

```tsx
import React from 'react'
import { ComponentMeta } from '@storybook/react'
/* components */
import {{ inputs.name | pascal }} from '../../../../components/{{ inputs.module | lower }}/{{ inputs.name | pascal }}'
/* mocks */
import { {{ inputs.name | lower }} } from './mock'

/**
 * Stories/{{ inputs.module | pascal }}/{{ inputs.name | pascal }}
 * @package Stories
 */
export default {
  title: 'MyApp/{{ inputs.module | pascal }}/{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
} as ComponentMeta<typeof {{ inputs.name | pascal }}>

const Template = () => (
  <{{ inputs.name | pascal }} />
)

export const Default = Template.bind({})
Default.args = {{ inputs.name }}
```

# `../stories/components/{{ inputs.module | lower }}/{{ inputs.name | pascal }}/mock.ts`

```ts
export const {{ inputs.name | lower }} = {}
```
