import React from 'react';
import Button from '../Button/Button';

const Home = () => {
  return (
    <div className="App">
      <section className="hero bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Secure Your Passwords with Ease</h1>
        <p className="text-lg mb-8">Our password manager keeps your data safe and accessible only to you.</p>
        <div className="cta-buttons space-x-4">
          <Button className="btn-primary">Get Started</Button>
          <Button className="btn-secondary">Learn More</Button>
        </div>
      </section>

      <section className="features py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Features</h2>
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="feature-item p-4">
            <img src="path/to/icon1.png" alt="Feature 1" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Password Generation</h3>
            <p>Create strong and unique passwords.</p>
          </div>
          <div className="feature-item p-4">
            <img src="path/to/icon2.png" alt="Feature 2" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure Storage</h3>
            <p>Store your passwords securely.</p>
          </div>
          <div className="feature-item p-4">
            <img src="path/to/icon3.png" alt="Feature 3" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Auto-fill</h3>
            <p>Auto-fill passwords on websites.</p>
          </div>
          <div className="feature-item p-4">
            <img src="path/to/icon4.png" alt="Feature 4" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Multi-device Sync</h3>
            <p>Access your passwords on any device.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <div className="steps grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="step p-4">
            <img src="path/to/step1.png" alt="Step 1" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Step 1</h3>
            <p>Create an account and login.</p>
          </div>
          <div className="step p-4">
            <img src="path/to/step2.png" alt="Step 2" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Step 2</h3>
            <p>Add your passwords and secure notes.</p>
          </div>
          <div className="step p-4">
            <img src="path/to/step3.png" alt="Step 3" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Step 3</h3>
            <p>Access your data securely anytime.</p>
          </div>
        </div>
      </section>

      <section className="testimonials py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Users Say</h2>
        <div className="testimonial-item mb-8">
          <p className="italic">"This password manager has changed my life!"</p>
          <h4 className="font-bold mt-4">John Doe</h4>
        </div>
        <div className="testimonial-item">
          <p className="italic">"Secure and easy to use, highly recommend."</p>
          <h4 className="font-bold mt-4">Jane Smith</h4>
        </div>
      </section>

      <section className="security py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">Security</h2>
        <p className="mb-8">We use the latest encryption standards to protect your data.</p>
        <div className="certifications flex justify-center space-x-8">
          <img src="path/to/gdpr.png" alt="GDPR" />
          <img src="path/to/ssl.png" alt="SSL" />
        </div>
      </section>

      <section className="pricing py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Pricing</h2>
        <div className="pricing-plans grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="plan p-8 border rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Free</h3>
            <p className="text-lg font-semibold mb-4">$0/month</p>
            <ul className="mb-8 space-y-2">
              <li>Basic Features</li>
              <li>Secure Storage</li>
            </ul>
            <Button className="btn-primary">Select Plan</Button>
          </div>
          <div className="plan p-8 border rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-lg font-semibold mb-4">$5/month</p>
            <ul className="mb-8 space-y-2">
              <li>All Free Features</li>
              <li>Multi-device Sync</li>
              <li>Priority Support</li>
            </ul>
            <Button className="btn-primary">Select Plan</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
