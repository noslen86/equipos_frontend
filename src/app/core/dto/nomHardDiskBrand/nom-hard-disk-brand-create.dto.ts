import {NomHardDiskBrandInterface} from "../../interfaces/nom-hard-disk-brand-interface";

export class NomHardDiskBrandCreateDto {
  public name: string;

  constructor(element?: Partial<NomHardDiskBrandInterface>) {
    this.name = element?.name ?? '';
  }
}
