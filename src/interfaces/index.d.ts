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
    lecturerName: string;
    group: string;
    roomName: string;
    blockName: string;
    startTime: string;
    endTime: string;
    day: string;
    classType: string;
}
interface IScheduleState {
    allSchedules: ISchedule[];
}
