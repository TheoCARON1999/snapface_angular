import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap-model';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})
export class FaceSnap implements OnInit{
  @Input() faceSnapModel! : FaceSnapModel
  snapped!: boolean
  buttonText!: string

  ngOnInit(): void {
    this.snapped = false
    this.buttonText = "Oh Snap!"
  }

  onSnap() {
    if(this.snapped) {
      this.snapped = false
      this.faceSnapModel.removeSnap()
      this.buttonText = "Oh Snap!"
    }
    else {
      this.snapped = true
      this.faceSnapModel.addSnap()
      this.buttonText = "Oups unSnap!"
    }
  }
}
