
export class FaceSnapModel {
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
}
