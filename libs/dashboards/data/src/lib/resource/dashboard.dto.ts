export interface DashboardGetDto {
  id: string;
  name: string;
  link?: string;
  active?: boolean;
  creationDate: string;
  deletionDate: string;
}

export interface DashboardPostDto {
  name: string;
  link: string;
  active: boolean;
}

export interface DashboardPutDto {
  id: string;
  name?: string;
  link?: string;
  active?: boolean;
  creationDate?: string;
  deletionDate?: string;
}

export interface DashboardDeleteDto {
  id: string;
}
