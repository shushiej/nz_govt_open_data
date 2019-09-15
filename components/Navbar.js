import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar navbar-expand navbar-static-top mb-8">
        <div className="container">
            <Link href="/"><a className="navbar-brand nav-link">New Zealand</a></Link>
        </div>

        <style jsx global>
            {
                `
                body {
                    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                    height: 500px;
                    background-color: #29ABE2;
                    color: #fff;
                    overflow-x: hidden;
                }
                h1 {
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    color: #fff;
                }
                
                h2 {
                    margin-bottom: 5px;
                    font-weight: 300;
                    color: #fff;
                }

                h3{
                    font-weight: 100;
                    color: #fff;
                }
                
                h5 {
                    letter-spacing: 0.01em;
                    color: #fff;
                }

                a {
                    color: #fff;
                    font-weight: 100;
                }
                `
            }
        </style>
  </nav>
);

export default Navbar;