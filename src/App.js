import { Provider } from 'react-redux';
import store from './redux/store';
import Quote from './Quote/Quote';

const App = () => {
  return (
    <Provider store={store}>
      <Quote />
    </Provider>
    
  );
}

export default App;
