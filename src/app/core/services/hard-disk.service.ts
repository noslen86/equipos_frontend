import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HardDiskService {

  private hardDiskList: BehaviorSubject<any> = new BehaviorSubject<any>([])

  constructor() { }

  updateHardDiskListData(data: any) {
    this.hardDiskList.next(data);
  }

  emitHardDiskListData() {
    return this.hardDiskList.asObservable();
  }
}
