export const getInitialsFrom = (names: string) => {
  return names
    .split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .toUpperCase();
};
