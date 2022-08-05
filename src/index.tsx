import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento App',
          amount: 5000.0,
          type: 'deposit',
          category: 'Job',
          createdAt: new Date('2020-01-01 09:00:00'),
        },
        {
          id: 2,
          title: 'Desenvolvimento Website',
          amount: 5000.0,
          type: 'deposit',
          category: 'Job',
          createdAt: new Date('2020-02-02 09:00:00'),
        },
        {
          id: 3,
          title: 'Razer Viper Ultimate',
          amount: 900,
          type: 'withdraw',
          category: 'Periferics',
          createdAt: new Date('2020-01-10 09:00:00'),
        },
        {
          id: 4,
          title: 'Razer Huntsman Mini',
          amount: 699,
          type: 'withdraw',
          category: 'Periferics',
          createdAt: new Date('2020-01-10 09:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
