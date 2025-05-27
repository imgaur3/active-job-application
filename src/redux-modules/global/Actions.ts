export const TOGGLE_SIDEBAR = 'global/TOGGLE_SIDEBAR';

export const toggleSidebar = (payload: unknown) => {
  return {
    type: TOGGLE_SIDEBAR,
    payload,
  };
};