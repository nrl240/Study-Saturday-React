import React from 'react'

const SingleStudent = (props) => {

  const { student } = props

  const calculateAverage = (tests) => {
    const grades = tests.map(test => test.grade)
    const total = grades.reduce((acc, curr) => acc + curr)
    return Math.round(total / grades.length)
  }

  return (
    <div>
      <h2>{student.fullName}</h2>
      <h3>Average grade: {calculateAverage(student.tests)}%</h3>
      <table>
        <tbody>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
          <td>
            {
              student.tests.map(test => (
                <tr key={test.id}>
                  <td>{test.subject}</td>
                  <td>{test.grade}%</td>
                </tr>
              ))
            }
          </td>
        </tbody>
      </table>
    </div>
  )
}

export default SingleStudent
