import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnapModel } from '../models/face-snap-model';
import { AsyncPipe, DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../face-snaps-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  imports: [ReactiveFormsModule, AsyncPipe, TitleCasePipe, DatePipe, DecimalPipe],
  templateUrl: './new-face-snap.html',
  styleUrl: './new-face-snap.scss'
})
export class NewFaceSnap implements OnInit{
  faceForm!: FormGroup
  private formBuilder: FormBuilder = inject(FormBuilder)
  faceSnapPreview$!: Observable<FaceSnapModel>
  private dataService: FaceSnapsService = inject(FaceSnapsService)
  private route = inject(Router)
  errorMessage? : string
  private urlRegExp : RegExp = /(https?:\/\/)?([a-zA-Z0-9.-]+)\.[a-z]{2,6}(\S*)?$/

  ngOnInit(): void {
    this.faceForm = this.formBuilder.group({
      // valeur d'exemple
      title: ['pointe de nantaux', Validators.required],
      description: ["Pointe de Nantaux vue du Col de Tavaneuse dans la commune de Saint-Jean-d'Aulps, Haute-Savoie, France", Validators.required],
      imageUrl: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Pointe_de_Nantaux_06.jpg/2560px-Pointe_de_Nantaux_06.jpg", [Validators.required, Validators.pattern(this.urlRegExp)]],
      nameLocation: ["Saint-Jean-d'Aulps"],
      mapLocation: ["https://www.google.com/maps/place/Pointe+de+Nantaux/@46.3088455,6.2290678,118730m/data=!3m1!1e3!4m6!3m5!1s0x478c1dc02332de55:0x1d08ab2c05b79e30!8m2!3d46.2263888!4d6.71!16s%2Fg%2F122090zb?authuser=0&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D", Validators.pattern(this.urlRegExp)]
    })
    this.faceSnapPreview$ = this.faceForm.valueChanges.pipe(map(values => ({
      ...values,
      createdAt: new Date(),
      snaps: 0
    })))
  }

  //avec reactive form
  onSubmit() {
    console.log(this.faceForm.value)
    console.log(this.faceForm.valid)
    if(this.faceForm.valid) {
      const result = this.dataService.addFaceSnap(this.faceForm.value)
      console.log(this.dataService.getFaceSnaps())
      result ? this.route.navigateByUrl("/facesnaps") : this.errorMessage = "échec de l'enregistrement !"
    }
  }
}
