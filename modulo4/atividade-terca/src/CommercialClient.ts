import { Client } from "./client";
import { Commerce } from "./commerce";

export class CommercialClient extends Commerce implements Client {
  constructor(
    private CNPJ: string,
    floorsQuantity: number,
    cep: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,

  ) {
    super(floorsQuantity, cep);
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }

  public getCnpj(): string {
    return this.CNPJ;
  }
}