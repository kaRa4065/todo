const ApiRequest = async (url = "", object = null, errorMsg = null) => {
  try {
    const theData = await fetch(url, object);
    if (!theData.ok) throw Error("Please reload");
  } catch (err) {
    errorMsg = err.message;
  } finally {
    return errorMsg;
  }
};

export default ApiRequest;
