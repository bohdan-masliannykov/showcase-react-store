import React from 'react';

export const HomePage: React.FC = () => {
    return (
        <div className="container">
            <h1 className="text-3xl font-bold text-center mt-8">Welcome to the Homepage</h1>
            <section className="p-8">
                <h2 className="text-2xl font-bold">About Us</h2>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Sed non mauris vitae erat consequat auctor eu in elit.</p>
            </section>
            <section className="p-8">
                <h2 className="text-2xl font-bold">Services</h2>
                <ul className="mt-4">
                    <li>Web Development</li>
                    <li>Mobile App Development</li>
                    <li>UI/UX Design</li>
                </ul>
            </section>
            <section className="p-8">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p className="mt-4">Email: info@example.com</p>
                <p>Phone: 123-456-7890</p>
            </section>
        </div>
    );
};
