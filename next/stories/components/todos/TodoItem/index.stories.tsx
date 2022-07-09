import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
/* components */
import TodoItem from '../../../../components/todos/TodoItem'
/* mocks */
import { todo } from './mock'

/**
 * Stories/TodoItem
 * @package Stories
 */
export default {
  title: 'TodoApp/Todos/TodoItem',
  component: TodoItem,
} as ComponentMeta<typeof TodoItem>

const Template = () => (
  <div style={{ width: '900px' }}>
    <TodoItem
      {...todo}
      changeTodo={action('changeTodo')}
      changeIsDone={action('changeIsDone')}
    />
  </div>
)

export const Default = Template.bind({})
Default.args = todo
