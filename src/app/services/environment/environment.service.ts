import {Inject, Injectable, InjectionToken} from '@angular/core';
import { IEnvironmentInterface } from "../../../environments/IEnvironmentInterface";

export const API_URL = new InjectionToken<IEnvironmentInterface>('api.url');

@Injectable()

export class EnvironmentService {

  private readonly environment: IEnvironmentInterface
  constructor(@Inject(API_URL) environment: IEnvironmentInterface) {
    this.environment = environment
  }

  getApiUrl():string {
    return this.environment.apiUrl
  }
}
