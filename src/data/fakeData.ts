import { feedbackComponentType } from '../components/FeedbackComponent';

export type fakeDataType = {
  All: feedbackComponentType[];
  Bug: feedbackComponentType[];
  Compliment: feedbackComponentType[];
};
export const fakeData: fakeDataType = {
  All: [
    {
      done: true,
      title:
        'The best way to get a candid response from a customer is to simply ask for one. Since email enables you to send a one-to-one...',
      timestamp: {
        time: '7: 20 PM',
        day: 'June 6',
        fullDate: '2022 June 6',
      },
    },
    {
      done: false,
      title: 'lorem lorem lorem lorem lorem lorem lorem lorem',
      timestamp: {
        time: '7: 20 PM',
        day: 'June 6',
        fullDate: '2022 June 6',
      },
    },
    {
      done: true,
      title:
        'The best way to get a candid response from a customer is to simply ask for one. Since email enables you to send a one-to-one...',
      timestamp: {
        time: '7: 20 PM',
        day: 'June 6',
        fullDate: '2022 June 6',
      },
    },
  ],
  Bug: [
    {
      done: true,
      title: 'Just a buggy lorem lorem lorem lorem lorem lorem lorem lorem',
      timestamp: {
        time: '7: 20 PM',
        day: 'June 6',
        fullDate: '2022 June 6',
      },
    },
    {
      done: true,
      title: 'lorem lorem lorem lorem lorem lorem lorem lorem',
      timestamp: {
        time: '7: 20 PM',
        day: 'June 6',
        fullDate: '2022 June 6',
      },
    },
  ],
  Compliment: [
    {
      done: true,

      title: 'nice lorem lorem lorem lorem lorem lorem lorem lorem',
      timestamp: {
        time: '7: 20 PM',
        day: 'June 6',
        fullDate: '2022 June 6',
      },
    },
    {
      done: true,
      title: 'lorem lorem lorem lorem lorem lorem lorem lorem',
      timestamp: {
        time: '7: 20 PM',
        day: 'June 6',
        fullDate: '2022 June 6',
      },
    },
  ],
};
