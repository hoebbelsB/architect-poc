import { DashboardModel } from '@architect-poc/dashboards/domain';
import { DashboardListItem } from './feature-dashboard-list.model';

// maps state model to the model used in the container component's UI
export function stateToFeature(obj: DashboardModel): DashboardListItem {
  return { id: obj.id, name: obj.name };
}
