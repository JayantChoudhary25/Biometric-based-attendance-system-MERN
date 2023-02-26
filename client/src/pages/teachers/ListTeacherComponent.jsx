import React, { Component } from 'react'
import TeacherService from '../../utils/edit_teacher';

class ListTeacherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                teachers: []
        }
        this.editTeacher = this.editTeacher.bind(this);
        this.deleteTeacher = this.deleteTeacher.bind(this);
    }

    deleteTeacher(_id){
        TeacherService.deleteTeacher(_id).then( res => {
            this.setState({teachers: this.state.teachers.filter(teachers => teachers._id !== _id)});
        });
    }
    viewTeacher(_id){
        this.props.history.push(`/view-teachers/${_id}`);
    }
    editTeacher(_id){
        this.props.history.push(`/add-teachers/${_id}`);
    }

    componentDidMount(){
        TeacherService.getTeacher().then((res) => {
            this.setState({ teachers: res.data});
        });
    }


    render() {
        return (
            <div>
                 <h2 className="text-center">Teachers List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTeacher}> Add Teacher</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Teacher Name</th>
                                    <th> Email</th>
                                    <th> Phone Number</th>
                                    <th> Subject</th>
                                    <th> Class</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.teachers.map(
                                        teachers => 
                                        <tr key = {teachers._id}>
                                             <td> {teachers.teacher_name} </td>   
                                             <td> {teachers.email}</td>
                                             <td> {teachers.phone_number}</td>
                                             <td> {teachers.subject}</td>
                                             <td> {teachers._class}</td>
                                             <td>
                                                 <button onClick={ () => this.editTeacher(teachers._id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTeacher(teachers._id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTeacher(teachers._id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListTeacherComponent