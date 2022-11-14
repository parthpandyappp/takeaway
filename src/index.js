import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider, RestaurantManager } from './context';
import { Toaster } from 'react-hot-toast';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Router>
            <UserProvider>
                <RestaurantManager>
                    <App />
                </RestaurantManager>
            </UserProvider>
        </Router>
    </React.StrictMode>
);