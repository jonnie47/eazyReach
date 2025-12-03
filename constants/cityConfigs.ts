// City Data Configuration - Pure data without React dependencies
// This file can be safely imported in both server and client components

export interface CityConfig {
  name: string;
  tagline: string;
  description: string;
  industries: string[];
  useCases: {
    title: string;
    description: string;
    iconName: 'Building' | 'Users' | 'Database' | 'Zap' | 'Headphones' | 'TrendingUp' | 'Target' | 'Award';
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  neighborhoods: string[];
  testimonial: {
    quote: string;
    company: string;
    role: string;
    metric: string;
  };
}

export const cityConfigs: Record<string, CityConfig> = {
  mumbai: {
    name: 'Mumbai',
    tagline: 'LinkedIn Phone Finder Mumbai | Business Contacts for India\'s Financial Capital',
    description: 'Find direct mobile numbers of Mumbai business leaders, directors, and decision-makers. Perfect for sales teams targeting BFSI, media, manufacturing, and corporate headquarters.',
    industries: ['Banking & Finance', 'Bollywood & Media', 'Manufacturing', 'Trading Companies', 'Corporate HQs', 'Real Estate'],
    useCases: [
      {
        title: 'BFSI Director Contacts',
        description: 'Extract phone numbers of banking and insurance executives from LinkedIn and MCA records.',
        iconName: 'Building'
      },
      {
        title: 'Media Industry Outreach',
        description: 'Find contact details of production houses, media companies, and entertainment executives.',
        iconName: 'Users'
      },
      {
        title: 'Trading Company Directors',
        description: 'DIN lookup for import-export and trading company directors in JNPT and Mumbai ports.',
        iconName: 'Database'
      },
      {
        title: 'Real Estate Developers',
        description: 'Connect with real estate builders and property developers across Mumbai and MMR.',
        iconName: 'Building'
      }
    ],
    stats: [
      { value: '2L+', label: 'Mumbai Contacts' },
      { value: '50K+', label: 'BFSI Professionals' },
      { value: '94%', label: 'Number Accuracy' },
      { value: '₹0', label: 'Per Call Cost' }
    ],
    neighborhoods: ['Andheri', 'BKC', 'Lower Parel', 'Nariman Point', 'Powai', 'Goregaon', 'Malad', 'Thane', 'Navi Mumbai'],
    testimonial: {
      quote: 'Our BD team targets BFSI clients across Mumbai. EazyReach helped us find direct numbers of CFOs and finance heads that we couldn\'t find anywhere else.',
      company: 'Fintech Startup',
      role: 'Mumbai-based B2B SaaS',
      metric: '45% more meetings booked'
    }
  },
  bangalore: {
    name: 'Bangalore',
    tagline: 'LinkedIn Phone Finder Bangalore | Tech & Startup Contacts for India\'s Silicon Valley',
    description: 'Extract mobile numbers of Bangalore tech leaders, startup founders, CTOs, and IT decision-makers. Optimized for IT parks, startups, and tech companies.',
    industries: ['IT Services', 'Startups', 'Product Companies', 'Tech Parks', 'VC/PE Firms', 'Biotech'],
    useCases: [
      {
        title: 'Tech Leadership Contacts',
        description: 'Find CTOs, VPs of Engineering, and tech leaders across Bangalore IT companies.',
        iconName: 'Users'
      },
      {
        title: 'Startup Founder Database',
        description: 'Connect with founders of Bangalore startups from Koramangala to HSR Layout.',
        iconName: 'Zap'
      },
      {
        title: 'IT Recruiter Toolkit',
        description: 'Extract candidate phone numbers for IT and tech hiring across Bangalore.',
        iconName: 'Headphones'
      },
      {
        title: 'VC/Investor Outreach',
        description: 'Reach investors and fund managers with verified contact details.',
        iconName: 'TrendingUp'
      }
    ],
    stats: [
      { value: '3L+', label: 'Tech Contacts' },
      { value: '80K+', label: 'Startup Profiles' },
      { value: '96%', label: 'IT Number Accuracy' },
      { value: '₹0', label: 'Per Call Cost' }
    ],
    neighborhoods: ['Koramangala', 'HSR Layout', 'Indiranagar', 'Whitefield', 'Electronic City', 'Marathahalli', 'MG Road', 'Jayanagar', 'BTM Layout'],
    testimonial: {
      quote: 'We hire 50+ developers monthly. EazyReach cut our sourcing time in half by giving us direct candidate numbers instead of waiting for InMail responses.',
      company: 'IT Staffing Agency',
      role: 'Bangalore Tech Recruiter',
      metric: '2x faster placements'
    }
  },
  delhi: {
    name: 'Delhi NCR',
    tagline: 'LinkedIn Phone Finder Delhi NCR | Business Contacts for India\'s Capital Region',
    description: 'Find mobile numbers of Delhi, Gurgaon, and Noida business professionals. Covers corporate offices, consulting firms, government contractors, and NCR businesses.',
    industries: ['Corporate HQs', 'Consulting', 'E-commerce', 'Government Contractors', 'Media & Publishing', 'Retail'],
    useCases: [
      {
        title: 'Gurgaon Corporate Contacts',
        description: 'Extract numbers of executives in Cyber City, DLF, and Gurgaon MNC offices.',
        iconName: 'Building'
      },
      {
        title: 'Noida IT Park Outreach',
        description: 'Connect with IT and BPO leaders across Sector 62, Sector 18, and Greater Noida.',
        iconName: 'Users'
      },
      {
        title: 'Delhi Business Owners',
        description: 'DIN lookup for Delhi-based company directors and business owners.',
        iconName: 'Database'
      },
      {
        title: 'E-commerce & D2C Brands',
        description: 'Find founders and decision-makers at Delhi NCR-based e-commerce companies.',
        iconName: 'Target'
      }
    ],
    stats: [
      { value: '4L+', label: 'NCR Contacts' },
      { value: '100K+', label: 'Corporate Profiles' },
      { value: '93%', label: 'Number Accuracy' },
      { value: '₹0', label: 'Per Call Cost' }
    ],
    neighborhoods: ['Gurgaon', 'Noida', 'Connaught Place', 'Nehru Place', 'Greater Noida', 'Faridabad', 'Ghaziabad', 'Aerocity', 'Saket'],
    testimonial: {
      quote: 'Targeting HR heads at Gurgaon companies was tough until we started using EazyReach. Now we book 3x more demos from our cold outreach.',
      company: 'HR Tech Startup',
      role: 'Delhi NCR SaaS Company',
      metric: '3x demo bookings'
    }
  },
  pune: {
    name: 'Pune',
    tagline: 'LinkedIn Phone Finder Pune | IT & Manufacturing Contacts for Maharashtra\'s Growth Hub',
    description: 'Extract mobile numbers of Pune IT leaders, manufacturing directors, and automotive executives. Covers Hinjewadi, Magarpatta, PCMC, and industrial areas.',
    industries: ['IT Services', 'Automotive', 'Manufacturing', 'Engineering', 'EdTech', 'Pharma'],
    useCases: [
      {
        title: 'IT Park Executives',
        description: 'Find decision-makers at Hinjewadi, Magarpatta, and Kharadi IT companies.',
        iconName: 'Users'
      },
      {
        title: 'Automotive Industry Contacts',
        description: 'Connect with Tata Motors, Bajaj, and automotive supplier executives.',
        iconName: 'Building'
      },
      {
        title: 'Manufacturing Directors',
        description: 'DIN lookup for Pimpri-Chinchwad industrial area company directors.',
        iconName: 'Database'
      },
      {
        title: 'EdTech & Training',
        description: 'Reach education and training company decision-makers.',
        iconName: 'Award'
      }
    ],
    stats: [
      { value: '1.5L+', label: 'Pune Contacts' },
      { value: '60K+', label: 'IT Professionals' },
      { value: '94%', label: 'Number Accuracy' },
      { value: '₹0', label: 'Per Call Cost' }
    ],
    neighborhoods: ['Hinjewadi', 'Magarpatta', 'Kharadi', 'Baner', 'Wakad', 'Pimpri-Chinchwad', 'Koregaon Park', 'Viman Nagar', 'Hadapsar'],
    testimonial: {
      quote: 'Our sales team targets manufacturing companies in PCMC. EazyReach\'s DIN lookup feature is gold for finding plant director contacts.',
      company: 'Industrial Equipment',
      role: 'Pune B2B Manufacturing Sales',
      metric: '40% more conversions'
    }
  },
  chennai: {
    name: 'Chennai',
    tagline: 'LinkedIn Phone Finder Chennai | Manufacturing & IT Contacts for Tamil Nadu\'s Capital',
    description: 'Find mobile numbers of Chennai business leaders across automobile, IT, manufacturing, and port logistics. Covers OMR, Guindy, Ambattur, and industrial areas.',
    industries: ['Automobile', 'IT/ITES', 'Port & Logistics', 'Manufacturing', 'Healthcare', 'Finance'],
    useCases: [
      {
        title: 'Automobile Industry Contacts',
        description: 'Connect with executives at Hyundai, Ford, Renault-Nissan, and auto suppliers.',
        iconName: 'Building'
      },
      {
        title: 'OMR IT Corridor',
        description: 'Extract numbers of IT leaders along the Old Mahabalipuram Road tech corridor.',
        iconName: 'Users'
      },
      {
        title: 'Port & Logistics Directors',
        description: 'Find shipping, freight, and logistics company directors in Chennai Port area.',
        iconName: 'Database'
      },
      {
        title: 'Manufacturing Directors',
        description: 'DIN lookup for Ambattur and SIPCOT industrial estate company directors.',
        iconName: 'Target'
      }
    ],
    stats: [
      { value: '1.2L+', label: 'Chennai Contacts' },
      { value: '40K+', label: 'Manufacturing Leads' },
      { value: '93%', label: 'Number Accuracy' },
      { value: '₹0', label: 'Per Call Cost' }
    ],
    neighborhoods: ['OMR', 'Guindy', 'Ambattur', 'Anna Nagar', 'T. Nagar', 'Sholinganallur', 'Perungudi', 'Nungambakkam', 'Mount Road'],
    testimonial: {
      quote: 'We sell industrial equipment to Chennai factories. Finding plant manager numbers used to take days. Now it takes minutes with EazyReach.',
      company: 'Industrial Supplier',
      role: 'Chennai Manufacturing Sales',
      metric: '5x faster prospecting'
    }
  },
  hyderabad: {
    name: 'Hyderabad',
    tagline: 'LinkedIn Phone Finder Hyderabad | Tech & Pharma Contacts for Telangana\'s IT Hub',
    description: 'Extract mobile numbers of Hyderabad tech leaders, pharma executives, and startup founders. Covers HITEC City, Gachibowli, Genome Valley, and Madhapur.',
    industries: ['IT Services', 'Pharma & Biotech', 'Startups', 'Financial Services', 'Real Estate', 'Gaming'],
    useCases: [
      {
        title: 'HITEC City Executives',
        description: 'Find decision-makers at Microsoft, Google, Amazon, and other MNC offices.',
        iconName: 'Building'
      },
      {
        title: 'Pharma Industry Contacts',
        description: 'Connect with Genome Valley pharma company directors and executives.',
        iconName: 'Users'
      },
      {
        title: 'Startup Founders',
        description: 'Reach Hyderabad startup founders and tech entrepreneurs.',
        iconName: 'Zap'
      },
      {
        title: 'IT Recruiter Toolkit',
        description: 'Extract candidate numbers for Hyderabad IT and pharma hiring.',
        iconName: 'Headphones'
      }
    ],
    stats: [
      { value: '1.8L+', label: 'Hyderabad Contacts' },
      { value: '70K+', label: 'Tech Professionals' },
      { value: '95%', label: 'Number Accuracy' },
      { value: '₹0', label: 'Per Call Cost' }
    ],
    neighborhoods: ['HITEC City', 'Gachibowli', 'Madhapur', 'Kondapur', 'Jubilee Hills', 'Banjara Hills', 'Genome Valley', 'Kukatpally', 'Miyapur'],
    testimonial: {
      quote: 'Hyderabad has so many pharma companies. EazyReach helped us build a database of R&D directors that would have taken months manually.',
      company: 'Lab Equipment Supplier',
      role: 'Hyderabad Pharma Sales',
      metric: '60% time saved'
    }
  }
};
