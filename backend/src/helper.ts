export const Helper = async (promise: any) => {
  try {
    const data = await promise;
    return [data, null];
  } catch (e) {
    return [null, e];
  }
};
