import { Modal, Button, Table, Form } from 'react-bootstrap'
import { StockData } from '@pages/Trade'
import { useEffect, useState } from 'react';
import { CompanyMethods } from '@utils/index'

interface TradeModalProps {
  show: boolean;
  hide: () => void;
  selectedStock: StockData;
}

interface Financials {
  "52WeekHigh": number;
  "52WeekHighDate": string;
  "52WeekLow": number;
  "52WeekLowDate": string;
}

function TradeModal({ show, hide, selectedStock }: TradeModalProps): JSX.Element | null {

  if (!selectedStock) return null

  const company = new CompanyMethods()

  const [financials, setFinancials] = useState<Financials | null>(null)
  const [price, setPrice] = useState<number | null>(null)

  useEffect(() => {
    if (show && selectedStock) {
      const getStockData = async () => {
        const financialData = await company.getFinancials(selectedStock.symbol)
        setFinancials(financialData)
        const quote = await company.getQuote(selectedStock.symbol)
        setPrice(quote.c)
      }
      getStockData()
    }
  }, [show, selectedStock])

  return (
    <Modal
      centered show={show}
      onHide={hide}
      backdrop='static'
      size='lg'
      >
      <Modal.Header closeButton>
        <Modal.Title>{`${selectedStock.name || selectedStock.description} (${selectedStock.symbol})`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Historical Price Chart will go HERE</p>
        <Table borderless>
          <tbody>
            <tr>
              <td>Current Share Price:</td>
              <td>{price != null ? `$${price}` : 'Temporarily unavailable.'}</td>
            </tr>
            <tr>
              <td>Shares Owned:</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Cash Balance:</td>
              <td>$100,000</td>
            </tr>
            <tr>
              <td>Buying Power:</td>
              <td>50 shares</td>
            </tr>
          </tbody>
        </Table>
      <p>TRADE</p>
        <Form>
          <Form.Group>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className='btn btn-secondary' onClick={hide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TradeModal