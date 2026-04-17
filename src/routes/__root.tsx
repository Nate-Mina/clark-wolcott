import {
  HeadContent,
  Scripts,
  createRootRoute,
  Link,
} from '@tanstack/react-router'
import { useState } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Clark & Wolcott Masonry and Construction — Rochester, NY' },
      {
        name: 'description',
        content:
          'Expert masonry and construction services in Rochester, NY. Residential & commercial masonry, remodeling, historic restoration, and chimney services.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--dark)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          background: 'var(--brick)',
          padding: '0.3rem 1.5rem',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <a
          href="mailto:JClark@clarkandwolcott.net"
          style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            color: 'rgba(245,240,232,0.85)',
            textDecoration: 'none',
          }}
        >
          JClark@clarkandwolcott.net
        </a>
        <a
          href="tel:5852613180"
          style={{
            fontFamily: 'var(--font-condensed)',
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            color: 'var(--cream)',
            textDecoration: 'none',
          }}
        >
          585-261-3180
        </a>
      </div>

      {/* Main nav */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo / Company Name */}
        <Link
          to="/"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              background: 'var(--brick)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="14" width="8" height="8" fill="var(--cream)" opacity="0.9" />
              <rect x="12" y="14" width="10" height="4" fill="var(--cream)" opacity="0.7" />
              <rect x="2" y="2" width="20" height="10" fill="var(--cream)" opacity="0.5" />
              <rect x="12" y="18" width="10" height="4" fill="var(--cream)" opacity="0.9" />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'var(--cream)',
                lineHeight: 1.1,
                letterSpacing: '0.02em',
              }}
            >
              Clark & Wolcott
            </div>
            <div
              style={{
                fontFamily: 'var(--font-condensed)',
                fontWeight: 500,
                fontSize: '0.6rem',
                color: 'var(--stone-light)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Masonry & Construction
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="hidden-mobile"
        >
          <Link to="/" className="nav-link">Home</Link>

          <div className="dropdown">
            <span className="nav-link" style={{ cursor: 'default' }}>
              Masonry
              <svg
                style={{ display: 'inline', marginLeft: '0.25rem', verticalAlign: 'middle' }}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="currentColor"
              >
                <path d="M0 0l5 6 5-6z" />
              </svg>
            </span>
            <div className="dropdown-menu">
              <a href="/#services" className="dropdown-item">Residential Masonry</a>
              <a href="/#services" className="dropdown-item">Commercial Masonry</a>
            </div>
          </div>

          <a href="/#services" className="nav-link">Remodeling</a>
          <a href="/#services" className="nav-link">Historic Restoration</a>
          <a href="/#services" className="nav-link">Chimney</a>
          <a href="/#gallery" className="nav-link">Gallery</a>
          <Link to="/contact" className="nav-link">Contact</Link>
          <a href="/#testimonials" className="nav-link">Reviews</a>
        </div>

        {/* Call Now Button */}
        <a href="tel:5852613180" className="btn-primary" style={{ fontSize: '0.75rem' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          Call Now
        </a>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--cream)',
            padding: '0.25rem',
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            {open ? (
              <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4l5.6 5.6L5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z" />
            ) : (
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            background: 'var(--dark-2)',
            padding: '1rem 1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {[
            { label: 'Home', href: '/' },
            { label: 'Masonry', href: '/#services' },
            { label: 'Remodeling', href: '/#services' },
            { label: 'Historic Restoration', href: '/#services' },
            { label: 'Chimney', href: '/#services' },
            { label: 'Gallery', href: '/#gallery' },
            { label: 'Contact', href: '/contact' },
            { label: 'Reviews', href: '/#testimonials' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                fontFamily: 'var(--font-condensed)',
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--cream)',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:5852613180"
            style={{
              display: 'block',
              marginTop: '1rem',
              textAlign: 'center',
            }}
            className="btn-primary"
          >
            Call 585-261-3180
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}

function SiteFooter() {
  return (
    <footer
      style={{
        background: 'var(--dark)',
        borderTop: '3px solid var(--brick)',
        color: 'var(--stone-light)',
        padding: '4rem 1.5rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.3rem',
              color: 'var(--cream)',
              marginBottom: '0.5rem',
            }}
          >
            Clark & Wolcott
          </div>
          <div
            style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--stone)',
              marginBottom: '1.25rem',
            }}
          >
            Masonry & Construction
          </div>
          <p
            style={{
              fontSize: '0.85rem',
              lineHeight: 1.7,
              color: 'var(--stone)',
              maxWidth: '260px',
            }}
          >
            Expert masonry and construction services in Rochester, NY. Built on craftsmanship,
            safety, and sustainability.
          </p>

          {/* Social */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
            {[
              { label: 'Facebook', d: 'M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07z' },
              { label: 'LinkedIn', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'rgba(255,255,255,0.07)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                  textDecoration: 'none',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = 'var(--brick)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)')
                }
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--stone-light)">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-condensed)',
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--brick)',
              marginBottom: '1.25rem',
            }}
          >
            Services
          </div>
          {[
            'Residential Masonry',
            'Commercial Masonry',
            'Remodeling',
            'Historic Restoration',
            'Chimney Services',
          ].map((s) => (
            <a
              key={s}
              href="/#services"
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--stone)',
                textDecoration: 'none',
                padding: '0.3rem 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--cream)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--stone)')}
            >
              {s}
            </a>
          ))}
        </div>

        {/* Company */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-condensed)',
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--brick)',
              marginBottom: '1.25rem',
            }}
          >
            Company
          </div>
          {['Gallery', 'Reviews', 'Contact'].map((s) => (
            <a
              key={s}
              href={s === 'Gallery' ? '/#gallery' : s === 'Reviews' ? '/#testimonials' : '/contact'}
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--stone)',
                textDecoration: 'none',
                padding: '0.3rem 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--cream)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--stone)')}
            >
              {s}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-condensed)',
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--brick)',
              marginBottom: '1.25rem',
            }}
          >
            Contact Us
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {[
              {
                icon: 'M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z',
                text: '585-261-3180',
                href: 'tel:5852613180',
              },
              {
                icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
                text: 'JClark@clarkandwolcott.net',
                href: 'mailto:JClark@clarkandwolcott.net',
              },
              {
                icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
                text: 'Rochester, NY',
                href: '#',
              },
            ].map((item) => (
              <a
                key={item.text}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                  color: 'var(--stone)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--cream)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--stone)')
                }
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="var(--brick)"
                  style={{ flexShrink: 0, marginTop: '2px' }}
                >
                  <path d={item.icon} />
                </svg>
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '2rem auto 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            color: 'var(--stone)',
          }}
        >
          &copy; 2024 Clark and Wolcott Masonry and Construction. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            color: 'var(--stone)',
          }}
        >
          Rochester, NY &nbsp;|&nbsp; Serving Western New York
        </p>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}
