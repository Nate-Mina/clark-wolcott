import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const services = [
  {
    id: 'residential',
    title: 'Residential Masonry',
    description:
      'From custom brick facades and stone walkways to retaining walls and outdoor fireplaces — we bring lasting beauty and structural integrity to your home.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    id: 'commercial',
    title: 'Commercial Masonry',
    description:
      'Large-scale commercial projects demand precision and durability. Our team delivers structural masonry solutions built to code and designed to last decades.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
      </svg>
    ),
  },
  {
    id: 'remodeling',
    title: 'Remodeling',
    description:
      'Transform aging structures with expert masonry renovation. We repair, replace, and reimagine existing brickwork to restore functionality and curb appeal.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3ZM17.5 10.1C19.92 10.1 21.9 8.12 21.9 5.7C21.9 5.06 21.76 4.46 21.53 3.92L18.76 6.7L17.29 5.23L20.07 2.47C19.53 2.24 18.93 2.1 18.3 2.1C15.88 2.1 13.9 4.08 13.9 6.5C13.9 7.03 14 7.54 14.18 8L2.1 19.9L3.5 21.3L5.6 21.3L5.6 19.3L7.6 19.3L7.6 17.3L9.6 17.3L9.6 15.3L11.6 15.3L11.6 13.3L12.5 13.3C13 13.5 13.6 13.6 14.2 13.6C14.7 13.6 15.3 13.5 15.8 13.3L13.5 11L13.78 10.72C13.35 10.34 13 9.85 12.7 9.3C12.28 9.96 12.1 10.62 12.1 11.3C12.1 12 12.28 12.6 12.68 13.12L10.5 15.3L10.5 14.3L9.5 14.3L9.5 15.3L7.5 15.3L7.5 16.3L6.5 16.3L6.5 17.3L5.5 17.3L5.5 16.3L4 17.8L4 19.3L4.5 19.3L4.5 20.3L3.1 21.7L2 20.5L13.9 8.6C14.1 9.1 14.14 9.62 14.14 10.1L17.5 10.1Z" />
      </svg>
    ),
  },
  {
    id: 'historic',
    title: 'Historic Restoration',
    description:
      "We specialize in preserving the architectural heritage of Rochester's historic landmarks. Our craftsmen match original materials and techniques with scholarly precision.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
  },
  {
    id: 'chimney',
    title: 'Chimney Services',
    description:
      'Full-service chimney repair, rebuilding, and liner installation. We ensure safe, efficient operation while maintaining the structural character of your chimney.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
  },
]

const galleryItems = [
  { label: 'Brick Restoration', color: '#4a3728', rows: 2 },
  { label: 'Stone Walkway', color: '#6b6560', rows: 1 },
  { label: 'Chimney Rebuild', color: '#7a4020', rows: 1 },
  { label: 'Historic Church', color: '#3d3228', rows: 2 },
  { label: 'Commercial Facade', color: '#5a4030', rows: 1 },
  { label: 'Garden Wall', color: '#4d5a40', rows: 1 },
]

const testimonials = [
  {
    name: 'Margaret T.',
    location: 'Brighton, NY',
    text: 'Clark & Wolcott rebuilt our entire chimney after years of water damage. The craftsmanship is impeccable and they matched the original brick perfectly. Couldn\'t be happier.',
    rating: 5,
  },
  {
    name: 'Robert F.',
    location: 'Pittsford, NY',
    text: 'They restored the stone facade on our 1890s Victorian with the kind of care and attention only a true craftsman can provide. The results exceeded every expectation.',
    rating: 5,
  },
  {
    name: 'Linda M.',
    location: 'Rochester, NY',
    text: 'From the initial quote to the final walkthrough, working with Clark & Wolcott was professional and seamless. Our new patio wall is absolutely beautiful.',
    rating: 5,
  },
]

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '1,400+', label: 'Projects Completed' },
  { value: '100%', label: 'Licensed & Insured' },
  { value: '5★', label: 'Customer Rated' },
]

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  )
}

