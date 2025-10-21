import { create } from 'zustand'
import React from 'react';
import { Button, Text } from 'react-native'

interface CounterState {
  counter: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  counter: 0,
  increment: () => set((state) => ({
    counter: state.counter + 1
  })),
  decrement: () => set((state) => ({
    counter: state.counter - 1
  })),
  reset: () => set((state) => ({
    counter: 0
  }))
}));

const Counter = () => {
  const { counter, increment, decrement, reset } = useCounterStore();

  return (
    <>
      <Text>Counter: {counter}</Text>
      <Button onPress={increment} title=' 增加 '></Button>
      <Button onPress={decrement} title=' 减少 '></Button>
    </>
  );
}

export default Counter;