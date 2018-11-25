import { InjectionToken } from '@angular/core';

/**
 * We're providing browser apis with tokens to improve testing capabilities.
 * */
export const ZO_WINDOW = new InjectionToken<Window>('Window');
export const ZO_DOCUMENT = new InjectionToken<Document>('Document');