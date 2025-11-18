import { useState } from 'react'

function App() {
  const [form, setForm] = useState({ name: '', className: '', rollNo: '' })
  const [errors, setErrors] = useState({})
  const [students, setStudents] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter a name'
    if (!form.className.trim()) e.className = 'Please enter a class'
    if (!form.rollNo.toString().trim()) e.rollNo = 'Please enter a roll number'
    else if (!/^\d+$/.test(form.rollNo)) e.rollNo = 'Roll number must be digits only'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    setSubmitted(false)
    if (!validate()) return
    const entry = {
      name: form.name.trim(),
      className: form.className.trim(),
      rollNo: parseInt(form.rollNo, 10)
    }
    setStudents((prev) => [entry, ...prev])
    setForm({ name: '', className: '', rollNo: '' })
    setErrors({})
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(147,197,253,0.08),transparent_40%)]" />

      <div className="relative max-w-3xl mx-auto px-6 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Student Entry Form</h1>
          <p className="text-blue-200/80 mt-2">Enter Name, Class, and Roll No. Submit to add to the list below.</p>
        </header>

        <form onSubmit={handleSubmit} className="bg-slate-800/60 backdrop-blur border border-blue-500/20 rounded-2xl p-6 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g., Aisha Khan"
                className={`w-full px-3 py-2 rounded-lg bg-slate-900/70 border ${errors.name ? 'border-red-400' : 'border-blue-500/30'} focus:outline-none focus:ring-2 focus:ring-blue-500/60`}
              />
              {errors.name && <p className="text-red-300 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Class</label>
              <input
                type="text"
                value={form.className}
                onChange={(e) => setForm({ ...form, className: e.target.value })}
                placeholder="e.g., 10-B"
                className={`w-full px-3 py-2 rounded-lg bg-slate-900/70 border ${errors.className ? 'border-red-400' : 'border-blue-500/30'} focus:outline-none focus:ring-2 focus:ring-blue-500/60`}
              />
              {errors.className && <p className="text-red-300 text-xs mt-1">{errors.className}</p>}
            </div>

            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Roll No</label>
              <input
                type="text"
                inputMode="numeric"
                value={form.rollNo}
                onChange={(e) => setForm({ ...form, rollNo: e.target.value })}
                placeholder="e.g., 17"
                className={`w-full px-3 py-2 rounded-lg bg-slate-900/70 border ${errors.rollNo ? 'border-red-400' : 'border-blue-500/30'} focus:outline-none focus:ring-2 focus:ring-blue-500/60`}
              />
              {errors.rollNo && <p className="text-red-300 text-xs mt-1">{errors.rollNo}</p>}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
            {submitted && (
              <span className="text-green-300 text-sm">Saved!</span>
            )}
          </div>
        </form>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Submitted Students</h2>
          {students.length === 0 ? (
            <p className="text-blue-200/70">No entries yet. Fill the form and submit.</p>
          ) : (
            <ul className="space-y-3">
              {students.map((s, idx) => (
                <li key={idx} className="flex items-center justify-between bg-slate-800/60 border border-blue-500/20 rounded-xl p-4">
                  <div>
                    <p className="font-medium">{s.name}</p>
                    <p className="text-sm text-blue-200/80">Class: {s.className}</p>
                  </div>
                  <span className="text-blue-300/90 text-sm">Roll No: {s.rollNo}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}

export default App
