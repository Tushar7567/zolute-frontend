import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { One, Two, Three, Four } from './Components';
import { LayoutOne, LayoutTwo } from './Layouts';
import { useState, useEffect } from 'react';


function Adaptor() {

    
    // dynamic api call
    const useGet = (url) => {
        const [data, setData] = useState(null);
    
        useEffect(() => {
          axios.get(url)
            // .then((res) => res.data)
            .then((data) => setData(data))
            .catch((err) => setData(err))
        }, [url]);
      
        return [data];
    }

    const usePost = ({url, inputData}) => {
        const [data, setData] = useState(null);
    
        useEffect(() => {
          axios.post(url, {inputData})
            // .then((res) => res.data)
            .then((data) => setData(data))
            .catch((err) => setData(err))
        }, [url]);
      
        return [data];
    }

    const usePut = ({url, inputData}) => {
        const [data, setData] = useState(null);
    
        useEffect(() => {
          axios.put(url,{inputData})
            // .then((res) => res.data)
            .then((data) => setData(data))
            .catch((err) => setData(err))
        }, [url]);
      
        return [data];
    }

    const useDelete = (url) => {
        const [data, setData] = useState(null);
    
        useEffect(() => {
          axios.delete(url)
            // .then((res) => res.data)
            .then((data) => setData(data))
            .catch((err) => setData(err))
        }, [url]);
      
        return [data];
    }


  return (
    <BrowserRouter>
      <h3>Content of main App component</h3>
      <ul>
        <li><Link to="/one">One</Link></li>
        <li><Link to="/two">Two</Link></li>
        <li><Link to="/three">Three</Link></li>
        <li><Link to="/four">Four</Link></li>
      </ul>

      <Switch>
        <RouteWrapper path="/one" component={One} layout={LayoutOne} />
        <RouteWrapper path="/two" component={Two} layout={LayoutOne} />
        <RouteWrapper path="/three" component={Three} layout={LayoutTwo} />
        <RouteWrapper path="/four" component={Four} layout={LayoutTwo} />
      </Switch>
    </BrowserRouter>
    
  );
}

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

export {
    Adaptor,
    useGet,
    usePost,
    usePut,
    useDelete
 };

