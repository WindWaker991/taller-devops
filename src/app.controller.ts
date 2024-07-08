import {
    Controller,
    Get,
} from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  getMany() {
    return 'Commit de prueba 1';
  }

}
