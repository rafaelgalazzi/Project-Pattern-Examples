export class Order {
  public id: number;
  constructor() {
    this.id = Math.ceil(10000 * Math.random());
  }
}
