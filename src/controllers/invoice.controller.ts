import { Request, Response } from 'express';

// Create a new invoice
export const createInvoice = (req: Request, res: Response) => {
  // For now, just echo back the received data
  const invoiceData = req.body;
  res.status(201).json({
    message: 'Invoice created successfully',
    invoice: invoiceData,
  });
};