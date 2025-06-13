import express from 'express';
import invoiceRoutes from './routes/invoiceRoutes';

const app = express();

app.use('/api/invoices', invoiceRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Invoice API');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}
);