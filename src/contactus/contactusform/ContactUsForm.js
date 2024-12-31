import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './ContactUsForm.css';

function ContactUsForm() {
  const [formData,setFormData] = useState({
    name:'',
    phone:"",
    email:"",
    topic:"",
    message:""
  })

  const [formError,setFormError] = useState({
    name:"",
    phone:"",
    email:"",
    topic:"",
    message:""
  })

  const handleChange = (e)=>{
    const {name,value}= e.target;
    setFormData((prevValue)=>({
      ...prevValue,
      [name]:value,
    }))
  }

const handleSubmit = async (e)=>{
  e.prevenDefault();

  setFormError({
    name:"",
    phone:"",
    email:"",
    tpic:"",
    message:""
  })

  if(!formData.name){
    setFormError((prevErrors)=>({
      ...prevErrors,
      name:'Name is required',
    }))
  }
  if(!formData.email){
    setFormError((prevErrors)=>({
      ...prevErrors,
      email:"email is required",
    }))
  }
  if(!formData.phone){
    setFormError((prevErrors)=>({
      ...prevErrors,
      phone:'phone number is required',
    }))
  }
  if(!formData.topic){
    setFormError((prevErrors)=>({
      ...prevErrors,
      topic:'topic name is required',
    }))
  }
  if(!formData.message){
    setFormError((prevErrors)=>({
      ...prevErrors,
      message:'message is required',
    }))
  }

  setFormData({
    name:"",
    emial:"",
    phone:"",
    topic:"",
    message:"",
  })
}
  return (
    <>
    <div className="pt-[80px] pb-[80px] bg-[#F5F5F5]">
          <div className="container contactus-form">
            <Form onSubmit={handleSubmit}>
              <div className="flex w-[100%]">
                <Form.Group className='w-[50%] me-4 mb-[30px]'>
                  <Form.Control type='text' placeholder='Name*'
                  name='name'
                  value={formData.name}
                  onChange={(e)=>{
                    handleChange(e);
                    setFormError((prevErrors)=>({
                      ...prevErrors,
                      name:"",
                    }))
                  }}
                  isInvalid={!!formData.name}
                  />
                  <Form.Control.Feedback type="invalid">{formError.name}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='w-[50%] mb-[30px]'>
                  <Form.Control type='number' placeholder='Phone*'
                  name='phone'
                  value={formData.phone}
                  onChange={(e) => {
                    handleChange(e);
                    setFormError((prevErrors) => ({ ...prevErrors, phone: "" }));
                  }}
                   isInvalid={!!formData.phone}
                  />
                   <Form.Control.Feedback type="invalid">{formError.phone}</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="flex w-[100%]">
                <Form.Group className='w-[50%] me-4 mb-[30px]'>
                  <Form.Control type='email' placeholder='Email*'
                  name='email'
                  value={formData.email}
                  onChange={(e) => {
                    handleChange(e);
                    setFormError((prevErrors) => ({ ...prevErrors, email: "" }));
                  }}
                  isInvalid={!!formData.email}
                  />
                   <Form.Control.Feedback type="invalid">{formError.email}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='w-[50%] mb-[30px]'>
                  <Form.Control type='text' placeholder='Topic'
                  name='topic'
                  value={formData.topic}
                  onChange={(e)=>{
                    handleChange(e);
                    setFormError((prevErrors)=>({...prevErrors,topic:""}))
                  }}
                  isInvalid={!!formData.topic}
                  />
                   <Form.Control.Feedback type="invalid">{formError.topic}</Form.Control.Feedback>
                </Form.Group>
              </div>
              <Form.Group className='mb-[30px]'>
              <Form.Control
               as="textarea"
              placeholder="Message"
              className='h-[250px]'
              name="message"
              value={formData.message}
              onChange={(e)=>{
                handleChange(e);
                setFormError((prevErrors)=>({...prevErrors,message:""}))
              }}
              isInvalid={!!formData.message}
              />
               <Form.Control.Feedback type="invalid">{formError.message}</Form.Control.Feedback>
                </Form.Group>
                <div className="text-center">
                <button className="uppercase text-center bg-[#141414] text-[14px] font-[600] text-white pt-[18px] pb-[18px] ps-[50px] pe-[50px]" type='submit'>
                  send Message
                </button>
                </div>
            </Form>
          </div>
      </div>
    </>
  )
}

export default ContactUsForm
