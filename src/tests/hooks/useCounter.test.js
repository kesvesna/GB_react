import { renderHook } from "@testing-library/react-hooks"
import { useCounter } from "./useCounter"

describe("Check useCounter hook", () => {
    it("Calling useCounter", () => {
        const { result } = renderHook(() => useCounter())

        expect(result.current.count).toBe(0)
        expect(typeof result.current.increment).toBe("function")
    })

    it("Calling increment", () => {
        const { result } = renderHook(() => useCounter())

        result.current.increment()

        expect(result.current.count).toBe(1)
    })

    it("Calling increment with initial value", () => {
        const { result } = renderHook(() => useCounter(3))

        result.current.increment()

        expect(result.current.count).toBe(4)
    })

    it("Calling reset", () => {
        const { result, rerender } = renderHook(
            ({ initialValue }) => useCounter(initialValue),
            {
                initialValue: 0,
            },
        )

        rerender({ initialValue: 23 })

        result.current.reset()

        expect(result.current.count).toBe(23)
    })

    it("Calling incrementAsync", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useCounter(0))

        result.current.incrementAsync()

        await waitForNextUpdate()

        expect(result.current.count).toBe(1)
    })
})