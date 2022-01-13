import { DashboardModel } from '@architect-poc/dashboards/domain';

export type DashboardListItem = Pick<DashboardModel, 'id' | 'name'>;
