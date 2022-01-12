import { DashboardSettings } from './dashboard-settings.model';

export interface DashboardModel {
  id: string;
  name: string;
  link?: string;
  active?: boolean;
  icon?: string;
  settings?: DashboardSettings;
  creationDate: number;
}
