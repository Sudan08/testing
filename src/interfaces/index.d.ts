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
    classType: string;
    group: string;
    roomName: string;
    blockName: string;
    day: string;
    startTime: string;
    endTime: string;
		status:string;
}
interface IScheduleState {
    allSchedules: ISchedule[];
}
