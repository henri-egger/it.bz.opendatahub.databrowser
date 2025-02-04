import { Operations } from '../../../domain/datasetConfig/types';
import {
  extendCreateRoles,
  extendDeleteRoles,
  extendUpdateRoles,
  ROLE_READ,
} from '../roles';

export const skiRegionOperations: Operations = {
  readAll: {
    rolesAllowed: ROLE_READ,
  },
  read: {
    rolesAllowed: ROLE_READ,
  },
  create: {
    rolesAllowed: extendCreateRoles(['SkiRegionManager', 'SkiRegionCreate']),
  },
  update: {
    rolesAllowed: extendUpdateRoles(['SkiRegionManager', 'SkiRegionUpdate']),
  },
  delete: {
    rolesAllowed: extendDeleteRoles(['SkiRegionManager', 'SkiRegionDelete']),
  },
};
