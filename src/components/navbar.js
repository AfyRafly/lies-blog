import { Link } from "gatsby"
import React from "react"

export default function navbar() {
  return (
    <nav className="items-center p-3 container w-full mx-auto flex flex-row justify-between">
      <p className="border p-2 rounded-lg m-0">TAILWIND STARTER KIT</p>
      <div className="gap-5 flex flex-row justify-center links">
        <Link to="/">Home</Link>
        <Link to="/aboutdev">Minion</Link>
        <Link to="/test2page">Petunjuk Awal</Link>
      </div>
    </nav>
  )
}
