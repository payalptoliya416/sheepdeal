import React, { useState } from 'react';
import { Accordion, FormCheck, FormGroup ,Form} from 'react-bootstrap';

function PaymentOption() {
    const [selectedOption, setSelectedOption] = useState('upi');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
       <Accordion.Item eventKey="3" className='mb-4 border-0 shadow-md'>
        <Accordion.Header className='border-0'>
            <div className='uppercase flex font-[600]'>
                <div className="w-[18px] h-[18px] bg-gray-200 text-[12px] me-3 flex items-center justify-center rounded-sm">4</div>
               Payment options
            </div>
        </Accordion.Header>
        <Accordion.Body>
         <div className='border-b border-solid border-gray-200  pb-3'>
            <Form>
            <FormGroup className='flex'>
        <FormCheck
          type="radio"
          id="upi"
          label=""
          value="upi"
          checked={selectedOption === 'upi'}
          onChange={handleOptionChange}
          className='cursor-pointer'
        />
        <div>
            <h3 className='text-[16px]  mb-[5px]'> UPI</h3>
            <p className='text-[12px] mb-0'>Pay by any UPI app</p>
        </div>
      </FormGroup>
            </Form>
         </div>
         <div className='border-b border-solid border-gray-200 pt-3 pb-3'>
            <Form>
            <FormGroup className='flex'>
        <FormCheck
          type="radio"
          id="Wallets"
          label=""
          value="Wallets"
          checked={selectedOption === 'Wallets'}
          onChange={handleOptionChange}
          className='cursor-pointer'
        />
        <div>
            <h3 className='text-[16px]  mb-[5px]'> Wallets</h3>
        </div>
      </FormGroup>
            </Form>
         </div>
         <div className='border-b border-solid border-gray-200 pt-3 pb-3'>
            <Form>
            <FormGroup className='flex'>
        <FormCheck
          type="radio"
          id="Card"
          label=""
          value="Card"
          checked={selectedOption === 'Card'}
          onChange={handleOptionChange}
          className='cursor-pointer'
        />
        <div>
            <h3 className='text-[16px] mb-[5px]'> Credit / Debits / ATM Card </h3>
            <p className='text-[12px] mb-0'>add and secure cards as per RBI guidelines</p>
        </div>
      </FormGroup>
            </Form>
         </div>
         <div className='border-b border-solid border-gray-200 pt-3 pb-3'>
            <Form>
            <FormGroup className='flex'>
        <FormCheck
          type="radio"
          id="Banking"
          label=""
          value="Banking"
          checked={selectedOption === 'Banking'}
          onChange={handleOptionChange}
          className='cursor-pointer'
        />
        <div>
            <h3 className='text-[16px]  mb-[5px]'> Net Banking</h3>
            <p className='text-[12px] mb-0'>This Instrument  has low success,use UPI or cards for better experience</p>
        </div>
      </FormGroup>
            </Form>
         </div>
         <div className='border-b border-solid border-gray-200 pt-3 pb-3'>
            <Form>
            <FormGroup className='flex'>
        <FormCheck
          type="radio"
          id="EMI"
          label=""
          value="EMI"
          checked={selectedOption === 'EMI'}
          onChange={handleOptionChange}
          className='cursor-pointer'
        />
        <div>
            <h3 className='text-[16px] uppercase mb-[5px]'> EMI (Easy installments)</h3>
        </div>
      </FormGroup>
            </Form>
         </div>
         <div className='pt-3'>
            <Form>
            <FormGroup className='flex'>
        <FormCheck
          type="radio"
          id="Cash"
          label=""
          value="Cash"
          checked={selectedOption === 'Cash'}
          onChange={handleOptionChange}
          className='cursor-pointer'
        />
        <div>
            <h3 className='text-[16px] uppercase mb-[5px]'> Cash on Delivery</h3>
        </div>
      </FormGroup>
            </Form>
         </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  )
}

export default PaymentOption
