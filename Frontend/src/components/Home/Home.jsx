import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaLock, FaMobileAlt, FaShieldAlt, FaThumbsUp } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#e0f7f9] text-[#1f5156]">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-[#000000] to-[#000106]">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <img src="CyberSecurity.jpg" alt="Password Security" className="mx-auto max-w-full h-auto rounded-lg shadow-lg animate-fadeInRight"/>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight animate-fadeIn">
                Secure Your Passwords Effortlessly
              </h1>
              <p className="text-lg sm:text-2xl text-[#5d7a7d] mb-10 animate-fadeIn delay-100">
                Manage and protect your passwords with cutting-edge security features.
              </p>
              <Button 
                variant='primary'
                size='large'
                className="rounded-full bg-[#ffdd40] hover:bg-[#f5b921] text-[#1f5156] px-10 py-4 text-lg transition-transform transform hover:scale-105 animate-fadeIn delay-200"
                onClick={() => navigate('/manage-password')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-left transform transition duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-semibold">
                  Easy to Use
                </h3>
                <FaUserShield className="text-3xl text-[#1f5156] mx-4" />
              </div>
              <p className="text-[#5d7a7d]">
                Our user-friendly interface makes managing your passwords a breeze.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-left transform transition duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-semibold">
                  Access Anywhere
                </h3>
                <FaMobileAlt className="text-3xl text-[#1f5156] mx-4" />
              </div>
              <p className="text-[#5d7a7d]">
                Securely access your passwords from any device at any time.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-left transform transition duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-semibold">
                  Advanced Security
                </h3>
                <FaShieldAlt className="text-3xl text-[#1f5156] mx-4" />
              </div>
              <p className="text-[#5d7a7d]">
                Top-of-the-line encryption and security measures protect your sensitive data.
              </p>
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

      {/* Testimonials Section */}
      <section className="py-24 bg-[#e0f7f9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-[#1f5156]">
            What Our Users Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border-4 border-[#ffdd40]">
              <p className="text-lg text-[#5d7a7d] mb-4">
                "SecureVault is the best password manager I've ever used. It's easy, secure, and reliable."
              </p>
              <h3 className="text-xl font-semibold text-[#1f5156]">- Sarah K.</h3>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border-4 border-[#ffdd40]">
              <p className="text-lg text-[#5d7a7d] mb-4">
                "The 24/7 support is incredible. They helped me recover my account in minutes."
              </p>
              <h3 className="text-xl font-semibold text-[#1f5156]">- John D.</h3>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 border-4 border-[#ffdd40]">
              <p className="text-lg text-[#5d7a7d] mb-4">
                "I love how easy it is to use SecureVault. It's a must-have tool for anyone who cares about their online security."
              </p>
              <h3 className="text-xl font-semibold text-[#1f5156]">- Emily R.</h3>
            </div>
          </div>
        </div>
      </section>
    
      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-[#fffae2] to-[#f5b921] text-[#1f5156] text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-10">
            Ready to Secure Your Passwords?
          </h2>
          <p className="text-lg sm:text-2xl mb-12">
            Start using SecureVault today and protect your digital life.
          </p>
          <Button 
            variant='primary'
            size='large'
            className="rounded-full bg-red-300 hover:bg-[#133d42] text-white px-10 py-4 text-lg transition-transform transform hover:scale-105"
            onClick={() => navigate('/manage-password')}
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;
