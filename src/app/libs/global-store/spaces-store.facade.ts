import { Injectable } from '@angular/core';
import {tap} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class SpacesStoreFacade {
  // readonly clearActionTriggered$ = this.spacesPort.clearActionHistory$;

  // constructor(private readonly spacesPort: SpacesPort) {
  //   console.log('sfsdfnsdklnflsdkfnl')
  //   this.clearActionTriggered$.pipe(
  //       tap(() => console.log('SpacesStoreFacade'))
  //   ).subscribe();
  // }
}
