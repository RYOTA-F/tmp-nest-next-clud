import React, { useState } from 'react'
import { NextPage } from 'next'
/* apis */
import {
  createTodo,
  updateTodo,
  updateTodoStatus,
  deleteTodo,
} from '@api/todos'
/* components */
import TodoItem from '@components/todos/TodoItem'
/* constants */
import { TODOS_API_ENDPOINT } from '@constants/api'
/* hooks */
import useFetch from '@utils/hooks/useFetch'
/* types */
import { TTodo, TNewTodo } from '@type/todo'
/* utils */
import { convertDateInputFormat } from '../../utils/format' // TODO: :Storybook: TS エイリアスインポートエラー対応

/**
 * Todo一覧表示ページ
 * @module Pages/Todos
 */
const Todos: NextPage = () => {
  const { data, setData } = useFetch<TTodo[]>(TODOS_API_ENDPOINT, {})

  const initialState = {
    name: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
  }

  const [isViewInput, setIsViewInput] = useState(false)
  const [newTodo, setNewTodo] = useState<TNewTodo>(initialState)

  /**
   * 追加フォームを編集
   */
  const handleChangeInput = (
    e: { target: HTMLButtonElement },
    type: 'name' | 'description'
  ) => {
    if (type === 'name') setNewTodo({ ...newTodo, name: e.target.value })
    if (type === 'description')
      setNewTodo({ ...newTodo, description: e.target.value })
  }

  /**
   * 日付を選択
   */
  const handleChangeInputDate = (e: string, type: 'startDate' | 'endDate') => {
    if (type === 'startDate') setNewTodo({ ...newTodo, startDate: new Date(e) })
    if (type === 'endDate') setNewTodo({ ...newTodo, endDate: new Date(e) })
  }

  /**
   * Todoを作成
   */
  const handleClickSave = async () => {
    if (
      !newTodo.name ||
      !newTodo.description ||
      !newTodo.startDate ||
      !newTodo.endDate
    )
      return

    const res = await createTodo(newTodo)
    if (!res) return

    setData([...data, res])
    setNewTodo(initialState)
    setIsViewInput(false)
  }

  /**
   * Todoを更新
   */
  const changeTodo = async (
    id: number,
    body: { name?: string; description?: string }
  ) => {
    const res = await updateTodo(id, body)
    if (!res) return

    setData(
      data.map((v) => {
        if (v.id === id) return res
        return v
      })
    )
  }

  /**
   * Todoの完了フラグを変更
   */
  const changeIsDone = async (id: number) => {
    const res = await updateTodoStatus(id)
    if (!res) return

    setData(
      data.map((v) => {
        if (v.id === id) return res
        return v
      })
    )
  }

  /**
   * Todoを削除
   */
  const handleClickRemoveTodo = async (id: number) => {
    const res = await deleteTodo(id)
    if (!res) return

    setData(data.filter((v) => v.id !== id))
  }

  return (
    <>
      <div className="py-8 mx-auto mt-4 w-4/5 rounded-2xl border border-gray-300">
        {data &&
          data.map((v) => (
            <div
              key={v.id}
              className="flex justify-between items-center my-4 mx-auto w-4/5 "
            >
              <div className="w-full">
                <TodoItem
                  {...v}
                  changeTodo={changeTodo}
                  changeIsDone={changeIsDone}
                />
              </div>
              <button
                className="py-2 px-4 ml-4 font-bold text-white bg-red-200  rounded"
                onClick={() => handleClickRemoveTodo(v.id)}
              >
                -
              </button>
            </div>
          ))}
        <div className="mt-12 w-full text-center">
          {isViewInput ? (
            <div className="flex justify-center items-center mx-auto w-full text-center">
              <div>
                <div>
                  <span className="w-1/6 text-gray-400">タスク名:</span>
                  <input
                    className="py-2 px-4 mr-4 ml-2 w-2/6 rounded border border-gray-300"
                    value={newTodo.name}
                    onChange={(e) => handleChangeInput(e, 'name')}
                  />
                  <span className="w-1/6 text-gray-400">説明:</span>
                  <input
                    className="py-2 px-4 mr-4 ml-2 w-2/6 rounded border border-gray-300"
                    value={newTodo.description}
                    onChange={(e) => handleChangeInput(e, 'description')}
                  />
                </div>
                <div className="flex items-center mt-3">
                  <span className=" w-1/5 text-gray-400">開始日: </span>
                  <input
                    type="date"
                    className="py-2 px-4 mr-4 ml-2 w-2/6 rounded border border-gray-300"
                    value={convertDateInputFormat(newTodo.startDate)}
                    onChange={(e) =>
                      handleChangeInputDate(e.target.value, 'startDate')
                    }
                  />
                  <span className="w-1/5 text-gray-400">終了日: </span>
                  <input
                    type="date"
                    className="py-2 px-4 mr-4 ml-2 w-2/6 rounded border border-gray-300"
                    value={convertDateInputFormat(newTodo.endDate)}
                    onChange={(e) =>
                      handleChangeInputDate(e.target.value, 'endDate')
                    }
                  />
                </div>
              </div>
              <button
                className="py-2 px-4 font-bold text-white bg-blue-400  rounded"
                onClick={handleClickSave}
              >
                保存
              </button>
              <button
                className="py-2 px-4 ml-3 font-bold text-white bg-red-200  rounded"
                onClick={() => setIsViewInput(!isViewInput)}
              >
                取消
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsViewInput(!isViewInput)}
              className="py-2 px-4 mx-auto font-bold text-white bg-blue-400  rounded"
            >
              追加
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Todos
