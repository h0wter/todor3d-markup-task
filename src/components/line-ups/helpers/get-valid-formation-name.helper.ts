const getValidFormationName = (name: string): string => {
  return name.split("/")[0].split("-").join(" - ");
};

export { getValidFormationName };
