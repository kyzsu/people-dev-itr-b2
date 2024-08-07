import { useState } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import Details from "./Details.jsx"
import SearchParams from "./SearchParams.jsx"
import AdoptedPetContext from "./AdoptedPetContext.js"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})

const App = () => {
  const adoptedPet = useState(null)

  return (
    <BrowserRouter>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <QueryClientProvider client={queryClient}>
          <Link to="/">Peduli Hewan</Link>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </BrowserRouter>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
