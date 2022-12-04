import { OptionsObject, SnackbarMessage, useSnackbar } from "notistack";

export const useEnqueueSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const alert = (message: SnackbarMessage, options?: OptionsObject) => {
    enqueueSnackbar(message, options);
  };

  const error = (message: SnackbarMessage) => {
    alert(message, { variant: "error" });
  };

  const success = (message: SnackbarMessage) => {
    alert(message, { variant: "success" });
  };

  const warning = (message: SnackbarMessage) => {
    alert(message, { variant: "warning" });
  };

  return { alert, error, success, warning };
};
