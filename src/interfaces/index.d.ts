interface ILoginResponse {
  message?: string;
  token?: {
    access_token: string;
    refresh_token: string;
  };
}

interface IBreadcrumNav {
  label: string;
  link?: string;
}

interface IAuthState {
  refreshToken: string | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}

interface ISchedule {
  _id?: string;
  courseType: string;
  moduleName: string;
  lecturerName: string;
  group: string;
  roomName: string;
  blockName: string;
  startTime: string;
  endTime: string;
}
interface IScheduleState {
  allSchedules: ISchedule[];
}
