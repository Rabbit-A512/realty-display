import { ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { AppError } from './app-error';
import { throwError } from 'rxjs';
import { Unauthorized } from './unauthorized';
import { BadInput } from './bad-input';
import { NotFound } from './not-found';

export class AppErrorHandler extends ErrorHandler {
  handleError(error) {
    alert('An unexpected error occurred.');
    alert(error);
    console.log(error);
  }
}

export function handleServiceError(error: Response) {
  if (error.status === 400) {
    return throwError(new BadInput(error));
  } else if (error.status === 401) {
    return throwError(new Unauthorized(error));
  } else if (error.status === 404) {
    return throwError(new NotFound(error));
  } else {
    return throwError(new AppError(error));
  }
}
