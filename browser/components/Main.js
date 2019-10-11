import React, { Component } from 'react'
import axios from 'axios'

import StudentList from './StudentList'
import SingleStudent from './SingleStudent'

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      selectedStudent: {}
    }

    this.selectStudent = this.selectStudent.bind(this)
  }

  componentDidMount() {
    this.getStudents()
  }

  async getStudents() {
    try {
      const { data } = await axios.get('/student')
      this.setState({ students: data })
    } catch (err) {
      console.error(err)
    }
  }

  selectStudent(student) {
    return this.setState({
      selectedStudent: student
    })
  }

  render() {
    return (
      <div>
        <StudentList
          students={this.state.students}
          selectStudent={this.selectStudent}
        />
        {
          this.state.selectedStudent.id
          ? <SingleStudent student={this.state.selectedStudent} />
          : null
        }
      </div>
    )
  }
}
