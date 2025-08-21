<nav>
	<a href="/">Home |</a>
	<a href="/techs">View Techniques |</a>
	<a href="/add">Add Technique</a>
</nav>
<slot></slot>

<style>
	nav {
    background-color: #0b1623; /* dark navy */
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    gap: 2rem;
  }

  nav a {
    color: #d1d5db; /* light gray */
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  nav a.active {
    color: #ffffff; /* active is white */
    font-weight: 700;
  }

  nav a:hover {
    color: #ffffff;
  }
</style>
