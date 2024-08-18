import {NomHardDiskBrandCreateDto} from "./nom-hard-disk-brand-create.dto";
import {NomHardDiskBrandInterface} from "../../interfaces/nom-hard-disk-brand-interface";

export class NomHardDiskBrandUpdateDto extends NomHardDiskBrandCreateDto {
  public id: number;

  constructor(element?: Partial<NomHardDiskBrandInterface>) {
    super(element);
    this.id = element!.id!;
  }
}
