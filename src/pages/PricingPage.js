import React from 'react';
import './PricingPage.css';

const PricingPage = () => {
  const pricingPlans = [
    { id: 1, name: 'Website Development', price: 'Starting from $50', features: ['Custom website design','Free Domain for 1-year', 'Free Hosting for 1-year', 'Responsive layout', 'Redesigning/Revamping','Bugs Fixing', 'Server Setup','Content management system integration', 'Basic SEO setup'] },
    { id: 2, name: 'SEO', price: 'From $150/month', features: ['Keyword research', 'On-page optimization', 'Off-page SEO','Marketing Strategies','Backlinking','Content Updation', 'Monthly performance reports','1-month free Maintenance after evaluation '] },
    { id: 3, name: 'Social Media Marketing', price: 'From $250/month', features: ['Social media strategy', 'Content creation', 'Community engagement','Paid Ads','Lead Generation', 'Increase brand awareness','Campaign analytics','Posts designing and scheduling','Adobe Premiere Pro/Canva'] }
  ];

  return (
    <div className="pricing-page">
      <h2 style={{ textAlign: 'center' }}>Services and Pricing Plan</h2>
      <div className="pricing-container">
        {pricingPlans.map(plan => (
          <div key={plan.id} className="pricing-box">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPage;
