import React from 'react'
import { render, screen } from '@testing-library/react'
import Overview from './Overview'

describe('<Overview />', () => {
  test('renders', () => {
    render(<Overview />)
    screen.debug()
  })
})
