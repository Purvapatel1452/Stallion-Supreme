import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-lighter text-white py-8">
      <div className="container">
        <div className="text-center">
          {/* <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Stallion Supreme. All rights reserved.
          </p> */}
          <div className="mt-4">
            <p>“From Scratch to Viral – That's Stallion Style.”</p>
            <p>“Stallion Supreme – For the Bold, For the Brands.”</p>
            <p>“Content That Converts, Reports That Matter.”</p>
            <p>“Why Just Exist? When You Can Dominate!”</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 