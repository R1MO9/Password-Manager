import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#e0f7f9]">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-[#1f5156]">
            Keep Your Passwords Safe and Secure
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            SecureVault offers top-notch security for managing all your passwords in one place.
          </p>
          <Button 
            variant='primary'
            size='medium'
            className="rounded-lg bg-[#ffdd40] hover:bg-[#f5b921] text-[#1f5156] px-8 py-3"
            onClick={() => navigate('/manage-password')}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-[#1f5156]">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#1f5156]">Easy to Use</h3>
              <p className="text-gray-600">Simple and intuitive interface to manage your passwords effortlessly.</p>
            </div>
              
            <div className="text-center bg-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#1f5156]">Save Unlimited Passwords</h3>
              <p className="text-gray-600">Store as many passwords as you need with no limits.</p>
            </div>
            <div className="text-center bg-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#1f5156]">Access Anywhere</h3>
              <p className="text-gray-600">Securely access your passwords from any device, anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-[#1b2a2b] text-white">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Unparalleled Security</h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-1/2 text-left mb-8 md:mb-0">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#ffdd40]">End-to-End Encryption</h3>
              <p className="text-gray-300 mb-4">
                All your passwords are secured with advanced end-to-end encryption. Only you can access your data—no one else, not even our team.
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#ffdd40]">Zero-Knowledge Architecture</h3>
              <p className="text-gray-300">
                We employ a zero-knowledge architecture, meaning we never store your master password or any sensitive data unencrypted. Your privacy is guaranteed.
              </p>
            </div>
            <div className="md:w-1/2">
              {/* Replace with a security-related image or illustration */}
              <img src="SecureVault.png" alt="Security Illustration" className="mx-auto max-w-full h-auto rounded-lg shadow-md"/>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get Started with SecurePass Today
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Join thousands of users who trust us with their passwords.
          </p>
          <Button 
            variant='primary'
            size='medium'
            className="rounded-lg bg-[#1f5156] hover:bg-[#f5b921] px-8 py-3"
            onClick={() => navigate('/manage-password')}
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
