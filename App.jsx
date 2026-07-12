import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function App() {
  const [goal, setGoal] = useState('')
  const [witness, setWitness] = useState('')
  const [goals, setGoals] = useState([])

  const connected = supabase !== null

  function handleSubmit(e) {
    e.preventDefault()
    if (!goal || !witness) return
    // For now this just stores locally so the UI is visible.
    // Once Supabase is connected, this will insert into a "goals" table instead.
    setGoals([...goals, { goal, witness, done: null }])
    setGoal('')
    setWitness('')
  }

  return (
    <div className="page">
      <header>
        <h1>Witness</h1>
        <p className="tagline">Fixe un objectif. Assigne un témoin. Tiens ta parole.</p>
      </header>

      <form onSubmit={handleSubmit} className="card">
        <label>
          Mon objectif
          <input
            type="text"
            placeholder="ex: courir 5km avant dimanche"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </label>
        <label>
          Mon témoin
          <input
            type="text"
            placeholder="ex: Nao"
            value={witness}
            onChange={(e) => setWitness(e.target.value)}
          />
        </label>
        <button type="submit">Créer l'objectif</button>
      </form>

      <section className="list">
        {goals.length === 0 && <p className="empty">Aucun objectif pour l'instant.</p>}
        {goals.map((g, i) => (
          <div className="goal" key={i}>
            <strong>{g.goal}</strong>
            <span>témoin : {g.witness}</span>
          </div>
        ))}
      </section>

      <footer>
        <p>
          Statut Supabase : {connected ? '✅ connecté' : '⚠️ pas encore connecté (voir README)'}
        </p>
      </footer>
    </div>
  )
}
