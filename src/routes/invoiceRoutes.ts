import {Router} from 'express';
import {createInvoice} from '../controllers/invoice.controller';
const router = Router();
// Route to create a new invoice
router.post('/', createInvoice);
// Route to get all invoices

export default router;