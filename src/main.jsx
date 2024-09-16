import "./index.css"

import Header from "./Header.jsx"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
  </StrictMode>
)
