import React from 'react'
import Form from 'react-bootstrap/Form';

const Filter_Color = ({Card_Color, SetCard_Color}) => {

    const handle_select=(e)=>{
        SetCard_Color(e.target.value)
    }

    return(
        <>
            <Form.Group controlId="formBasicSelect" className='Color_Selector'>
                <Form.Control
                    as="select"
                    value={Card_Color}
                    onChange={handle_select}
                    >
                            <option value="">Select a Card Color</option>
                            <option value="W">White</option>
                            <option value="G">Green</option>
                            <option value="B">Black</option>
                            <option value="U">Blue</option>
                            <option value="R">Red</option>
                </Form.Control>
            </Form.Group>
        </>
    )
}

export default Filter_Color