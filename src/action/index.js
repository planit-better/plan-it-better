
export const LOAD_CONTRACTORS = 'LOAD_CONTRACTORS';
export const LOAD_EQUIPMENT = 'LOAD_EQUIPMENT';
export const LOAD_GUEST = 'LOAD_GUEST';
export const LOAD_MENU = 'LOAD_MENU';
export const LOAD_TASK = 'LOAD_TASK';

export const loadContractors = contractors =>{
  return {
    type : LOAD_CONTRACTORS,
    contractors
  };
};

export const loadEquipment = equipment =>{
  return {
    type : LOAD_EQUIPMENT,
    equipment
  };
};

export const loadGuest = guest => {
  return {
    type : LOAD_GUEST,
    guest
  };
};

export const loadMenu = menu => {
  return {
    type : LOAD_MENU,
    menu
  };
};

export const loadTask = task => {
  return {
    type : LOAD_TASK,
    task
  };
};
