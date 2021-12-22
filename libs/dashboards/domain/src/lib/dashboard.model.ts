import { DashboardSettings } from './dashboard-settings.model';

export interface Dashboard {
  id: string;
  name: string;
  link?: string;
  active?: boolean;
  icon?: string;
  settings?: DashboardSettings;
}
