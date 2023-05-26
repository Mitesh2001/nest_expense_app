import { ReportType, data } from "./Data";
import { Injectable, } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ReportResponseDto } from "./dtos/report.dto";

interface Report { 
  source : string,
  amount : number
}

@Injectable()
export class AppService {

  getAllReports(type : ReportType) : ReportResponseDto[] {
    return data.reports.filter(report => report.type == type).map(report => new ReportResponseDto(report))
  }

  getReportById(type : ReportType, id : string) : ReportResponseDto {
    const report = data.reports.filter((report) => report.type === type).find(report => report.id === id);
    return new ReportResponseDto(report);
  }

  createReport = (type : ReportType, {amount,source} : Report) : ReportResponseDto => {

    const newReport = {
      id : uuid(),
      amount,
      source,
      created_at : new Date(),
      updated_at : new Date(),
      type : type
    };

    data.reports.push(newReport)

    return new ReportResponseDto(newReport);
    
  }

  updateReport = (type : ReportType, id : string, {amount,source} : Report) : ReportResponseDto => {
    const reportToUpdate = data.reports.filter((report) => report.type === type).find(report => report.id === id);

    if(!reportToUpdate) return;

    const reportIndex = data.reports.findIndex(report => report.id === id)

    data.reports[reportIndex] = {
      ...data.reports[reportIndex],
      amount,
      source,
      updated_at : new Date()
    }

    return new ReportResponseDto(data.reports[reportIndex]);

  }

  deleteReport = (type : ReportType, id : string) => {
    const reportIndex = data.reports.findIndex(report => report.id === id && report.type === type)

    if(reportIndex == -1) return "Not Found !";

    delete data.reports[reportIndex];

    return "Deleted !";
  }

}