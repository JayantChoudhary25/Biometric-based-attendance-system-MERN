import axios from 'axios';

const TEACHER_API_BASE_URL = "http://localhost:8000/auth/teacher";

class TeacherService {

    getTeacher(){
        return axios.get('http://localhost:8000/api/auth/teacher/get_all_teacher');
    }

    createTeacher(teacher){
        return axios.post(TEACHER_API_BASE_URL, teacher);
    }

    getAllTeacher(teacherId){
        return axios.get(TEACHER_API_BASE_URL + '/' + teacherId);
    }

    updateTeacher(teacher, teacherId){
        return axios.post(TEACHER_API_BASE_URL + '/' + teacherId, teacher);
    }

    deleteTeacher(teacherId){
        return axios.delete(TEACHER_API_BASE_URL + '/' + teacherId);
    }
}

export default new TeacherService()