import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import store from './redux/store';
import { Provider } from 'react-redux';

const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
const target = document.getElementById('root');
render(rootComponent, target);

