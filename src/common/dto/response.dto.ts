export interface IResponseDto<T> {
    statusCode: number;
    status: 'success' | 'fail';
    message: string;
    data?: T;  
    errors?: any;
  }
  