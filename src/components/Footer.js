import React from 'react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Google,
  Git,
} from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer class="bg-light text-center text-white">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a
            class="btn text-white btn-floating m-1"
            style={{backgroundColor: '#3b5998'}}
            href="#!"
            role="button"
          >
            <Facebook size={24} />
          </a>

          <a
            class="btn text-white btn-floating m-1"
            style={{backgroundColor: '#55acee'}}
            href="#!"
            role="button"
          >
            <Twitter size={24} />
          </a>

          <a
            class="btn text-white btn-floating m-1"
            style={{backgroundColor: '#0082ca'}}
            href="#!"
            role="button"
          >
            <Google size={24} />
          </a>
          <a
            class="btn text-white btn-floating m-1"
            style={{backgroundColor: '#333333'}}
            href="#!"
            role="button"
          >
            <Github size={24} />
          </a>
        </section>
      </div>

      <div
        class="text-center p-3 text-dark"
        style={{backgroundColor: '#rgba(0, 0, 0, 0.2)'}}
      >
        <a class="text-dark" href="https://mdbootstrap.com/">
          <h5>PTUK CSE GP Team</h5>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
