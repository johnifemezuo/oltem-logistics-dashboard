export const getinitials = (firstName?: string, lastName?: string) => {
  return firstName && lastName ? firstName.charAt(0) + lastName.charAt(0) : "";
};

export const truncateString = (str: string, num: number) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
