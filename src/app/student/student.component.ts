import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {CanvasWhiteboardComponent, CanvasWhiteboardOptions, CanvasWhiteboardUpdate, CanvasWhiteboardService} from 'ng2-canvas-whiteboard';

@Component({
  selector: 'app-student',
  viewProviders: [CanvasWhiteboardComponent],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  isCanvasOpened: boolean;
  constructor(private _canvasWhiteboardService: CanvasWhiteboardService) { 
  }
 

  canvasOptions: CanvasWhiteboardOptions = {
    drawButtonEnabled: true,
    drawButtonClass: "drawButtonClass",
    drawButtonText: "Draw",
    clearButtonEnabled: true,
    clearButtonClass: "clearButtonClass",
    clearButtonText: "Clear",
    undoButtonText: "Undo",
    undoButtonEnabled: true,
    redoButtonText: "Redo",
    redoButtonEnabled: true,
    colorPickerEnabled: true,
    saveDataButtonEnabled: true,
    saveDataButtonText: "Save",
    lineWidth: 5,
    strokeColor: "rgb(0,0,0,1)",
    fillColor: "rgba(0, 0, 0, 0)",
    shouldDownloadDrawing: true,
    drawingEnabled : true,
    shapeSelectorEnabled: true,
    showShapeSelector : true
  };
  getDrawingHistory(){
   
  } 
  @Output() onClear = new EventEmitter<any>();
  @Output() onBatchUpdate = new EventEmitter<CanvasWhiteboardUpdate[]>();
  @Output() onImageLoaded = new EventEmitter<any>();
  @Output() onUndo = new EventEmitter<any>();
  @Output() onRedo = new EventEmitter<any>();
  @Output() onSave = new EventEmitter<string | Blob>();

  onCanvasDraw(event) {
  console.log("event", event);
  }
  
  ngOnInit() {
    this.isCanvasOpened = true;
    if (this.isCanvasOpened) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 1);
    }
  }

}
