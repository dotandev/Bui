import React from 'react';
import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';

const BuiCta: React.FC = () => {
  const ctaItems = [
    { href: '/competitions', label: 'Join a Competition' },
    { href: '/organizer', label: 'List Your Competition' },
    { href: '/explorer', label: 'Verify Transactions' },
    { href: '/identity', label: 'Get Your .bui-sui Tag' },
    { href: '/organizations', label: 'Explore Verified Organizations' },
    { href: '/overview', label: 'Explore Bui' },
  ];

  return (
    <RadixNavigationMenu.Root>
      <RadixNavigationMenu.List style={{
        listStyle: 'none',
        padding: '20px',
        margin: '20px auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
        gridGap: '15px',
        backgroundColor: '#e6f7ff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '900px', // Adjusted max width for grid
      }}>
        {ctaItems.map((item) => (
          <RadixNavigationMenu.Item key={item.href}>
            <RadixNavigationMenu.Link href={item.href} style={{
              textDecoration: 'none',
              backgroundColor: '#fff',
              color: '#1890ff',
              padding: '15px 20px',
              borderRadius: '8px',
              border: '1px solid #1890ff',
              transition: 'background-color 0.3s ease, color 0.3s ease',
              textAlign: 'center',
              display: 'block',
            //   '&:hover': {
            //     backgroundColor: '#fffbe6',
            //     color: '#ffa940',
            //     borderColor: '#ffa940',
            //   },
            }}>
              {item.label}
            </RadixNavigationMenu.Link>
          </RadixNavigationMenu.Item>
        ))}
      </RadixNavigationMenu.List>
    </RadixNavigationMenu.Root>
  );
};

export default BuiCta;