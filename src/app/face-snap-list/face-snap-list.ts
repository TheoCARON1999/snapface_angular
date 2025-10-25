import { Component, inject, Inject, OnInit } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap-model';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapsService } from '../face-snaps-service';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnap],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss'
})
export class FaceSnapList implements OnInit {

  faceSnaps!: FaceSnapModel[]

  private dataService = inject(FaceSnapsService)

  ngOnInit(): void {
      this.faceSnaps = this.dataService.getFaceSnaps()
  }

}
