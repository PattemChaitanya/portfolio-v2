export const arrayRandomItem = (array: string[]) => {
  return array[(Math.random() * array.length) | 0];
};

export const getTransitions = (delay: number) => {
  return {
    transition: `all ${delay}s ease-in-out`,
  };
};
