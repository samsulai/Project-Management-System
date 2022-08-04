import Header from './components/Header'

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import Home from './pages/Home';



const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache : new InMemoryCache,
});


function App() {
  return (
   
   <>
   <ApolloProvider client={client}>
    <Router>
   <Header />
   <div className="container">
   <Routes>
   <Route path='/' element={<Home />} />
              <Route path='/projects/:id' element={<Project />} />
              <Route path='*' element={<NotFound />} />

   </Routes>
   </div>
    </Router>
   </ApolloProvider>
   </>

  );
}

export default App;
