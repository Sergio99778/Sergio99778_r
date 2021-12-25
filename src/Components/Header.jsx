import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
  render() {
    class TxtType {
      constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      }
      tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function () {
          that.tick();
        }, delta);
      }
    }

    window.onload = function () {
      var elements = document.getElementsByClassName('typewrite');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
      document.body.appendChild(css);
    };

    return (
      <header id="welcome-section">
        <h1 className="header--container-typewriter">
          <Link className="typewriter--text" to="/">
            <a href="/" className="typewrite" data-period="2000" data-type={this.props.data}>
              <span className="wrap"></span>
            </a>
          </Link>
        </h1>
        <nav className="header--submenu" id="navbar">
          {this.props.titles.map((title, i) => (
            <Link key={i} className="header--hover-underline-animation" to={title.to}>
              {title.name}
            </Link>
          ))}
        </nav>
      </header>
    );
  }
}

export default Header;
