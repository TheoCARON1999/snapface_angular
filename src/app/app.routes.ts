import { Routes } from '@angular/router';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { Homepage } from './homepage/homepage';
import { FaceSnap } from './face-snap/face-snap';

export const routes: Routes = [
    {path: 'facesnaps', component: FaceSnapList},
    {path: '', component: Homepage},
    {path: 'facesnaps/:id', component: FaceSnap}
];
