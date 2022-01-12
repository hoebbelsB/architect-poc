import { DashboardModel } from '@architect-poc/dashboards/domain';
import { DashboardGetDto, DashboardPostDto } from './dashboard.dto';

// maps client model to server model in case of POST request
export function clientToServerPost(obj: DashboardModel): DashboardPostDto {
  const {name, link, active} = obj;
  return {
    name, link: link || '', active: !!active
  };
}

// maps any response from the server to client model
export function serverToClient(obj: DashboardGetDto): DashboardModel {
  const {deletionDate, ...dashboard} = obj;
  const creationDate = +obj.creationDate;
  return {
    ...dashboard,
    creationDate: creationDate,
    icon: creationDate > 3 ? 'x' : 'y'
  };
}
