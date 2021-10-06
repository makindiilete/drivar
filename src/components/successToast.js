import { toast } from "react-toastify";

export const toastError = (msg) => {
  return toast.error(
    `😥 Oops! ${msg === undefined ? "Something went wrong" : msg}`
  );
};

export const toastSuccess = (msg) => {
  return toast.success(`👍 Yay! ${msg === undefined ? "Done" : msg}`);
};
