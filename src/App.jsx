import { useEffect } from "react"
import { useTelegram } from "./hooks/useTelegram"
import { Header } from "./components/Header/Header"

export const App = () => {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div>
      <Header />
      <button onClick={onToggleButton}>onToggleButton</button>
    </div>
  )
}
