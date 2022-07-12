let tab = [1, 2, 3, 4, 5];
const sum = (tab, index) => {
  if (!tab[index]) {
    return 0;
  }
  return tab[index] + sum(tab, index);
};
console.log(sum(tab, 0));
