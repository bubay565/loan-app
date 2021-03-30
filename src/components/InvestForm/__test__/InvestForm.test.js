import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import InvestForm from '../InvestForm'

describe('<InvestForm/>', () => {
  const defaultProps = {
    id: 1,
    available: "10,000",
    onSubmitHandler: jest.fn()
  }

  it('renders component', () => {
    render(<InvestForm {...defaultProps} />)
    expect(screen.getByLabelText(/Investment amount \(£\)/i)).toBeInTheDocument()
    expect(screen.getByText('invest')).toBeInTheDocument()
  })

  const setup = () => {
    const utils = render(<InvestForm {...defaultProps}/>)
    const input = utils.getByLabelText(/Investment amount \(£\)/i)
    return {
      input,
      ...utils
    }
  }

  it('accepts input correctly', () => {
    const { input } = setup()
    expect(input.value).toBe('')
    fireEvent.change(input, { target: { value: '1234' } })
    expect(input.value).toBe('1234')
  })

  it('should not allow letters', () => {
    const { input } = setup()
    expect(input.value).toBe('')
    fireEvent.change(input, { target: { value: 'testing' } })
    expect(input.value).toBe('')
  })

  it('should allow input to be deleted', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '2300' } })
    expect(input.value).toBe('2300')
    fireEvent.change(input, { target: { value: '' } })
    expect(input.value).toBe('')
  })
})
