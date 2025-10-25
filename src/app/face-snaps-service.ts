import { Injectable } from '@angular/core';
import { FaceSnapModel } from './models/face-snap-model';
import { SnapType } from './models/snap-type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  //TODO : get information from a database or a API
  private FaceSnaps : FaceSnapModel[] = [
    //example of information
    new FaceSnapModel("oiseaux", 
        "Couple d'aras jacinthes sous un arbre Ipê rose dans le Parque Estadual Encontro das Águas, Brésil", 
        new Date, 153, 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/007_Hyacinth_macaw_couple_under_Pink_Ip%C3%AA_tree_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent.jpg/1920px-007_Hyacinth_macaw_couple_under_Pink_Ip%C3%AA_tree_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent.jpg')
      .setNameLocation('Brésil').setValue(1708.45)

      , new FaceSnapModel("paysage nordique", 
        "Bouchons volcaniques près de l'extrémité sud de l'île Hall, réserve naturelle de la Terre François-Joseph, district de Primorsky, Russie", 
        new Date, 42, 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/%D0%9C%D1%8B%D1%81_%D0%A2%D0%B5%D0%B3%D0%B5%D1%82%D1%85%D0%BE%D1%84%D1%84_%D0%BD%D0%B0_%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2_%D0%93%D0%B0%D0%BB%D0%BB%D1%8F.jpg/1599px-%D0%9C%D1%8B%D1%81_%D0%A2%D0%B5%D0%B3%D0%B5%D1%82%D1%85%D0%BE%D1%84%D1%84_%D0%BD%D0%B0_%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2_%D0%93%D0%B0%D0%BB%D0%BB%D1%8F.jpg?20251010232021')
        .setValue(500)

      , new FaceSnapModel("bibliothèque", 
        "Salle de la bibliothèque baroque située dans le complexe Clementinum à Prague", 
        new Date, 71, 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Clementinum_baroque_library_2.jpg/1599px-Clementinum_baroque_library_2.jpg?20240413172100')
      .withLocation('Prague', 'https://www.google.com/maps/place/Clementinum/@50.08424,14.4097656,6842m/data=!3m1!1e3!4m6!3m5!1s0x470b94ef35324235:0xb234ae92107e0d9f!8m2!3d50.0865979!4d14.4160186!16zL20vMDU5dHk5?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D')
      .setValue(103.77)
      
      , new FaceSnapModel("paysage italien",
        "Vue depuis la Via Sottovenda, Monts Euganéens : Monte Rusta, Monte Cero et Monte Castello.",
        new Date, 58,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Parco_Regionale_dei_Colli_Euganei_2.jpg/1920px-Parco_Regionale_dei_Colli_Euganei_2.jpg'
      )
  ]
  
  getFaceSnaps() : FaceSnapModel[] {
    return [...this.FaceSnaps]
  }

  //update only the number of snaps
  SnapFaceSnapById(id : string, state : SnapType) {
    const foundFaceSnap = this.FaceSnaps.find(item => item.id === id)
    if(!foundFaceSnap) {
      throw new Error("FaceSnap not found")
    }
    foundFaceSnap.snap(state)
  }
}
