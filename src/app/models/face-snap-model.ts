
export class FaceSnapModel {
  nameLocation?: string
  mapLocation?: string
  value?: number

  // déclaration et initialistion simplié (raccourci TypeScript)
  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public snaps: number,
    public imageUrl: string) {}

    addSnap() {
      this.snaps++
    }

    removeSnap() {
      this.snaps--
    }

    setNameLocation(namelocation : string) {
      this.nameLocation = namelocation
    }
    setMapLocation(mapLocation : string) {
      this.mapLocation = mapLocation
    }
}
