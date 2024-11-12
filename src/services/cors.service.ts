import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CorsService {
  private whitelist = [];

  constructor(config: ConfigService) {
    this.whitelist = config.get('cors.whitelistUrls');
  }

  getCorsConfig = () => ({
    origin: (origin: any, callback: any) => {
      if (!origin || this.whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
}
