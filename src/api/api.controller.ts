import { Body, Controller, Post } from '@nestjs/common';

@Controller('api')
export class ApiController {
    @Post('data')
    public recieveData(@Body() data: any) {
        console.log('Received data:', data); // Log the raw data received
        // Process the data as per your requirements
    }
}
