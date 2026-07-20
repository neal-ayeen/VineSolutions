const logoUrl = `${import.meta.env.BASE_URL}vine-logo.png`;

const services = [
  {
    number: "01",
    title: "Driver onboarding",
    copy: "Move candidates from application to road-ready with structured screening, documentation, training coordination and hands-on support.",
    tags: ["Recruiting", "Screening", "Readiness"],
  },
  {
    number: "02",
    title: "Performance management",
    copy: "Bring attendance, safety events, coaching and daily driver communication into one focused operating rhythm.",
    tags: ["Safety", "Coaching", "Attendance"],
  },
  {
    number: "03",
    title: "Fleet & RTS workflows",
    copy: "Create reliable vehicle assignments, inspection trails and return-to-station workflows without paper or guesswork.",
    tags: ["Inspections", "Assignments", "RTS"],
  },
  {
    number: "04",
    title: "Intelligent scheduling",
    copy: "Build stronger shifts around availability, performance, route demand and the operational rules that matter to your team.",
    tags: ["Availability", "Planning", "Coverage"],
  },
  {
    number: "05",
    title: "Payroll support",
    copy: "Validate punches, reconcile hours and organize incentive and exception data before payroll becomes a fire drill.",
    tags: ["Timecards", "Exceptions", "Accuracy"],
  },
  {
    number: "06",
    title: "Claims & compliance",
    copy: "Keep the records, timelines and operating context your team needs to respond confidently and reduce avoidable risk.",
    tags: ["Records", "Claims", "Compliance"],
  },
];

