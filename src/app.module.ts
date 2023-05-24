import { Module } from '@nestjs/common';
import { EventsGateway } from './web.socket/events.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [EventsGateway],
})
export class AppModule {}
