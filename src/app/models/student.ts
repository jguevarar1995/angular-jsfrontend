export class Student {
    id?: number;
    doc_number: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    grade: number;
    course: string;
    score: number;
    active: number;

    constructor(doc_number: number, first_name: string, last_name: string, email: string, phone: string, grade: number, course: string, score: number, active: number) {
        this.doc_number = doc_number;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.grade = grade;
        this.course = course;
        this.score = score;
        this.active = active;
    }
}
