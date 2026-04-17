import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [{ title: 'Contact | Clark & Wolcott Masonry and Construction' }],
  }),
  component: ContactPage,
})

const services = [
  'Residential Masonry',
  'Commercial Masonry',
  'Remodeling',
  'Historic Restoration',
  'Chimney Services',
  'Other',
]

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Page hero */}
      <div
        style={{
          background: 'var(--dark)',
          padding: '5rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '3px solid var(--brick)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent 0px, transparent 29px,
                rgba(139,58,31,0.07) 29px, rgba(139,58,31,0.07) 30px
              ),
              repeating-linear-gradient(
                90deg,
                transparent 0px, transparent 59px,
                rgba(139,58,31,0.04) 59px, rgba(139,58,31,0.04) 60px
              )
            `,
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              fontFamily: 'var(--font-condensed)',
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--brick)',
              marginBottom: '0.75rem',
            }}
          >
            Get in Touch
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              color: 'var(--cream)',
              marginBottom: '0.75rem',
              lineHeight: 1.1,
            }}
          >
            Tell Us About Your Project
          </h1>
          <div
            style={{ width: '48px', height: '3px', background: 'var(--brick)', marginBottom: '1.25rem' }}
          />
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--stone-light)',
              maxWidth: '520px',
              lineHeight: 1.7,
            }}
          >
            Whether you have a small residential repair or a large commercial project, we'd love to
            hear from you. Fill out the form below or call us directly at{' '}
            <a
              href="tel:5852613180"
              style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}
            >
              585-261-3180
            </a>
            .
          </p>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '5rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Contact Form */}
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.5rem',
              color: 'var(--dark)',
              marginBottom: '0.5rem',
            }}
          >
            Send Us a Message
          </h2>
          <div style={{ width: '36px', height: '2px', background: 'var(--brick)', marginBottom: '2rem' }} />

          {submitted ? (
            <div
              style={{
                background: 'var(--dark-2)',
                padding: '2.5rem',
                borderLeft: '4px solid var(--gold)',
                color: 'var(--cream)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  marginBottom: '0.75rem',
                }}
              >
                Thank You!
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--stone-light)',
                  lineHeight: 1.7,
                }}
              >
                We've received your message and will get back to you within one business day. For
                urgent inquiries, please call us directly at{' '}
                <a
                  href="tel:5852613180"
                  style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}
                >
                  585-261-3180
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="form-label" style={{ color: 'var(--stone)', fontFamily: 'var(--font-condensed)' }}>
                    Full Name <span style={{ color: 'var(--brick)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                    className="form-input"
                    style={{
                      background: 'white',
                      border: '1px solid var(--cream-dark)',
                      color: 'var(--text)',
                      padding: '0.75rem 1rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      width: '100%',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                  />
                </div>
                <div>
                  <label className="form-label" style={{ color: 'var(--stone)', fontFamily: 'var(--font-condensed)' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(585) 000-0000"
                    style={{
                      background: 'white',
                      border: '1px solid var(--cream-dark)',
                      color: 'var(--text)',
                      padding: '0.75rem 1rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      width: '100%',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="form-label" style={{ color: 'var(--stone)', fontFamily: 'var(--font-condensed)' }}>
                  Email Address <span style={{ color: 'var(--brick)' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  style={{
                    background: 'white',
                    border: '1px solid var(--cream-dark)',
                    color: 'var(--text)',
                    padding: '0.75rem 1rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    width: '100%',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label className="form-label" style={{ color: 'var(--stone)', fontFamily: 'var(--font-condensed)' }}>
                  Service Needed
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{
                    background: 'white',
                    border: '1px solid var(--cream-dark)',
                    color: form.service ? 'var(--text)' : 'var(--stone)',
                    padding: '0.75rem 1rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    width: '100%',
                    outline: 'none',
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label" style={{ color: 'var(--stone)', fontFamily: 'var(--font-condensed)' }}>
                  Project Description <span style={{ color: 'var(--brick)' }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your project — location, scope, timeline, any special considerations..."
                  rows={5}
                  style={{
                    background: 'white',
                    border: '1px solid var(--cream-dark)',
                    color: 'var(--text)',
                    padding: '0.75rem 1rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    width: '100%',
                    outline: 'none',
                    resize: 'vertical',
                    lineHeight: 1.6,
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ fontSize: '0.82rem', padding: '0.9rem 2rem', alignSelf: 'flex-start' }}
              >
                Send Message
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.5rem',
              color: 'var(--dark)',
              marginBottom: '0.5rem',
            }}
          >
            Contact Information
          </h2>
          <div style={{ width: '36px', height: '2px', background: 'var(--brick)', marginBottom: '2rem' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {[
              {
                title: 'Phone',
                value: '585-261-3180',
                detail: 'Monday – Friday, 7am – 6pm',
                href: 'tel:5852613180',
                icon: 'M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z',
              },
              {
                title: 'Email',
                value: 'JClark@clarkandwolcott.net',
                detail: 'We respond within one business day',
                href: 'mailto:JClark@clarkandwolcott.net',
                icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
              },
              {
                title: 'Service Area',
                value: 'Rochester, NY & Western New York',
                detail: 'Including Monroe, Ontario, and Wayne counties',
                href: '#',
                icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    background: 'var(--brick)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--cream)">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-condensed)',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--stone)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {item.title}
                  </div>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      color: 'var(--dark)',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {item.value}
                  </a>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      color: 'var(--stone)',
                    }}
                  >
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Florida note */}
          <div
            style={{
              marginTop: '3rem',
              background: 'var(--cream-dark)',
              borderLeft: '3px solid var(--gold)',
              padding: '1.25rem 1.5rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-condensed)',
                fontWeight: 700,
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '0.4rem',
              }}
            >
              Florida Property Owners
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                lineHeight: 1.6,
                color: 'var(--stone)',
              }}
            >
              Do you own property in Florida? We have a dedicated service offering for out-of-state
              property owners. Contact us to learn more.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
