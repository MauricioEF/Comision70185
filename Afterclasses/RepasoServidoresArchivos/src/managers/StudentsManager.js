import fs from 'fs';

import { isSubset } from '../utils/sets.js';

const PATH = './src/files/students.json';

export default class StudentsManager {
    constructor(){
        if(!fs.existsSync(PATH)){
            this.init();
        }else{
            console.log("Students file found")
        }
    }
    async init(){
        //Aquí voy a crear el archivo
        await fs.promises.writeFile(PATH,JSON.stringify([]))
    }

    async getStudents(filters = {}) {
        const data = await fs.promises.readFile(PATH,'utf-8');
        const students = JSON.parse(data);
        const filteredStudents = students.filter(student=>isSubset(student,filters));
        return filteredStudents;
    }

    async getStudentById(studentId){
        const data = await fs.promises.readFile(PATH,'utf-8');
        const students = JSON.parse(data);
        const student = students.find(s => s.id === studentId);
        return student
    }
}