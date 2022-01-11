import { DashboardModel } from '@architect-poc/dashboards/domain';
import { DashboardListItem } from './dashboard-feature.model';

export function stateToFeature(obj: DashboardModel): DashboardListItem {
  return { id: obj.id, name: obj.name };
}
