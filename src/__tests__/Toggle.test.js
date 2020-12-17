import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Toggle from '../components/Toggle'

let container = null;

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
}
)

afterEach(() => {
   unmountComponentAtNode(container)
   container.remove()
   container = null;
}
)

it('changes vallue when clicked', () => {
    const onChange = jest.fn();
    act(() => {
        render(<Toggle onChange={onChange} />, container)
    }
    )

    // get ahold of button and perform some click events
    const button = document.querySelector('[data-testid=toggle]')
    expect(button.innerHTML).toBe('Turn On')

    act(() => {
        button.dispatchEvent(new MouseEvent("click", {bubbles: true}))

    }
    )
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe("Turn Off")

    act(() => {
        for(let i = 0; i < 5; i++){
            button.dispatchEvent(new MouseEvent("click", {bubbles: true}))
        }
    }
    )
    expect(onChange).toBeCalledTimes(6);
    expect(button.innerHTML).toBe("Turn On");
}
)