import { Component, inject, Input, OnInit } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap-model';
import { NgStyle, NgClass, UpperCasePipe, TitleCasePipe, DatePipe, DecimalPipe } from '@angular/common';
import { FaceSnapsService } from '../face-snaps-service';

@Component({
  selector: 'app-face-snap',
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, DecimalPipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})
export class FaceSnap implements OnInit{
  @Input() faceSnapModel! : FaceSnapModel
  snapped!: boolean
  buttonText!: string
  private dataService = inject(FaceSnapsService)

  ngOnInit(): void {
    this.snapped = false
    this.buttonText = "Oh Snap!"
  }

  onSnap() {
    if(this.snapped) {
      this.snapped = false
      this.dataService.SnapFaceSnapById(this.faceSnapModel.id, 'unsnap')
      this.buttonText = "Oh Snap!"
    }
    else {
      this.snapped = true
      this.dataService.SnapFaceSnapById(this.faceSnapModel.id, 'snap')
      this.buttonText = "Oups unSnap!"
    }
  }
}
