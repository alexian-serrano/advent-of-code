import { NumericCalibrationDocumentParser } from './numeric-calibration-document-parser';

describe('NumericCalibrationDocumentParser', () => {
  let calibrationDocumentParser: NumericCalibrationDocumentParser;

  beforeEach(() => {
    calibrationDocumentParser = new NumericCalibrationDocumentParser();
  });

  it('parses the calibration document', () => {
    const documentPath = `${__dirname}/numeric-calibration-document-test.txt`;

    const result = calibrationDocumentParser.parse(documentPath);

    expect(result).toEqual([12, 38, 15, 77]);
  });
});
