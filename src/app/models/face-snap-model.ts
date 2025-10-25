import { SnapType } from "./snap-type"

export class FaceSnapModel {
  nameLocation?: string
  mapLocation?: string
  value?: number
  id : string

  // déclaration et initialistion simplié (raccourci TypeScript)
  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public snaps: number,
    public imageUrl: string) {
      this.id = crypto.randomUUID().substring(0, 10)
    }

    addSnap() {
      this.snaps++
    }

    removeSnap() {
      this.snaps--
    }

    snap(state : SnapType) {
      if(state === 'snap') {
        this.addSnap()
      } else if(state === 'unsnap') {
        this.removeSnap()
      }
    }

    setNameLocation(namelocation : string) : FaceSnapModel {
      this.nameLocation = namelocation
      return this
    }
    setMapLocation(mapLocation : string) : FaceSnapModel {
      this.mapLocation = mapLocation
      return this
    }

    withLocation(nameLocation? : string, mapLocation? : string) : FaceSnapModel {
      this.nameLocation = nameLocation
      this.mapLocation = mapLocation
      return this
    }

    setValue(value : number) : FaceSnapModel {
      this.value = value
      return this
    }
}
