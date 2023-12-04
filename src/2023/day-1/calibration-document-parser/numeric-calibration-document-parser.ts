import fs from 'fs';

import { CalibrationDocumentParser } from './calibration-document-parser.abstract';

export class NumericCalibrationDocumentParser extends CalibrationDocumentParser {
  parse(documentPath: string): number[] {
    const fileContent = fs.readFileSync(documentPath, 'utf8');

    const lines = fileContent.split('\n');

    const calibrationValues: number[] = [];
    for (const line of lines) {
      const firstNumber = this.getFirstNumber(line);
      const lastNumber = this.getLastNumber(line);

      calibrationValues.push(Number(`${firstNumber}${lastNumber}`));
    }

    return calibrationValues;
  }

  private getFirstNumber(line: string): number {
    const firstNumber = line.split('').find((char) => {
      const numberValue = Number(char);
      return !isNaN(numberValue);
    });

    return Number(firstNumber);
  }

  private getLastNumber(line: string): number {
    const lastNumber = line
      .split('')
      .reverse()
      .find((char) => {
        const numberValue = Number(char);
        return !isNaN(numberValue);
      });

    return Number(lastNumber);
  }
}
