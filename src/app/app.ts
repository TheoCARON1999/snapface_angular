import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { FaceSnapModel } from './models/face-snap-model';
import { FaceSnapList } from "./face-snap-list/face-snap-list";
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [FaceSnapList, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
