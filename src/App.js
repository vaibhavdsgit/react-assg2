import {QueryClientProvider, QueryClient} from 'react-query';

import Assignment2 from './components/Assignment2';
import { Assg2 } from './components/Assg2';
import './App.css';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Assg2/>
        {/* <Assignment2 /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
