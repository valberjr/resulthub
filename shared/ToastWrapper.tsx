import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastWrapper = () => {
  return (
    <ToastContainer
      autoClose={3000}
      position="bottom-right"
      pauseOnHover={false}
    />
  );
};

export default ToastWrapper;
