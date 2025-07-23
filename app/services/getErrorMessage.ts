import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getReadableServerErrorMessage = (message: any) => {
  let errorMessage = "";
  if (typeof message === "string") {
    errorMessage = message;
  } else if (typeof message === "object") {
    Object.keys(message).forEach(function (key) {
      if (typeof message[key] === "string") {
        errorMessage = message[key];
      } else if (Array.isArray(message[key]) && message[key].length > 0) {
        if (typeof message[key][0] === "string") {
          if (errorMessage) {
            errorMessage += ",\n\r";
          }
          errorMessage += message[key][0];
        }
      }
      return;
    });
  }
  return errorMessage;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (error: any) => {
  const error_message = "Server Error";
  if (axios.isAxiosError(error)) {
    const responseData = error.response?.data;
    if (responseData && "status" in responseData && "data" in responseData) {
      return getReadableServerErrorMessage(responseData.data);
    } else if (responseData && "errors" in responseData) {
      return getReadableServerErrorMessage(responseData.errors);
    } else if (
      responseData &&
      "status" in responseData &&
      "message" in responseData
    ) {
      return getReadableServerErrorMessage(responseData.message);
    } else if (responseData && "message" in responseData) {
      return getReadableServerErrorMessage(responseData.message);
    } else {
      return error.message;
    }
  }

  if (typeof error == "object") {
    if (
      error.response &&
      error.response.data &&
      error.response.data.message &&
      error.response.data.message !== ""
    ) {
      return error.response.data.message;
    }
    if (
      error.response &&
      error.response.data &&
      error.response.data.status &&
      error.response.data.status === "Error"
    ) {
      if (
        error.response &&
        error.response.data &&
        error.response.data &&
        error.response.data.data &&
        typeof error.response.data.data == "object"
      ) {
        for (
          let i = 0;
          i < Object.values(error.response.data.data).length;
          i++
        ) {
          if (Array.isArray(Object.values(error.response.data.data)[i])) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return (Object.values(error.response.data.data)[i] as any)[0];
          }
          if (typeof Object.values(error.response.data.data)[i] == "string") {
            return Object.values(error.response.data.data);
          }
        }
      }
    }
    if (error.message && error.message !== "") {
      return error.message;
    }
  } else if (typeof error == "string" && error !== "") {
    return error;
  }

  return error_message;
};
