const services = [
  { number: "01", icon: "</>", title: "Product engineering", text: "From the first sketch to the production release. Purpose-built web and mobile products that move your business forward.", tags: "WEB APPS / MOBILE / PLATFORMS" },
  { number: "02", icon: "⌘", title: "Systems that scale", text: "A solid foundation for what comes next. Reliable APIs, cloud infrastructure, and architecture built to handle growth.", tags: "CLOUD / BACKEND / DEVOPS" },
  { number: "03", icon: "↗", title: "Engineering partnerships", text: "Experienced engineers, right alongside your team. Close collaboration, clear ownership, and software you can build on.", tags: "DEDICATED TEAMS / TECH STRATEGY" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="wallpaper" aria-hidden="true" />
      <header className="header wrap">
        <a className="brand" href="#" aria-label="Ironworks Software home"><span className="brand-mark" aria-hidden="true">IW<span>.</span></span><span>BULLDOZER<small>SOFTWARE ENGINEERING</small></span></a>
        <nav aria-label="Main navigation"><a href="#expertise">Expertise</a><a href="#approach">Our approach</a><a className="nav-contact" href="#contact">Let’s build <span>↗</span></a></nav>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="eyebrow"><span className="signal" /> BUILT WITH PURPOSE. ENGINEERED TO LAST.</div>
          <h1 id="hero-title">Big ideas.<br />Heavy-duty<br /><span>software.</span></h1>
          <p className="hero-copy">We turn complex challenges into powerful digital products. Built on solid engineering. Ready for whatever comes next.</p>
          <div className="hero-actions"><a className="button" href="#contact">Build with us <span aria-hidden="true">↗</span></a><a className="text-link" href="#expertise">Explore our expertise <span aria-hidden="true">↓</span></a></div>
          <div className="hero-caption"><span className="cross" aria-hidden="true">+</span><span>THE DIGITAL WORLD NEEDS<br /><strong>STRONG FOUNDATIONS.</strong></span></div>
          <div className="hero-bottom"><span>IDEA → ENGINEERING → IMPACT</span><a href="#expertise">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
        </section>
        <div className="principles"><div className="wrap"><span>BUILT TO SOLVE.</span><i aria-hidden="true">✳</i><span>ENGINEERED TO SCALE.</span><i aria-hidden="true">✳</i><span>MADE TO MATTER.</span><i aria-hidden="true">✳</i></div></div>
        <section className="section wrap" id="expertise" aria-labelledby="expertise-title">
          <div className="section-heading"><div><p className="eyebrow">01 / OUR EXPERTISE</p><h2 id="expertise-title">Your ambition.<br />Our engineering.</h2></div><p>We bring the tools, the thinking, and the craftsmanship to build your next big thing.</p></div>
          <div className="services">{services.map((service) => <article className="service" key={service.number}><div className="service-top"><span className="service-icon" aria-hidden="true">{service.icon}</span><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><div className="service-tags">{service.tags}</div></article>)}</div>
        </section>
        <section className="approach section wrap" id="approach" aria-labelledby="approach-title"><div><p className="eyebrow">02 / HOW WE WORK</p><h2 id="approach-title">No black boxes.<br />Just solid work.</h2><p className="muted">Good software starts with a real conversation. We stay close, build in the open, and make every iteration count.</p></div><ol className="steps"><li><span>01</span><div><h3>Understand the challenge.</h3><p>Get to the heart of your goals, your users, and what success looks like.</p></div></li><li><span>02</span><div><h3>Build the right foundation.</h3><p>Turn a clear plan into working software, with feedback at every step.</p></div></li><li><span>03</span><div><h3>Ship. Learn. Keep moving.</h3><p>Launch with confidence, measure what matters, and improve as you grow.</p></div></li></ol></section>
        <section className="contact wrap" id="contact" aria-labelledby="contact-title"><p className="eyebrow">LET’S MAKE SOMETHING THAT MATTERS</p><h2 id="contact-title">Bring the vision.<br /><span>We’ll bring the horsepower.</span></h2><p>Tell us what you’re building. Let’s figure out what comes next.</p><a className="button" href="mailto:hello@ironworks.example?subject=Let%E2%80%99s%20build%20something">Start a conversation <span aria-hidden="true">↗</span></a><p className="contact-note">Contact email coming soon.</p></section>
      </main>
      <footer className="footer wrap"><a className="brand footer-brand" href="#">IRONWORKS<span>®</span></a><p>Built with intent. Engineered for impact.</p><span>© {new Date().getFullYear()} Ironworks Software</span></footer>
    </>
  );
}
