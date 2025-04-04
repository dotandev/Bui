import React from 'react';

const Footer: React.FC = ({ color, background }: {color?:string, background?:string}) => {
  return (
    <footer style={{
      backgroundColor: background??'#f0f0f0',
      padding: '40px 20px',
      marginTop: '40px',
      borderTop: '1px solid #e0e0e0',
      color:color??'black'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '20px',
      }}>
        <div>
          <h3>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/competitions" style={linkStyle}>Competitions</a></li>
            <li><a href="/organizations" style={linkStyle}>Verified Organizations</a></li>
            <li><a href="/winners" style={linkStyle}>Winners</a></li>
            <li><a href="/explorer" style={linkStyle}>Bui Explorer</a></li>
            <li><a href="/tags" style={linkStyle}>.bui-sui Tags</a></li>
            <li><a href="/api" style={linkStyle}>API Integration</a></li>
            <li><a href="/help" style={linkStyle}>Help Center</a></li>
            <li><a href="/community" style={linkStyle}>Community</a></li>
          </ul>
        </div>

        <div>
          <h3>Social Media</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" style={linkStyle}>Twitter</a></li>
            <li><a href="#" style={linkStyle}>Discord</a></li>
            <li><a href="#" style={linkStyle}>Instagram</a></li>
            <li><a href="#" style={linkStyle}>Email</a></li>
          </ul>
        </div>

        <div>
          <h3>Newsletter Subscription</h3>
          <p>Enter your email to receive updates on new competitions and platform news.</p>
          <div style={{ display: 'flex' }}>
            <input
              type="email"
              placeholder="Your Email"
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px 0 0 5px',
                flex: 1,
              }}
            />
            <button style={{
              backgroundColor: '#1890ff',
              color: 'white',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '0 5px 5px 0',
              cursor: 'pointer',
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        borderTop: '1px solid #e0e0e0',
        paddingTop: '20px',
      }}>
        <p>© {new Date().getFullYear()} Bui. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#333',
  display: 'block',
  padding: '5px 0',
  transition: 'color 0.3s ease',
//   '&:hover': {
//     color: '#1890ff',
//   },
};

export default Footer;