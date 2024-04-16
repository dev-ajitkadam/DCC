import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Reports() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary mt-2 form-control-lg">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

      </Navbar>
      <div className='vh-90 pt-10'>
        <div className='justify-center align-content-center'>
        <p className='justify-content-center align-items-center '>Reports</p>
        </div>
      </div>
    </Container>
    
  );
}

export default Reports;