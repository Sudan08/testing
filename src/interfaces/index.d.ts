export interface loginPayload {
  email: string;
  password: string;
  rememberMe?: boolean;
}
export interface ILoginResponse {
  message?: string;
  email: string;
  scope: string;
  accessToken: string;
  refreshToken: string;
}

export interface IBreadcrumNav {
  label: string;
  link?: string;
}

export interface IAuthState {
  refreshToken: string | null;
  accessToken: string | null;
  scope: string | null;
  isAuthenticated: boolean;
}

export interface ISchedule {
  _id?: string;
  courseType: string;
  moduleName: string;
  teacherName: string;
  classType: string;
  group: string;
  roomName: string;
  blockName: string;
  day: string;
  startTime: string;
  endTime: string;
  status: string;
}
export interface IScheduleState {
  allSchedules: ISchedule[];
}

export interface IStudent {
  course: string;
  level: string;
}

export interface IDeleteRoutineResponse {
  error?: Record<string, unknown>;
}
export interface ILostAndFoundState {
  allItems: ILostAndFound[];
}
export interface ILostAndFound {
  _id?: string;
  itemName: string;
  noOfItems: number;
  category: string;
  itemDescription: string;
  foundBy: string;
  location: string;
  foundDate: string;
  depositedTo: string;
  status: 'CLAIMED' | 'PENDING';
  receiversName?: string;
  level?: string;
  group?: string;
  semester?: string;
  course?: string;
}
