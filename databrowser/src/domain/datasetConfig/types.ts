import { SourceType } from './source/types';
import { SupportedDomains } from '../openApi/types';

export interface PropertyConfig {
  title: string;
  component: string;
  fields: Record<string, string>;
  params?: Record<string, string>;
  class?: string;
  tooltip?: string;
  required?: boolean;
}

export interface FilterConfig {
  name: string;
  component: string;
  params?: Record<string, unknown>;
}

export interface ListElements extends PropertyConfig {
  filter?: FilterConfig;
}

export interface DetailElements {
  name: string;
  slug: string;
  subcategories: {
    name: string;
    properties: PropertyConfig[];
  }[];
}

export interface EditElements {
  name: string;
  slug: string;
  subcategories: {
    name: string;
    properties: {
      title: string;
      component: string;
      fields: Record<string, string>;
      params?: Record<string, string>;
      class?: string;
      required?: boolean;
      tooltip?: string;
      reference?: {
        url: string;
        labelSelector: string;
        keySelector: string;
      };
    }[];
  }[];
}

export type PathParams = string[];

export interface DatasetRoute {
  domain: SupportedDomains;
  pathParams: PathParams;
  id?: string;
}

export interface DatasetDescription {
  title?: string;
  subtitle?: string;
  description?: string;
}

export interface TableViewElements {
  elements: ListElements[];
}
export interface DetailViewElements {
  elements: DetailElements[];
}
export interface QuickViewElements {
  elements: Record<string, unknown>[];
}
export interface EditViewElements {
  elements: EditElements[];
}

export type ListViewConfig = TableViewElements;
export type DetailViewConfig = DetailViewElements;
export type QuickViewConfig = QuickViewElements;
export type EditViewConfig = EditViewElements;
export type RawViewConfig = unknown;
export type NewViewConfig = unknown;

export interface Operation {
  rolesAllowed: string[];
}

export interface DatasetConfig {
  source: SourceType;
  baseUrl: string;
  route: DatasetRoute;
  description: DatasetDescription;
  views?: {
    detail?: DetailViewConfig;
    edit?: EditViewConfig;
    new?: NewViewConfig;
    quick?: QuickViewConfig;
    raw?: RawViewConfig;
    table?: ListViewConfig;
  };
  operations?: {
    readAll?: Operation;
    read?: Operation;
    create?: Operation;
    update?: Operation;
    delete?: Operation;
  };
}

export type ViewKey = keyof Required<DatasetConfig>['views'];

export const View: Record<Uppercase<ViewKey>, ViewKey> = {
  DETAIL: 'detail',
  EDIT: 'edit',
  NEW: 'new',
  QUICK: 'quick',
  RAW: 'raw',
  TABLE: 'table',
} as const;

export type OperationKey = keyof Required<DatasetConfig>['operations'];

export type Operations = NonNullable<DatasetConfig['operations']>;

export type DatasetDomain = string;
