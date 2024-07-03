import { Teacher } from './Teacher';

export namespace Subjects {
    export class Subject {
        private _teacher: Teacher;

        constructor(teacher: Teacher) {
            this._teacher = teacher;
        }

        get teacher(): Teacher {
            return this._teacher;
        }

        setTeacher(teacher: Teacher): void {
            this._teacher = teacher;
        }
    }
}
