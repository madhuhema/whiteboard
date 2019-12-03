import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import {CanvasWhiteboardModule} from 'ng2-canvas-whiteboard';
import { StudentRoutingModule } from './student-routing.module';


@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    CanvasWhiteboardModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
