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

type roomName =
  | 'LT-01 WULFRUNA'
  | 'LT-03 WALSALL'
  | 'SR-01 BANTOK'
  | 'SR-02 BILSTON'
  | 'SR-03 WOLVES'
  | 'TR-02 STAFFORD'
  | 'TR-03 WESTBROMWICH'
  | 'LAB-01 MANDAR'
  | 'LAB-02 MOSELEY'
  | 'BASANTAPUR'
  | 'CHANDRAGIRI'
  | 'SAGARMATHA';

export interface ISchedule {
  _id?: string;
  courseType: 'BIT' | 'BIBM' | 'IMBA';
  moduleName: string;
  teacherName: string;
  classType: 'LECTURE' | 'TUTORIAL' | 'WORKSHOP';
  group: string;
  roomName: roomName;
  blockName: 'HCK' | 'WLV';
  day: string;
  startTime: string;
  endTime: string;
  status: 'Running' | 'Upcoming' | 'Cancelled' | 'Postponed' | 'Completed';
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
