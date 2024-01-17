import { CssBaseline, ThemeProvider } from '@mui/joy';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { theme } from './joy/overrides/theme';
import 'react-toastify/dist/ReactToastify.css';

function AppWrapper() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  );
}

export default AppWrapper;
