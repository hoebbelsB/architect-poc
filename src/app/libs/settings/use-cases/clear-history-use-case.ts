import { Injectable } from '@angular/core';
import {SettingsDataPort} from "./ports/infrastructure/settings-data-port.service";
import {tap} from "rxjs/operators";
import {SpacesDataPort} from "../../settings/use-cases";

@Injectable({ providedIn: 'root' })
export class ClearHistoryUseCase {
    constructor(
        private readonly spacesData: SpacesDataPort,
        private readonly localState: SettingsDataPort
        ) {
        this.spacesData.clearHistory$.pipe(
            tap(() => console.log('ClearHistoryUseCase')),
            tap(() => this.localState.clearHistory())
        ).subscribe();
    }
}
