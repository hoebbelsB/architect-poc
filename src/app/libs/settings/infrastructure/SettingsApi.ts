import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {SettingsStateModel} from "../domain";

@Injectable()
export abstract class SettingsApi {
    abstract settingsState$: Observable<SettingsStateModel>;
    abstract clearHistory(): void;
}