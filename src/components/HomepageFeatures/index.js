import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const WorkflowSteps = [
  {
    step: '01',
    title: 'Browse the Catalog',
    description: 'Search and filter available products, view pricing and specifications before you configure.',
    link: '/docs/user-guide/product-catalog',
  },
  {
    step: '02',
    title: 'Configure Your Product',
    description: 'Walk through guided configuration options. The price updates as you build.',
    link: '/docs/user-guide/configurator',
  },
  {
    step: '03',
    title: 'Build a Quote',
    description: 'Add configured products as line items, attach files, and fill in customer details.',
    link: '/docs/user-guide/quotes/overview',
  },
  {
    step: '04',
    title: 'Submit Your Order',
    description: 'Review the quote summary, then check out to place the order.',
    link: '/docs/user-guide/quotes/checkout',
  },
];

const QuickLinks = [
  {
    title: 'Logging In',
    description: 'Get started with your account.',
    link: '/docs/getting-started/logging-in',
    category: 'Getting Started',
  },
  {
    title: 'User Roles',
    description: 'Understand what each role can access.',
    link: '/docs/getting-started/user-roles',
    category: 'Getting Started',
  },
  {
    title: 'Creating a Quote',
    description: 'Three ways to start a new quote.',
    link: '/docs/user-guide/quotes/creating-a-quote',
    category: 'User Guide',
  },
  {
    title: 'Users & Groups',
    description: 'Add users and organize them into groups.',
    link: '/docs/admin-guide/users-and-roles/users',
    category: 'Admin Guide',
  },
  {
    title: 'Platforms',
    description: 'Manage multi-tenant platform settings.',
    link: '/docs/admin-guide/platforms',
    category: 'Admin Guide',
  },
  {
    title: 'Themes',
    description: 'Customize colors, logos, and branding.',
    link: '/docs/admin-guide/themes',
    category: 'Admin Guide',
  },
];

function WorkflowStep({ step, title, description, link }) {
  return (
    <Link to={link} className={styles.workflowStep}>
      <span className={styles.stepNumber}>{step}</span>
      <div>
        <Heading as="h3" className={styles.stepTitle}>{title}</Heading>
        <p className={styles.stepDescription}>{description}</p>
      </div>
    </Link>
  );
}

function QuickLink({ title, description, link, category }) {
  return (
    <Link to={link} className={styles.quickLink}>
      <span className={styles.quickLinkCategory}>{category}</span>
      <Heading as="h4" className={styles.quickLinkTitle}>{title}</Heading>
      <p className={styles.quickLinkDescription}>{description}</p>
      <span className={styles.quickLinkArrow}>→</span>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {/* How it works */}
      <section className={styles.workflow}>
        <div className="container">
          <Heading as="h2" className={styles.sectionHeading}>How it works</Heading>
          <div className={styles.workflowGrid}>
            {WorkflowSteps.map((props, idx) => (
              <WorkflowStep key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className={styles.quickLinks}>
        <div className="container">
          <Heading as="h2" className={styles.sectionHeading}>Quick links</Heading>
          <div className={styles.quickLinksGrid}>
            {QuickLinks.map((props, idx) => (
              <QuickLink key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
