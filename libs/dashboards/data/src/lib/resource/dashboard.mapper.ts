import { DashboardModel } from '@architect-poc/dashboards/domain';
import { DashboardGetDto, DashboardPostDto } from './dashboard.dto';

export function clientToServerPost(obj: DashboardModel): DashboardPostDto {
  const {name, link, active} = obj;
  return {
    name, link: link || '', active: !!active
  };
}

export function serverToClient(obj: DashboardGetDto): DashboardModel {
  const {deletionDate, ...dashboard} = obj;
  const creationDate = +obj.creationDate;
  return {
    ...dashboard,
    creationDate: creationDate,
    icon: creationDate > 3 ? 'x' : 'y'
  };
}
