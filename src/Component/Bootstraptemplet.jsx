
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Bootstraptemplet() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React Bootstrap Template</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <h1 id='yes1'>Vayu Putra Hanuman</h1>
          <h2>--12 Names of Hanuman Ji</h2>
          <ul type='square'>
            <li>Hanuman</li>
            <li>Vayu Putra</li>
            <li>Anjani Suta</li>
            <li>Mahabal</li>
            <li>Raamesht</li>
            <li>Phalgun Sakh</li>
            <li>Pingaksh</li>
            <li>Amit Vikram</li>
            <li>Uddhikraman</li>
            <li>Sita Shok Vinashan</li>
            <li>Laxman Praan Daata</li>
            <li>Dasgreev Darpha</li>
          </ul>

          <p id='yes2'>
            --- 12 names of Hanuman Ji: Few characters in Hindu mythology stand out as much as Lord Hanuman,
             the revered monkey god known for his unwavering loyalty and incredible strength. Since Hanuman 
             is one of the main characters in the Ramayana, his story has fascinated believers and scholars,
              sparking many stories of bravery and spiritual wisdom. The 12 names of lord Hanuman god are 
              significant because they each reflect a different part of his divine nature.

            These names aren’t just titles; they’re potent mantras with deep meanings that can bless those who
             respectfully say them. Join us on an enlightening journey as we look into the 12 names of Lord
              Hanuman, figure out what they mean, and learn how their mantras can give us spiritual power and
               insight.
          </p>
        </Container>
      </main>
      <footer>
        <p id='yes'>&copy; Parmar Saurabh</p>
      </footer>
    </>
  )
}
