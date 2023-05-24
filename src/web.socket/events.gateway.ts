import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(81, { allowEIO3: true, transports: ['websocket'] }) // Socket Server 세팅
export class EventsGateway
  implements OnGatewayConnection, OnGatewayInit<Server>
{
  @WebSocketServer() private readonly server: Server;

  public handleConnection(client: Socket) {
    const connect = client.connected;
    console.log(connect);
    console.log(client.id);
  }

  public afterInit(server: Server) {
    return this.server.emit(
      'data',
      'get provider in this data on power ball lists',
    );
  }

  // @SubscribeMessage('events') // event 라는 유형의 message 를 받게되면 onEvent 함수를 작동
  // private onEvent(
  //   @MessageBody() message: string,
  //   @ConnectedSocket() client: Socket,
  // ): void {
  //   console.log(client.id);
  //   this.server.emit('events', message);
  // }
}
