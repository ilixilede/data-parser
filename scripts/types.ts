// types.ts

export interface ParsedData {
    id: string;
    timestamp: Date;
    payload: Record<string, unknown>;
}

export enum DataFormat {
    JSON = 'JSON',
    XML = 'XML',
    CSV = 'CSV',
}

export interface ParserOptions {
    format: DataFormat;
    strictMode: boolean;
    delimiter?: string;
}

export type ParseFunction = (rawData: string, options: ParserOptions) => ParsedData;