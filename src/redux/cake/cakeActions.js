import { BUY_CAKE } from './cakeTypes'
export const buyCake = (number) => {
  const quantity = number ? number : 1;
  console.log("inside buyCake", quantity);
  
  return {
    type: BUY_CAKE,
    payload: quantity,
  };
};