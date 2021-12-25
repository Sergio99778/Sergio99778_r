import React from 'react';

import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section className="footer--redes-section">
          <p>Contact with me :</p>
          <div className="redes-container">
            {this.props.redes.map((social, i) => {
              return (
                <a id={i} className={`fa fa-${social.name}`} href={social.href}>
                  {' '}
                </a>
              );
            })}
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
