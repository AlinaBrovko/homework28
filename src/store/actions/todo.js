export const ACTION_ADD_TODO = "ACTION_ADD_TODO";
export function add(payload) {
  return { type: ACTION_ADD_TODO, payload };
}

export const ACTION_CHANGE_STATUS = "ACTION_CHANGE_STATUS";
export function changeStatus(payload) {
  return { type: ACTION_CHANGE_STATUS, payload };
}
