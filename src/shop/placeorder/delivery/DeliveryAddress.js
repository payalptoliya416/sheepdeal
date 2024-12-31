import React, { useState } from 'react';
import { Accordion, Form, FormCheck, FormGroup } from 'react-bootstrap';

function DeliveryAddress() {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  return (
    <>
      <Accordion.Item eventKey="1" className='mb-4 border-0 shadow-md'>
      <Accordion.Header className='border-0'>
            <div className='uppercase flex font-[600]'>
                <div className="w-[18px] h-[18px] bg-gray-200 text-[12px] me-3 flex items-center justify-center rounded-sm">2</div>
              delivery Address
            </div>
        </Accordion.Header>
        <Accordion.Body>
        <Form>
            <div className="border-b pb-3">
      <FormGroup className='flex'>
        <FormCheck
          type="radio"
          id="option1"
          label=""
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
          className='cursor-pointer'
        />
        <div>
        <div className='flex '>
            <h4 className='text-[16px] font-bold me-3 mb-0'>Ashish Makvana</h4>
            <span className="bg-gray-200 text-[10px]  text-gray-800 me-3 p-[4px]">Work</span>
            <span>9324957867</span>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam harum labore velit.</p>
        <button className='text-[18px] uppercase bg-[#FF8E78] pt-2 pb-2 ps-3 pe-3 text-white'>Deliver here</button>
        </div>
      </FormGroup>
            </div>
            <div className="pb-3 pt-3">
      <FormGroup className='flex'>
        <FormCheck
          type="radio"
          id="option2"
          label=""
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
          className='cursor-pointer'
        />
        <div>
        <div className='flex '>
            <h4 className='text-[16px] font-bold me-3 mb-0'>Ashish Makvana</h4>
            <span className="bg-gray-200 text-[10px]  text-gray-800 me-3 p-[4px]">Home</span>
            <span>9324957867</span>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam harum labore velit.</p>
        </div>
      </FormGroup>
            </div>
    </Form>
        </Accordion.Body>
      </Accordion.Item>
    </>
  )
}

export default DeliveryAddress
