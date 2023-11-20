import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Search_Card = ({setText_search, text_search}) => {

    const Search_Card_Name=(e)=>{
        e.preventDefault()
        setText_search(e.target[0].value)
    }

    return(
        <>
            <Form inline onSubmit={Search_Card_Name}>
                <Row className='m-2 search_input'>
                    <Col xs="auto mb-3">
                        <Form.Control
                        type="text"
                        placeholder="Enter card name"
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto mb-3">
                        <button type='submit' className='m-0 p-1'>
                            Search
                        </button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Search_Card