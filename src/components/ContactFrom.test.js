import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders ContactFrom without errors', () => {
    render(<ContactForm/>);
});

test("User can fill out and submit form", async () => {
    //Arrange//
    render(<ContactForm/>); 

    //Act//
    //1. access to form fields and button//
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    const button = screen.getByRole('button');

    //2. text to field and button click//
    act(() => {
        fireEvent.change(firstNameInput, { target:{ value: 'Chad'}});
        fireEvent.change(lastNameInput, { target:{ value: 'Cox'}});
        fireEvent.change(emailInput, { target:{ value:'chadwcox@me.com'}});
        fireEvent.change(messageInput, { target:{ value:"Hi I'm Chad"}});
        fireEvent.click(button);
    });
    expect(firstNameInput.value).toEqual('Chad')

        
    //Assert//
    //Is text on screen//
    

})