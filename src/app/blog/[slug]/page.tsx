"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Brain, Shield, Rocket, Code, Database, TrendingUp, Globe } from "lucide-react";


interface BlogPost {
  title: string;
  category: string;
  date: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  image: string;
  content: string;
}

const blogPosts: { [key: string]: BlogPost } = {
  'why-nextjs-better-than-react': {
    title: 'Why Next.js is Better for Websites than React',
    category: 'Development',
    date: 'March 20, 2024',
    icon: Code,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
    content: `
      <p class="text-xl text-gray-300 mb-8 leading-relaxed">
        While React revolutionized frontend development with its component-based architecture, Next.js takes web development to the next level by addressing React's limitations and providing a complete framework for production-ready applications.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Server-Side Rendering vs Client-Side Rendering</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        React applications traditionally render on the client-side, which can lead to slower initial page loads and SEO challenges. Next.js solves this with built-in server-side rendering (SSR) and static site generation (SSG), ensuring faster load times and better search engine optimization.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Built-in Performance Optimizations</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Next.js automatically optimizes your application with features like automatic code splitting, image optimization, and font optimization. These features require additional configuration in vanilla React but come out-of-the-box with Next.js.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Simplified Routing and API Integration</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        While React requires third-party libraries like React Router for navigation, Next.js provides file-based routing that's intuitive and powerful. Additionally, API routes allow you to build full-stack applications without needing a separate backend framework.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Developer Experience and Deployment</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Next.js offers an exceptional developer experience with features like hot reloading, TypeScript support, and built-in ESLint configuration. Deployment is seamless with platforms like Vercel, making it easier to get your website live quickly.
      </p>
    `
  },
  'strapi-cms-ultimate-content-management': {
    title: 'Strapi CMS: The Ultimate Content Management Solution',
    category: 'CMS',
    date: 'March 18, 2024',
    icon: Database,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
    content: `
      <p class="text-xl text-gray-300 mb-8 leading-relaxed">
        Strapi is a revolutionary open-source headless CMS that empowers developers to build flexible, scalable content management systems while providing content creators with an intuitive administrative interface.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">What Makes Strapi Different</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Unlike traditional CMS platforms like WordPress or Drupal, Strapi follows a headless architecture that separates content management from presentation. This approach gives developers complete freedom to choose their frontend technology while content managers enjoy a user-friendly dashboard.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Key Features and Benefits</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Strapi offers customizable content types, role-based permissions, powerful REST and GraphQL APIs, and an extensive plugin ecosystem. Its flexibility allows you to create complex content structures tailored to your specific business needs.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Perfect for Modern Development</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        With its modern architecture, Strapi integrates seamlessly with popular frontend frameworks like React, Vue, Angular, and Next.js. It supports multiple databases, offers real-time collaboration features, and provides robust security measures for enterprise applications.
      </p>
    `
  },
  'importance-digital-marketing-modern-business': {
    title: 'The Importance of Digital Marketing in Modern Business',
    category: 'Marketing',
    date: 'March 15, 2024',
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
    content: `
      <p class="text-xl text-gray-300 mb-8 leading-relaxed">
        Digital marketing has transformed from a luxury to a necessity in today's business landscape. It encompasses all marketing efforts that use electronic devices and the internet to connect with current and prospective customers where they spend their time online.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">The Digital Transformation Impact</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        The COVID-19 pandemic accelerated digital adoption by years, making online presence critical for business survival. Companies that embraced digital marketing early gained significant competitive advantages and market share.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Core Digital Marketing Channels</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Effective digital marketing leverages multiple channels: search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, email marketing, content marketing, and influencer partnerships. Each channel serves specific purposes in the customer journey.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Measurable ROI and Analytics</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Unlike traditional marketing, digital marketing provides detailed analytics and measurable results. Businesses can track conversion rates, customer acquisition costs, lifetime value, and campaign performance in real-time, enabling data-driven decision making.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Cost-Effective Customer Acquisition</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Digital marketing offers superior cost-effectiveness compared to traditional advertising. Small businesses can compete with larger companies through targeted campaigns, precise audience segmentation, and optimized budget allocation across different channels.
      </p>
    `
  },
  'why-every-business-needs-professional-website': {
    title: 'Why Every Business Needs a Professional Website',
    category: 'Business',
    date: 'March 12, 2024',
    icon: Globe,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
    content: `
      <p class="text-xl text-gray-300 mb-8 leading-relaxed">
        In today's digital-first world, a professional website is not just an option—it's a necessity. Your website serves as your digital storefront, the foundation of your online presence, and often the first impression potential customers have of your business.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Credibility and Trust Building</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        A professional website immediately establishes credibility and builds trust with potential customers. Studies show that 75% of users judge a company's credibility based on website design. A well-designed site signals that you're a legitimate, established business that cares about quality.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">24/7 Accessibility and Global Reach</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Unlike physical stores with limited hours, your website works around the clock, serving customers in different time zones and providing information whenever they need it. This accessibility can significantly increase your potential customer base and revenue opportunities.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Cost-Effective Marketing Platform</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        A website serves as the hub for all your digital marketing efforts. Whether you're running social media campaigns, email marketing, or paid advertising, your website is where conversions happen. It's more cost-effective than traditional advertising and provides measurable results.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Competitive Advantage</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        In many industries, having a professional website is still not universal. A well-designed, fast, and user-friendly website can give you a significant advantage over competitors who rely solely on social media or word-of-mouth marketing.
      </p>

      <h2 class="text-2xl font-bold text-white mb-6">Data and Customer Insights</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Your website provides valuable insights into customer behavior, preferences, and demographics through analytics tools. This data helps you make informed business decisions, improve your services, and better understand your target market.
      </p>
    `
  }
};

const BlogDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params);
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-gray-300 hover:text-white">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = post.icon;

  return (
    <article className="py-20 bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/blog" className="text-gray-300 hover:text-white font-semibold inline-flex items-center">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
          </Link>
        </motion.div>

        <motion.header 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold mr-4">
              {post.category}
            </span>
            <span className="text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
              JS
            </div>
            <div>
              <p className="font-semibold text-white">John Smith</p>
              <p className="text-gray-300 text-sm">CEO & Founder</p>
            </div>
          </div>
        </motion.header>

        <motion.div 
          className="h-96 relative rounded-lg overflow-hidden mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        <motion.div 
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center hover:bg-gray-800 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6">
              Our team of experts can help you identify opportunities and implement solutions that drive real business value.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default BlogDetailPage;