function HomePage() {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          background: 'var(--dark)',
          overflow: 'hidden',
        }}
      >
        {/* Stone texture background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 30px,
                rgba(255,255,255,0.015) 30px,
                rgba(255,255,255,0.015) 31px
              ),
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 60px,
                rgba(255,255,255,0.01) 60px,
                rgba(255,255,255,0.01) 61px
              )
            `,
            zIndex: 0,
          }}
        />

        {/* Brick accent column — right side */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '42%',
            height: '100%',
            background: `
              linear-gradient(to right, var(--dark) 0%, transparent 30%),
              repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 29px,
                rgba(139,58,31,0.12) 29px,
                rgba(139,58,31,0.12) 31px
              ),
              repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 14px,
                rgba(0,0,0,0.3) 14px,
                rgba(0,0,0,0.3) 16px,
                transparent 16px,
                transparent 30px,
                rgba(0,0,0,0.3) 30px,
                rgba(0,0,0,0.3) 32px
              ),
              linear-gradient(135deg, #2c1a10 0%, #1a1008 50%, #261a12 100%)
            `,
            backgroundSize: 'auto, auto, 120px auto, auto',
            zIndex: 0,
          }}
        />

        {/* Diagonal divider */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: '38%',
            width: '120px',
            height: '100%',
            background: `linear-gradient(to right, var(--dark), transparent)`,
            zIndex: 1,
          }}
        />

        {/* Brick accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '40%',
            width: '4px',
            height: '160px',
            background: 'var(--brick)',
            zIndex: 2,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1280px',
            width: '100%',
            margin: '0 auto',
            padding: '6rem 1.5rem 6rem',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div
              className="animate-fade-up"
              style={{
                fontFamily: 'var(--font-condensed)',
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--brick)',
                marginBottom: '1.25rem',
                opacity: 0,
              }}
            >
              Rochester, New York &nbsp;·&nbsp; Est. Masonry Excellence
            </div>

            <h1
              className="animate-fade-up delay-100"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
                lineHeight: 1.08,
                color: 'var(--cream)',
                marginBottom: '1.5rem',
                opacity: 0,
              }}
            >
              Built to Last.
              <br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Crafted with Pride.</em>
            </h1>

            <div
              className="animate-fade-up delay-200"
              style={{
                width: '52px',
                height: '3px',
                background: 'var(--brick)',
                marginBottom: '1.5rem',
                opacity: 0,
              }}
            />

            <p
              className="animate-fade-up delay-300"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--stone-light)',
                marginBottom: '2.5rem',
                maxWidth: '520px',
                opacity: 0,
              }}
            >
              Clark & Wolcott Masonry and Construction specializes in a wide range of masonry
              services — from residential brickwork and historic restoration to commercial
              construction and chimney rebuilds. Quality, safety, and sustainability in every
              project.
            </p>

            <div
              className="animate-fade-up delay-400"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', opacity: 0 }}
            >
              <a href="#services" className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.85rem 2rem' }}>
                Our Services
              </a>
              <Link to="/contact" className="btn-outline" style={{ fontSize: '0.82rem', padding: '0.85rem 2rem' }}>
                Get a Free Quote
              </Link>
            </div>

            {/* Phone */}
            <a
              href="tel:5852613180"
              className="animate-fade-up delay-500"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '2.5rem',
                fontFamily: 'var(--font-condensed)',
                fontSize: '1.1rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: 'var(--cream)',
                textDecoration: 'none',
                opacity: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--brick)">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              585-261-3180
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--stone)',
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, var(--stone), transparent)',
            }}
          />
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--brick)',
          padding: '2rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '2rem',
                  color: 'var(--cream)',
                  lineHeight: 1,
                  marginBottom: '0.3rem',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-condensed)',
                  fontWeight: 600,
                  fontSize: '0.68rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,232,0.7)',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section id="services" style={{ padding: '6rem 1.5rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Heading */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>
              What We Do
            </div>
            <h2
              className="section-title"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                color: 'var(--dark)',
                maxWidth: '480px',
              }}
            >
              Masonry Services Built on Decades of Expertise
            </h2>
            <div className="accent-line" />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: 'var(--stone)',
                maxWidth: '560px',
                marginTop: '1rem',
              }}
            >
              No matter the size or scope of the project, we are committed to delivering the
              highest quality work and customer service — from a single homeowner to a historic
              preservation board.
            </p>
          </div>

          {/* Services Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className="service-card"
                style={{
                  background: 'white',
                  borderTop: '3px solid var(--brick)',
                  padding: '2rem',
                  position: 'relative',
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    color: 'var(--brick)',
                    marginBottom: '1.25rem',
                    opacity: 0.85,
                  }}
                >
                  {svc.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    color: 'var(--dark)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.25,
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'var(--stone)',
                  }}
                >
                  {svc.description}
                </p>
                <div
                  style={{
                    marginTop: '1.5rem',
                    fontFamily: 'var(--font-condensed)',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--brick)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    right: '1.5rem',
                    fontFamily: 'var(--font-condensed)',
                    fontWeight: 800,
                    fontSize: '3.5rem',
                    color: 'rgba(0,0,0,0.03)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / COMPANY ───────────────────────────────────── */}
      <section
        style={{
          background: 'var(--dark-2)',
          padding: '6rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                rgba(139,58,31,0.03) 0px,
                rgba(139,58,31,0.03) 1px,
                transparent 1px,
                transparent 40px
              )
            `,
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Text */}
          <div>
            <div
              className="section-label"
              style={{ color: 'var(--gold)', marginBottom: '0.75rem' }}
            >
              About Our Company
            </div>
            <h2
              className="section-title"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                color: 'var(--cream)',
                marginBottom: '0.75rem',
              }}
            >
              Rochester's Trusted Masonry Craftsmen
            </h2>
            <div
              className="accent-line"
              style={{ background: 'var(--gold)', marginBottom: '1.5rem' }}
            />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: 'var(--stone-light)',
                marginBottom: '1.25rem',
              }}
            >
              Clark & Wolcott Masonry and Construction has been a cornerstone of Rochester's
              building community for over two decades. We specialize in providing a wide range of
              masonry construction services with an unwavering commitment to craftsmanship, safety,
              and sustainability.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: 'var(--stone-light)',
                marginBottom: '1.75rem',
              }}
            >
              Our experienced team handles projects of every scale — from custom residential
              brickwork and stone veneer to large commercial facades and the careful restoration of
              Rochester's historic landmarks. We bring the same level of dedication and skill to
              every single job.
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.85rem 2rem' }}>
              Tell Us About Your Project
            </Link>
          </div>

          {/* Visual stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
            }}
          >
            {[
              {
                value: '25+',
                label: 'Years Serving Rochester',
                desc: 'Deep roots in the Western NY community',
              },
              {
                value: '1,400+',
                label: 'Projects Completed',
                desc: 'From single homes to landmark restorations',
              },
              {
                value: 'A+',
                label: 'BBB Rating',
                desc: 'Trusted, accredited, and fully insured',
              },
              {
                value: '5★',
                label: 'Customer Reviews',
                desc: 'Consistently top-rated in Western NY',
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  padding: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: '2.25rem',
                    color: 'var(--gold)',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-condensed)',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--cream)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: 'var(--stone)',
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────── */}
      <section id="gallery" style={{ padding: '6rem 1.5rem', background: 'var(--cream-dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>
                Our Work
              </div>
              <h2
                className="section-title"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--dark)' }}
              >
                Project Gallery
              </h2>
              <div className="accent-line" />
            </div>
            <Link
              to="/contact"
              className="btn-primary"
              style={{ fontSize: '0.78rem', padding: '0.7rem 1.5rem', alignSelf: 'center' }}
            >
              View All Work
            </Link>
          </div>

          {/* Gallery Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(2, 220px)',
              gap: '8px',
            }}
          >
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="gallery-item"
                style={{
                  gridRow: i === 0 || i === 3 ? 'span 2' : 'span 1',
                  background: `
                    linear-gradient(135deg, ${item.color}dd 0%, ${item.color}88 100%),
                    repeating-linear-gradient(
                      0deg,
                      rgba(255,255,255,0.03) 0px,
                      rgba(255,255,255,0.03) 1px,
                      transparent 1px,
                      transparent 30px
                    )
                  `,
                  cursor: 'pointer',
                }}
              >
                <div className="overlay">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section
        id="testimonials"
        style={{ background: 'var(--dark)', padding: '6rem 1.5rem', position: 'relative' }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(to right, var(--brick), var(--gold), var(--brick))',
          }}
        />
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div
              className="section-label"
              style={{ color: 'var(--gold)', marginBottom: '0.75rem' }}
            >
              Customer Reviews
            </div>
            <h2
              className="section-title"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                color: 'var(--cream)',
              }}
            >
              What Our Clients Say
            </h2>
            <div className="accent-line" style={{ background: 'var(--gold)', margin: '1rem auto' }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <StarRating count={t.rating} />
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    lineHeight: 1.75,
                    color: 'var(--stone-light)',
                    marginBottom: '1.25rem',
                    fontStyle: 'italic',
                  }}
                >
                  "{t.text}"
                </p>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-condensed)',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      color: 'var(--cream)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      color: 'var(--stone)',
                      marginTop: '0.15rem',
                    }}
                  >
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--brick)',
          padding: '4rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(0,0,0,0.08) 0px,
                rgba(0,0,0,0.08) 1px,
                transparent 1px,
                transparent 22px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(0,0,0,0.05) 0px,
                rgba(0,0,0,0.05) 1px,
                transparent 1px,
                transparent 44px
              )
            `,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                color: 'var(--cream)',
                marginBottom: '0.5rem',
              }}
            >
              Ready to Start Your Project?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'rgba(245,240,232,0.8)',
              }}
            >
              Contact us today for a free consultation and estimate.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="tel:5852613180"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--cream)',
                color: 'var(--brick)',
                fontFamily: 'var(--font-condensed)',
                fontWeight: 800,
                fontSize: '1rem',
                letterSpacing: '0.05em',
                padding: '0.85rem 2rem',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.15s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              585-261-3180
            </a>
            <Link
              to="/contact"
              className="btn-outline"
              style={{
                borderColor: 'rgba(245,240,232,0.6)',
                fontSize: '0.82rem',
                padding: '0.85rem 2rem',
              }}
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
