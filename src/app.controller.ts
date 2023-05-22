import { Controller, Get, Param } from "@nestjs/common";

@Controller('report/:type')

export class AppController {

  @Get(':id')
  getIncomeReportById (@Param('id') id :number, @Param('type') type : string ) {
    return {
      "id" : id,
      "type" : type
    };
  }
  
}