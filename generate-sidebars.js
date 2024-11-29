const axios = require('axios');
const fs = require('fs');

// Replace with your WordPress site URL
const WORDPRESS_API_URL = 'https://edevhindi.com/wp-json/wp/v2/categories';

// Fetch categories from WordPress
async function fetchCategories() {
  try {
    const response = await axios.get(WORDPRESS_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Generate sidebar configuration
async function generateSidebar() {
  const categories = await fetchCategories();

  // Map categories to sidebar format
  const sidebarConfig = {
    tutorialSidebar: categories.map((category) => ({
      type: 'category',
      label: category.name,
      link: {
        type: 'generated-index',
        title: category.name,
        description: category.description || '',
        slug: `/category/${category.slug}`, // Custom slug for the category
      },
      items: [
        // Add items or dynamically fetch related posts if needed
      ],
    })),
  };

  // Write to sidebars.js
  fs.writeFileSync(
    './sidebars.js',
    `module.exports = ${JSON.stringify(sidebarConfig, null, 2)};`,
    'utf-8'
  );

  console.log('Sidebar generated successfully!');
}

// Run the script
generateSidebar();
