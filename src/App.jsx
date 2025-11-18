import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [studentClass, setStudentClass] = useState('')
  const [rollNo, setRollNo] = useState('')
  const [students, setStudents] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !studentClass || !rollNo) {
      alert('Please fill all fields')
      return
    }
    setStudents([{ name, studentClass, rollNo }, ...students])
    setName('')
    setStudentClass('')
    setRollNo('')
  }

  return (
    <div style={{ minHeight: '100vh', padding: 20, fontFamily: 'sans-serif', background: '#f6f8fb' }}>
      <h1 style={{ textAlign: 'center' }}>Student Entry Form</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: 520, margin: '16px auto', padding: 16, background: 'white', borderRadius: 12, boxShadow: '0 6px 18px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'grid', gap: 12 }}>
          <label>
            <div style={{ fontSize: 12, marginBottom: 4 }}>Name</div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Aisha Khan"
              style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #d1d5db' }}
            />
          </label>

          <label>
            <div style={{ fontSize: 12, marginBottom: 4 }}>Class</div>
            <input
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              placeholder="e.g. 10-B"
              style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #d1d5db' }}
            />
          </label>

          <label>
            <div style={{ fontSize: 12, marginBottom: 4 }}>Roll No</div>
            <input
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              placeholder="e.g. 17"
              inputMode="numeric"
              style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #d1d5db' }}
            />
          </label>

          <button type="submit" style={{ padding: '10px 14px', border: 0, background: '#2563eb', color: 'white', borderRadius: 8, cursor: 'pointer' }}>
            Submit
          </button>
        </div>
      </form>

      <div style={{ maxWidth: 520, margin: '0 auto' }}>
        <h2>Submitted Students</h2>
        {students.length === 0 ? (
          <p>No entries yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 8 }}>
            {students.map((s, i) => (
              <li key={i} style={{ padding: 12, background: 'white', borderRadius: 10, border: '1px solid #e5e7eb' }}>
                <div><strong>Name:</strong> {s.name}</div>
                <div><strong>Class:</strong> {s.studentClass}</div>
                <div><strong>Roll No:</strong> {s.rollNo}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
