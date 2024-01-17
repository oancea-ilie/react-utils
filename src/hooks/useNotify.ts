import { ToastOptions, toast } from 'react-toastify';

const generalOptions: ToastOptions = {
  hideProgressBar: true,
};

function useNotify() {
  const notify = (msg: string) => toast(msg, { hideProgressBar: true });

  const notifySuccess = (msg: string) => toast.success(msg, generalOptions);

  const notifyError = (msg: string) => toast.error(msg, generalOptions);

  const notifyInfo = (msg: string) => toast.info(msg, generalOptions);

  const notifyWarn = (msg: string) => toast.warn(msg, generalOptions);

  return { notify, notifySuccess, notifyError, notifyInfo, notifyWarn };
}

export default useNotify;
