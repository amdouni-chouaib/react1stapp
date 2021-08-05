import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import ProgressBar from 'react-bootstrap/ProgressBar'
import '../styles/content.css'
const Content = () => {
    return (
        <div className='core'>
           <div className="div1">
           <Card style={{ width: '18rem' }}>
             <Card.Body>
    
             <Button variant="success">Add User</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
             <Card.Body>
    
             <Button variant="danger">Delete User</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
             <Card.Body>
    
             <Button variant="info">Read User</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
             <Card.Body>
    
             <Button variant="primary">Update User</Button>
            </Card.Body>
            </Card>
               </div> 
            <div className="tab">
            <Table responsive="sm" bordered="3">
    <thead>
      <tr>
        <th>#</th>
        <th>Guest Comments</th>
      
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>your design is not that bad </td>
        </tr>
        <tr>
        <td>2</td>
        <td>you have an Sql Injection try to solve it </td>
        </tr>
        <tr>
        <td>3</td>
        <td>your website is so easy and easy to use</td>
        </tr>
        <tr>
        <td>4</td>
        <td>your responsive design is so bad man </td>
        </tr>
      </tbody>
      </Table>
            </div>
            <div>
                <h1>Voting States From Guests</h1> <br/><br/>
            <ProgressBar variant="success" animated now={70} />
            </div>
        </div>
    )
}

export default Content
