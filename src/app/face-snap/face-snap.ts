import { Component, inject, Input, OnInit } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap-model';
import { NgStyle, NgClass, TitleCasePipe, DatePipe, DecimalPipe } from '@angular/common';
import { FaceSnapsService } from '../face-snaps-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, DecimalPipe, RouterLink],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})
export class FaceSnap implements OnInit{
  @Input() faceSnapModel! : FaceSnapModel
  snapped!: boolean
  isSingleView: boolean = false
  buttonText!: string
  private dataService = inject(FaceSnapsService)
  private routeInformation = inject(ActivatedRoute)
  private route = inject(Router)

  ngOnInit(): void {
    this.snapped = false
    this.buttonText = "Oh Snap!"

    //dans le cas où le component est généré pour afficher un faceSnap unique
    const faceSnapModelId = this.routeInformation.snapshot.params["id"] //snapshot pour avoir l'état courant de la route
    if(faceSnapModelId) {
      this.faceSnapModel = this.dataService.getFaceSnapById(faceSnapModelId)
      this.isSingleView = true
    }
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

  singleView() {
    this.route.navigateByUrl(`facesnaps/${this.faceSnapModel.id}`)
  }
}
