import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getUsers() {
    return [{ id: 1, name: 'Sanya' }];
  }
}
