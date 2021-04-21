import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('unecspected error');
    console.log(error);
  }
}