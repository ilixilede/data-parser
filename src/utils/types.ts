// types.ts
export interface DataParserConfig {
  inputFilePath: string;
  outputFilePath: string;
  dateFormat: string;
}

export interface ParsedData {
  id: number;
  name: string;
  date: Date;
}

export type DataType = 'string' | 'number' | 'date';

export interface FieldMapping {
  sourceField: string;
  targetField: string;
  dataType: DataType;
}

export interface ParseResult {
  success: boolean;
  message: string;
  parsedData: ParsedData[];
}

export enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
}