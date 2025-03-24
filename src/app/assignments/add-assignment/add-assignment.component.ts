import { Component, /*EventEmitter, Output*/ } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
  selector: 'app-add-assignment',
  imports: [CommonModule, FormsModule, MatInputModule,
    MatButtonModule, MatFormFieldModule, MatDatepickerModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {

  //@Output() nouvelAssignment = new EventEmitter<Assignment>();

  constructor (private assignmentsService: AssignmentsService) {};

  // FOR THE FORM INPUT FIELDS
  assignmentName = "";
  assignmentDueDate!:Date;
  addAssignment() {
    const newAssignment = new Assignment();
    newAssignment.name = this.assignmentName;
    newAssignment.dueDate = this.assignmentDueDate;
    newAssignment.submitted = false;

    //this.nouvelAssignment.emit(newAssignment);
    this.assignmentsService.addAssignment(newAssignment).subscribe(message => console.log(message));
  }
}
