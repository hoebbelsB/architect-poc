import { Injectable } from '@angular/core';
import { SpacesDataPort } from '../../use-cases';
import {SpacesStoreFacade} from "../../../global-store/spaces-store.facade";

@Injectable({ providedIn: 'root' })
export class SpacesStoreService implements SpacesDataPort {
    readonly clearHistory$ = this.spacesStateStore.clearActionTriggered$;

    constructor(private readonly spacesStateStore: SpacesStoreFacade) {
    }
}
