import { createRoot } from "react-dom/client"

import SearchParams from "./SearchParams.jsx"

const App = () => {
  return (
    <div>
      <h1>Peduli Hewan</h1>
      <SearchParams />
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
