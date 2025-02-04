import { Operations } from '../../../domain/datasetConfig/types';
import {
  extendCreateRoles,
  extendDeleteRoles,
  extendUpdateRoles,
  ROLE_READ,
} from '../roles';

export const tourismAssociationListOperations: Operations = {
  readAll: {
    rolesAllowed: ROLE_READ,
  },
  read: {
    rolesAllowed: ROLE_READ,
  },
  create: {
    rolesAllowed: extendCreateRoles([
      'TourismAssociationListManager',
      'TourismAssociationListCreate',
    ]),
  },
  update: {
    rolesAllowed: extendUpdateRoles([
      'TourismAssociationListManager',
      'TourismAssociationListUpdate',
    ]),
  },
  delete: {
    rolesAllowed: extendDeleteRoles([
      'TourismAssociationListManager',
      'TourismAssociationListDelete',
    ]),
  },
};
