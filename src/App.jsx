import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './features/counter/counterSlice'

export default function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      <div className="space-x-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded" 
          onClick={() => dispatch(increment())}>
          +
        </button>
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded" 
          onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  )
}
