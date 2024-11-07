import { useEffect } from "react"

const tg = window.Telegram.WebApp

export const App = () => {

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div>

      <button onClick={onClose}>Close</button>
    </div>
  )
}
