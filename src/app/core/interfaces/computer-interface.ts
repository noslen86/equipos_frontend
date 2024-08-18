import {HardDiskInterface} from "./hard-disk-interface";
import {CpuInterface} from "./cpu-interface";
import {OperatingSystemInterface} from "./operating-system-interface";
import {RamMemoryInterface} from "./ram-memory-interface";
import {TechnicalStatusInterface} from "./technical-status-interface";

export interface ComputerInterface {
  inventory: number;
  description?: string;
  location: string;
  hardDiskMain: HardDiskInterface;
  hardDiskSecondary: HardDiskInterface;
  micro: CpuInterface;
  operatingSystem: OperatingSystemInterface;
  ram: RamMemoryInterface;
  technicalStatus: TechnicalStatusInterface;
}
