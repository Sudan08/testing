interface loginPayload {
  email: string;
  password: string;
  rememberMe?: boolean;
}
interface ILoginResponse {
  message?: string;
  email: string;
  scope: string;
  accessToken: string;
  refreshToken: string;
}

interface IBreadcrumNav {
  label: string;
  link?: string;
}

interface IAuthState {
  refreshToken: string | null;
  accessToken: string | null;
  scope: string | null;
  isAuthenticated: boolean;
}

interface ISchedule {
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
interface IScheduleState {
  allSchedules: ISchedule[];
}

export interface IStudent {
  course: string;
  level: string;
}

export interface IDeleteRoutineResponse {
  error?: Object;
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
  claimDetails?: {
    receiversName?: string;
    level?: string;
    group?: string;
    semester?: string;
    course?: string;
  };
}
