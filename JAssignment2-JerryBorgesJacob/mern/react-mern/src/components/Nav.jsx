import {useState, useEffect} from "react";

export default function Nav() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getLinks = async () => {
      let response = await fetch("http://localhost:3000/api/menu");
      let data = await response.json();
      setLinks(data);
    }
    getLinks();
  }, []);

  return (
    <nav id="main-menu" aria-label="Main navigation">
      <ul>
        {
          links.map((link) => (
            <li><a href={link.path}>{link.name}</a></li>
          ))
        }
      </ul>
    </nav>
  );
}