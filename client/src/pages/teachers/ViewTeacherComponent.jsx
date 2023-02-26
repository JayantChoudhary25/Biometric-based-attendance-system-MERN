import React, { Component } from 'react'
import TeacherService from '../../utils/edit_teacher';

class ViewTeacherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            teachers: {}
        }
    }

    componentDidMount(){
        TeacherService.getTeacherById(this.state.id).then( res => {
            this.setState({teachers: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Teachers Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Teachers First Name: </label>
                            <div> { this.state.teachers.teacher_name }</div>
                        </div>
                        <div className = "row">
                            <label> Teachers email : </label>
                            <div> { this.state.teachers.email }</div>
                        </div>
                        <div className = "row">
                            <label> phone_number: </label>
                            <div> { this.state.teachers.phone_number }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTeacherComponent