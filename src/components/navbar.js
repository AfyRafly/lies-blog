import { Link } from "gatsby"
import React from "react"

export default function navbar() {
  return (
    <nav className="items-center mb-10 p-3 shadow-lg space-x-5 w-full mx-auto flex justify-around">
      <Link className="border p-2 rounded-lg m-0" to="/contoh">
        TAILWIND STARTER KIT
      </Link>
      <div className="gap-5 flex flex-row justify-center links">
        <Link to="/">Home</Link>
        <Link to="/aboutdev">Minion</Link>
        <Link to="/test2page">Petunjuk Awal</Link>
      </div>
    </nav>
  )
}
