import { cameraConstants } from '../constants';

export function camera(state = [], action) {
  switch (action.type) {
    case cameraConstants.SNAPSHOT_SUCCESS:
      return state.concat(action.url)
    case cameraConstants.SNAPSHOT_FAILURE:
      return {
        message: action.msg,
      };
    default:
      return state
  }
}