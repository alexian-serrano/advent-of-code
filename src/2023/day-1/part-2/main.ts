import { TextAndNumericCalibrationDocumentParser } from '../calibration-document-parser/text-and-numeric-calibration-document-parser';

const main = () => {
  const calibrationDocumentParser = new TextAndNumericCalibrationDocumentParser();
  const calibrationDocumentPath = `${__dirname}/../calibration-document.txt`;

  const calibrationValues = calibrationDocumentParser.parse(calibrationDocumentPath);

  const sumOfCalibrationValues = calibrationValues.reduce((acc, calibrationValue) => acc + calibrationValue, 0);

  console.log(`The sum of the calibration values is ${sumOfCalibrationValues}`);
};

main();
