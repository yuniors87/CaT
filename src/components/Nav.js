import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
      </ul>
      <ul>
        <Link to="/pizza">Pizza</Link>
      </ul>
    </nav>
  );
}
