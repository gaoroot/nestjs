import { Injectable } from "@nestjs/common";
import {Cron, CronExpression} from "@nestjs/schedule";

@Injectable()
export class CronService {
  constructor() {
    }
     @Cron(CronExpression.EVERY_10_MINUTES)
    handleCron() {
        console.log('Вызывается каждые 10 минут');
    }

    // @Cron(CronExpression.EVERY_10_SECONDS, {name: 'test'})
    // readTest() {
    //   // read test.json evry 10 minutes
    //   const fs = require('fs');
    //   const path = require('path');
    //   const filePath = path.join(__dirname, '../files/test.json');
    //   const data = fs.readFileSync(filePath, 'utf8');
    //   console.log(data.toString());
    // }
}
