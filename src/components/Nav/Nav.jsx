export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px', margin: '20px' };
  
    return (
      <nav className="main-header-menu">
        <section className="nav" >
          <div style={linkStyle}>
            <a href="/About">About</a>
          </div>
          <div style={linkStyle}>
            <a href="/Portfolio">Portfolio</a>
          </div>
          {/* <div style={linkStyle}>
            <a href="/Contact">Contact</a>
          </div> */}
          <div style={linkStyle}>
            <a href="/Resume">Resume</a>
          </div>
        </section>
      </nav>
    );
  }
  