import { TextAndNumericCalibrationDocumentParser } from './text-and-numeric-calibration-document-parser';

describe('TextAndNumericCalibrationDocumentParser', () => {
  let calibrationDocumentParser: TextAndNumericCalibrationDocumentParser;

  beforeEach(() => {
    calibrationDocumentParser = new TextAndNumericCalibrationDocumentParser();
  });

  it('parses the calibration document', () => {
    const documentPath = `${__dirname}/text-and-numeric-calibration-document-test.txt`;

    const result = calibrationDocumentParser.parse(documentPath);

    expect(result).toEqual([29, 83, 13, 24, 42, 14, 76, 32]);
  });
});
