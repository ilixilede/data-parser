// types.ts
export interface ParsedData {
  id: number;
  name: string;
  values: number[];
}

export interface ParseOptions {
  delimiter: string;
  quoteChar: string;
}

export type ParseCallback = (error: Error | null, data: ParsedData[]) => void;

export enum DataType {
  CSV,
  JSON,
  XML,
}

export class ParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ParseError';
  }
}