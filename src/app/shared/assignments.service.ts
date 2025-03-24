import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments:Assignment[] = [
    {
      id:1,
      name: "Assignment 1",
      dueDate: new Date("2021-01-01"),
      submitted: true
    },
    {
      id:2,
      name: "Assignment 2",
      dueDate: new Date("2021-02-01"),
      submitted: true
    },
    {
      id:3,
      name: "Assignment 3",
      dueDate: new Date("2021-03-01"),
      submitted: false
    }
  ];

  constructor(private loggingService:LoggingService) { }

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }

  getAssignment(id:number):Observable<Assignment|undefined> {
    const a:Assignment|undefined = this.assignments.find( a => a.id == id);

    return of(a);
  }

  addAssignment(assignment: Assignment): Observable<String> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.name, "ajouté");

    return of('Assignment ajouté');
  }

  updateAssignment(assignment: Assignment): Observable<String> {

    return of('Assignment service: assignment modifié');
  }

  deleteAssignment(assignment: Assignment): Observable<String> {
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);

    return of("assignmnt service: assignment supprimé");
  }

}
