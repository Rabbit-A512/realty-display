import { ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';

export class AppErrorHandler extends ErrorHandler {
  handleError(error) {
    alert('An unexpected error occurred.');
    console.log(error);
  }
}
