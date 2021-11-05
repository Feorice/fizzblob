export enum Status {
  error = 'error',
  success = 'success',
}

export enum Message {
  error = 'Fluzz Blopp encountered an error!',
  success = 'Fluzz Blopp was successful!',
  nan = 'Please provide only valid numbers for start and end parameters!',
}

export const response = (
  data: (string | number)[] | [],
  status: Status,
  message?: Message
) => {
  return {
    status,
    message: message || Message[status],
    data,
  };
};
