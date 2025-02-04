import { DatasetConfig } from '../../../domain/datasetConfig/types';
import { domains } from '../../../domain/openApi';
import { weatherInfoDescription } from './weatherInfo.description';
import { weatherInfoOperations } from './weatherInfo.operations';
import { weatherInfoViews } from './weatherInfo.views';
import { weatherInfoRoute } from './weatherInfo.route';

export const weatherInfoConfig: DatasetConfig = {
  source: 'embedded',
  baseUrl: domains.tourism.baseUrl,
  route: weatherInfoRoute,
  description: weatherInfoDescription,
  views: weatherInfoViews,
  operations: weatherInfoOperations,
};
