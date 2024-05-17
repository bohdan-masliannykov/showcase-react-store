const Footer: React.FC = () => {
    return (
        <footer className="flex py-12 bg-slate-50 text-indigo border-t-2 border-indigo-500">
            <div className="container flex">
                <div>
                    <h3>Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>Email: example@example.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <div>
                    <h3>Address</h3>
                    <p>123 Fake Street</p>
                    <p>Fake City, Fake Country</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;