const faqs = [
  {
    q: "Is Vine Solutions software, a managed service, or both?",
    a: "Both. Vine combines practical operations technology with a support model designed around the real work of running delivery teams. We can strengthen one workflow or connect the full operating lifecycle.",
  },
  {
    q: "Who is Vine Solutions built for?",
    a: "The platform is designed for last-mile delivery operators, DSPs, courier businesses and growing fleet-based service teams that need more control without adding more administrative drag.",
  },
  {
    q: "Can we start with one operational area?",
    a: "Yes. Most teams begin with the highest-friction workflow—often onboarding, driver performance, scheduling or payroll—and expand as the value becomes clear.",
  },
  {
    q: "How does onboarding work?",
    a: "We begin with a focused operating review, map the current workflow, identify the first measurable win and configure a rollout plan around your team, tools and delivery schedule.",
  },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand--compact" : ""}`}>
      <span className="brand-mark" aria-hidden="true">
        <img src={logoUrl} alt="" className="brand-image" />
      </span>
      <span className="brand-copy">
        <strong>Vine</strong>
        <small>Solutions</small>
      </span>
    </span>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="shell header-inner">
          <a href="#top" className="brand-link" aria-label="Vine Solutions home">
            <Brand />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#platform">Platform</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#company">Company</a>
          </nav>

          <a className="button button--ink header-cta" href="#contact">
            Let&apos;s talk <span className="button-dot"><Arrow /></span>
          </a>

          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#platform">Platform</a>
              <a href="#services">Services</a>
              <a href="#approach">Approach</a>
              <a href="#company">Company</a>
              <a href="#contact">Book a strategy call</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Operations, cultivated</p>
            <h1 id="hero-title">
              Better routes.<br />
              Stronger teams.<br />
              <em>Healthier margins.</em>
            </h1>
            <p className="hero-lede">
              One connected operations partner for delivery fleets—onboarding,
              driver performance, scheduling, payroll and compliance.
            </p>
            <div className="hero-actions">
              <a className="button button--green" href="#contact">
                Book a strategy call <span className="button-dot"><Arrow /></span>
              </a>
              <a className="text-link" href="#platform">Explore the platform <span>→</span></a>
            </div>
            <p className="proof-note"><span /> Built around the realities of last-mile delivery</p>
          </div>

          <div className="dashboard-wrap" aria-label="Illustrative operations dashboard">
            <div className="orbit orbit--one" />
            <div className="orbit orbit--two" />
            <div className="dashboard">
              <div className="dashboard-head">
                <div className="dashboard-title"><i /> Operations pulse</div>
                <div className="live"><i /> Live demo</div>
              </div>
              <div className="metric-row">
                <div className="metric"><span>Routes on time</span><strong>96.4%</strong><small>↑ 3.2</small></div>
                <div className="metric"><span>Active drivers</span><strong>148</strong><small>+12</small></div>
                <div className="metric"><span>Cost / stop</span><strong>$2.41</strong><small>↓ 8%</small></div>
              </div>
              <div className="dashboard-grid">
                <div className="chart-card">
                  <div className="card-label"><b>Stops completed</b><span>This week</span></div>
                  <div className="chart-grid-lines"><i /><i /><i /><i /></div>
                  <div className="chart-bars" aria-hidden="true">
                    {[42, 58, 51, 72, 66, 83, 94].map((height, index) => (
                      <span key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="chart-days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
                </div>
                <div className="driver-card">
                  <div className="card-label"><b>Driver readiness</b><span>Today</span></div>
                  {[
                    ["AR", "Ari Reyes", "Ready"],
                    ["MJ", "Maya Jones", "Ready"],
                    ["DK", "Devon Kim", "Review"],
                    ["CS", "Cam Smith", "Ready"],
                  ].map(([initials, name, status], index) => (
                    <div className="driver" key={name}>
                      <i className={`avatar avatar--${index + 1}`}>{initials}</i>
                      <span><b>{name}</b><small>Shift · 10 stops</small></span>
                      <em>{status}</em>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="compliance-card">
              <div><span>Compliance health</span><b>✓</b></div>
              <strong>92% complete</strong>
              <i><span /></i>
              <small>4 driver documents due this month</small>
            </div>
          </div>
        </section>

        <section className="industry-band" aria-label="Industries served">
          <div className="shell industry-inner">
            <p>Built for teams that keep the world moving</p>
            <div>
              <span>Last-mile delivery</span>
              <i />
              <span>Courier networks</span>
              <i />
              <span>Middle mile</span>
              <i />
              <span>Field services</span>
            </div>
          </div>
        </section>

        <section className="platform-section section shell" id="platform">
          <div className="section-intro">
            <p className="eyebrow"><span /> One operating system</p>
            <h2>See the whole operation.<br /><em>Strengthen every shift.</em></h2>
            <p>Vine connects the work that usually lives in separate tools, inboxes and spreadsheets—so leaders can act earlier and teams can move with confidence.</p>
          </div>

          <div className="platform-grid">
            <article className="feature feature--large">
              <div className="feature-top"><span>01 / Command center</span><b>Live</b></div>
              <h3>A clearer daily picture</h3>
              <p>Track staffing, safety, fleet readiness and operating exceptions from one focused view.</p>
              <div className="mini-board" aria-hidden="true">
                <div className="mini-nav"><i /><i /><i /><i /></div>
                <div className="mini-main">
                  <span /><span /><span />
                  <div className="mini-chart"><i /><i /><i /><i /><i /><i /></div>
                </div>
              </div>
            </article>
            <article className="feature feature--lime">
              <div className="feature-top"><span>02 / Action layer</span><b>→</b></div>
              <h3>From signal to next step</h3>
              <p>Turn late punches, expiring documents and safety events into visible, owned action.</p>
              <div className="action-stack">
                <div><i>!</i><span><b>Timecard exception</b><small>Assigned to payroll</small></span><em>Now</em></div>
                <div><i>✓</i><span><b>Vehicle check</b><small>Inspection complete</small></span><em>8:42</em></div>
              </div>
            </article>
            <article className="feature feature--forest">
              <div className="feature-top"><span>03 / Human support</span><b>Always on</b></div>
              <h3>Technology with an operations team behind it</h3>
              <p>Build a system your people will actually use, supported by specialists who understand the pace of delivery.</p>
              <div className="support-row"><span>VS</span><span>OP</span><span>HR</span><p>Vine operations support</p></div>
            </article>
          </div>
        </section>

        <section className="services-section section" id="services">
          <div className="shell">
            <div className="services-heading">
              <div>
                <p className="eyebrow eyebrow--light"><span /> Connected capabilities</p>
                <h2>Every part of the day,<br /><em>working as one.</em></h2>
              </div>
              <p>Start with the workflow creating the most friction. Build toward a more connected, accountable operation.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <div className="tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a href="#contact" aria-label={`Discuss ${service.title}`}>Discuss this capability <Arrow /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section section shell" id="approach">
          <div className="approach-copy">
            <p className="eyebrow"><span /> The Vine method</p>
            <h2>Operational change that takes root.</h2>
            <p>We focus on the workflows that shape the day—not software theater. Each engagement is designed to create clarity, ownership and momentum from the first rollout.</p>
            <a href="#contact" className="text-link">Plan your first win <span>→</span></a>
          </div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Find the friction</h3><p>Map the current operation, pressure points and the cost of workarounds.</p></div></li>
            <li><span>02</span><div><h3>Build the operating rhythm</h3><p>Connect people, data and ownership around the moments that matter.</p></div></li>
            <li><span>03</span><div><h3>Improve in the open</h3><p>Use visible signals and regular reviews to keep the operation moving forward.</p></div></li>
          </ol>
        </section>

        <section className="company-section section" id="company">
          <div className="shell company-grid">
            <div className="company-mark" aria-hidden="true">
              <span className="leaf leaf--one" /><span className="leaf leaf--two" /><span className="leaf leaf--three" />
              <span className="stem" />
              <b>V</b>
            </div>
            <div className="company-copy">
              <p className="eyebrow"><span /> Why Vine Solutions</p>
              <h2>The strongest operations are grown, not installed.</h2>
              <p className="company-lede">Vine Solutions exists to help delivery operators replace fragmented processes with one practical system for people, vehicles, time and risk.</p>
              <div className="principles">
                <div><span>01</span><p><b>Built for operators</b>Every feature starts with a real workflow and a real person accountable for it.</p></div>
                <div><span>02</span><p><b>Clarity over complexity</b>Better decisions begin with fewer blind spots, not more dashboards.</p></div>
                <div><span>03</span><p><b>Partnership over handoff</b>We stay close to the operation as the system takes root.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section section shell">
          <div className="faq-heading">
            <p className="eyebrow"><span /> Frequently asked</p>
            <h2>Good questions.<br /><em>Straight answers.</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.q}<i>+</i></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-inner">
            <div>
              <p className="eyebrow eyebrow--light"><span /> Your next shift starts here</p>
              <h2>Ready to grow a stronger operation?</h2>
            </div>
            <div className="contact-action">
              <p>Tell us where the friction is. We&apos;ll show you the clearest place to start.</p>
              <a className="button button--lime" href="mailto:hello@vinesolutions.com?subject=Vine%20Solutions%20strategy%20call">
                Book a strategy call <span className="button-dot"><Arrow /></span>
              </a>
              <a href="mailto:hello@vinesolutions.com">hello@vinesolutions.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-top">
          <a href="#top" className="brand-link" aria-label="Vine Solutions home"><Brand compact /></a>
          <p>Connected operations for teams that keep the world moving.</p>
          <nav aria-label="Footer navigation">
            <a href="#platform">Platform</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#company">Company</a>
          </nav>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Vine Solutions</span>
          <span>Operations, cultivated.</span>
        </div>
      </footer>
    </div>
  );
}
