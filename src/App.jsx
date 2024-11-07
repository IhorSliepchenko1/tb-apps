import { useEffect } from "react"
import { useTelegram } from "./hooks/useTelegram"

export const App = () => {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div>
      <button onClick={onToggleButton}>onToggleButton</button>
    </div>
  )
}
