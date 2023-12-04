export abstract class CalibrationDocumentParser {
  abstract parse(documentPath: string): number[];
}
