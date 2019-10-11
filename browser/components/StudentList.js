import React from 'react'

const StudentList = (props) => {

  return (
    <div>
      <h1>Students</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Tests</th>
          </tr>
          {
            props.students.map(student => {
              return (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                  <td onClick={() => props.selectStudent(student)}>Details</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
