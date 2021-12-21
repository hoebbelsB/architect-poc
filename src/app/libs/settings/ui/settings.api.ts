import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SettingsStateModel} from "../domain";
import { SettingsType } from '../domain/settings-type';

export { SettingsStateModel, SettingsType };

@Injectable()
export abstract class SettingsApi {
    abstract settingsState$: Observable<SettingsStateModel>;
    abstract clearHistory(): void;
    abstract showSettings(type: SettingsType | null): void;
}
