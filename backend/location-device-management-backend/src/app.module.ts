import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { LocationsModule } from './locations/locations.module';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule,
    LocationsModule,
    DevicesModule,
  ],
})
export class AppModule {}