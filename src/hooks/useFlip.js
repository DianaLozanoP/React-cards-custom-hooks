import { useState } from "react"

const useFlip = (initalState = true) => {
    const [state, setState] = useState(initalState)
    const flipState = () => {
        setState(state => !state)
    }
    return [state, flipState]
}

export default useFlip;