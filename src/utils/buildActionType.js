import {APP_NAME} from '../constants';

const buildActionType = (reducerName, actionType) =>
  `@${APP_NAME}/${reducerName}/${actionType}`.toUpperCase();

export default buildActionType;
