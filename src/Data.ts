export interface Data {
    reports : {
        id : string,
        source : string,
        amount : number,
        created_at : Date,
        updated_at : Date,
        type : ReportType
    } []
}

export enum ReportType  {
    INCOME = "Income",
    EXPENCE = "Expense"
}

export const data : Data = {
    reports : [
        {
            id : "uuid1",
            source :  "Salary",
            amount : 7500,
            created_at : new Date(),
            updated_at : new Date(),
            type : ReportType.INCOME
        },
        {
            id : "uuid2",
            source :  "YouTube",
            amount : 10000,
            created_at : new Date(),
            updated_at : new Date(),
            type : ReportType.INCOME
        },
        {
            id : "uuid3",
            source :  "Food",
            amount : 5000,
            created_at : new Date(),
            updated_at : new Date(),
            type : ReportType.EXPENCE
        }
    ]
}