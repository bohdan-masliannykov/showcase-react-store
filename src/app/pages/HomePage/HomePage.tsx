import React from 'react';

export const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Homepage</h1>
        
            <section>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit.</p>
            </section>
            <section>
                <h2>Services</h2>
                <ul>
                    <li>Web Development</li>
                    <li>Mobile App Development</li>
                    <li>UI/UX Design</li>
                </ul>
            </section>
            <section>
                <h2>Contact Us</h2>
                <p>Email: info@example.com</p>
                <p>Phone: 123-456-7890</p>
            </section>
        </div>
    );
};
