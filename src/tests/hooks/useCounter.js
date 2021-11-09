import React, { useState, useContext, useCallback, createContext } from "react"

const CounterContext = createContext(1)

export const CounterProvider = ({ children, step }) => {
    return (
        <CounterContext.Provider value={step}>{children}</CounterContext.Provider>
    )
}

export const useCounter = (value = 0) => {
    const [count, setCount] = useState(value)
    const step = useContext(CounterContext)

    const increment = useCallback(() => setCount((c) => c + step), [step])
    const incrementAsync = useCallback(
        () => setTimeout(increment, 150),
        [increment],
    )

    const reset = useCallback(() => setCount(value), [value])

    if (count > 1000) {
        throw Error("Error, count more then 1000")
    }

    return { count, increment, incrementAsync, reset }
}