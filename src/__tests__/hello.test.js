import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Hello from '../components/Hello'

let container = null;

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
}
)

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
}
)

it("<Hello />renders with or without a name", () => {
    act(() => {
        render(<Hello/>, container)
    }
    )
    expect(container.textContent).toBe('Hey, stranger')
    act(() => {
        render(<Hello name="Babu"/>, container)
    }
    )
    expect(container.textContent).toBe('Hello, Babu!')
    act(() => {
        render(<Hello name="Jenny"/>, container)
    }
    )
    expect(container.textContent).toBe('Hello, Jenny!')
}
)