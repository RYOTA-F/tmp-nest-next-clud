import React, { useState } from 'react'
import type { FC } from 'react'
/* types */
import { TTodo, TUpdateTodo } from '@type/todo'
/* utils */
import { convertDateFormat } from '../../../utils/format' // TODO: :Storybook: TS エイリアスインポートエラー対応

type TTodoItem = TTodo & {
  changeTodo: (id: number, body: TUpdateTodo) => void
  changeIsDone: (id: number) => void
}

/**
 * Todoアイテムを1件表示するコンポーネント
 * @module Components/Todos/TodoItem
 */
const TodoItem: FC<TTodoItem> = ({
  id,
  name,
  description,
  startDate,
  endDate,
  isDone,
  changeIsDone,
  changeTodo,
}) => {
  const [isViewInputName, setIsViewInputName] = useState(false)
  const [isViewInputDescription, setIsViewInputDescription] = useState(false)
  const [inputName, setInputName] = useState(name)
  const [inputDescription, setInputDescription] = useState(description)

  /**
   * 名前変更ボタンをクリック
   */
  const handleClickIsViewInputName = () => {
    if (isViewInputName) changeTodo(id, { name: inputName })
    setIsViewInputName(!isViewInputName)
  }

  /**
   * 詳細変更ボタンをクリック
   */
  const handleClickIsViewInputDescription = () => {
    if (isViewInputDescription)
      changeTodo(id, { description: inputDescription })
    setIsViewInputDescription(!isViewInputDescription)
  }

  return (
    <div className="flex justify-between items-center py-4 px-5 leading-12 text-gray-600 rounded-2xl shadow">
      <div className="flex items-center w-3/5">
        <div className="w-6 h-6 leading-6 text-center text-gray-600 bg-gray-200 rounded-full">
          {id}
        </div>
        <div className="w-2/5">
          {isViewInputName ? (
            <input
              value={inputName}
              onChange={(v) => setInputName(v.target.value)}
              className="ml-5"
            />
          ) : (
            <div className="ml-5  text-2xl">{name}</div>
          )}
        </div>
        <button onClick={handleClickIsViewInputName}>-</button>
        <div className="w-2/5">
          {isViewInputDescription ? (
            <input
              value={inputDescription}
              onChange={(v) => setInputDescription(v.target.value)}
              className="ml-10"
            />
          ) : (
            <div className="ml-10">{description}</div>
          )}
        </div>
        <button onClick={handleClickIsViewInputDescription}>-</button>
      </div>
      <div className="flex right-0 items-center w-2/5 text-gray-400">
        <span>{convertDateFormat(startDate)}</span>
        <span>-</span>
        <span>{convertDateFormat(endDate)}</span>
        <input
          type="checkbox"
          className="ml-5 w-6 h-6"
          checked={isDone}
          onChange={() => changeIsDone(id)}
        />
      </div>
    </div>
  )
}

export default TodoItem
