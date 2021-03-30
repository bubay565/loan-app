import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Popup from '../Popup'

const defaultProps = {
  loan: [{
    id: "1",
    title: "Voluptate et sed tempora qui quisquam.",
    available: "11,959",
    term_remaining: "864000"
  }],
  onClose: jest.fn(),
  onSubmitHandler: jest.fn()
}
describe('<Popup />', () => {
  it('renders Popup component', () => {
    render(<Popup {...defaultProps}/>)
  })
  
  it('closes popup when close button clicked', () => {
    render(<Popup {...defaultProps}/>)
    const closeBtn = screen.getByText('Close')
    expect(closeBtn).toBeInTheDocument()
    userEvent.click(closeBtn)
    expect(defaultProps.onClose).toHaveBeenCalled()
  })
})
