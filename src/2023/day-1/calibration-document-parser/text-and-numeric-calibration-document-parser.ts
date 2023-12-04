import fs from 'fs';

import { CalibrationDocumentParser } from './calibration-document-parser.abstract';

export class TextAndNumericCalibrationDocumentParser extends CalibrationDocumentParser {
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
    const result = line.match(new RegExp(/(one|two|three|four|five|six|seven|eight|nine|\d)/));
    if (!result) {
      throw new Error('No number found');
    }

    return this.mapTextToNumber(result[0]);
  }

  private getLastNumber(line: string): number {
    const results = [...line.matchAll(new RegExp(/(?=(one|two|three|four|five|six|seven|eight|nine|\d))/, 'g'))];
    if (results.length === 0) {
      throw new Error('No number found');
    }

    return this.mapTextToNumber(results[results.length - 1][1]);
  }

  private mapTextToNumber(text: string): number {
    switch (text) {
      case 'one':
        return 1;
      case 'two':
        return 2;
      case 'three':
        return 3;
      case 'four':
        return 4;
      case 'five':
        return 5;
      case 'six':
        return 6;
      case 'seven':
        return 7;
      case 'eight':
        return 8;
      case 'nine':
        return 9;
      default:
        return Number(text);
    }
  }
}
