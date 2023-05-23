import { ReportType, data } from "./Data";
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

interface Report { 
  source : string,
  amount : number
}

@Injectable()
export class AppService {

  getAllReports(type : ReportType) {
    return data.reports.filter(report => report.type == type)
  }

  getReportById(type : ReportType, id : string) {
    return data.reports.filter((report) => report.type === type).find(report => report.id === id);
  }

  createReport = (type : ReportType, {amount,source} : Report) => {

    const newReport = {
      id : uuid(),
      amount,
      source,
      created_at : new Date(),
      updated_at : new Date(),
      type : type
    };

    data.reports.push(newReport)
    
    return newReport;

  }

  updateReport = (type : ReportType, id : string, {amount,source} : Report) => {
    const reportToUpdate = data.reports.filter((report) => report.type === type).find(report => report.id === id);

    if(!reportToUpdate) return;

    const reportIndex = data.reports.findIndex(report => report.id === id)

    data.reports[reportIndex] = {
      ...data.reports[reportIndex],
      amount,
      source,
      updated_at : new Date()
    }

    return data.reports[reportIndex];
  }

  deleteReport = (type : ReportType, id : string) => {
    const reportIndex = data.reports.findIndex(report => report.id === id && report.type === type)

    if(reportIndex == -1) return "Not Found !";

    delete data.reports[reportIndex];

    return "Deleted !";
  }

}