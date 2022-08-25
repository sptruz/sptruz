const toLowerKeys = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    delete obj[key];
    obj[key.toLowerCase()] = value;
  });

  return obj;
};

export default toLowerKeys;
