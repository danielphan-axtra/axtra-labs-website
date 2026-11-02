import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HeroVideo from "@/components/HeroVideo";
import "@/styles/home.css";

export const metadata: Metadata = pageMeta({
  title: "Axtra Labs — AI Software Engineering",
  description:
    "AI-augmented software engineering from Vietnam. Gen AI, data, robotics, and DevOps teams that ship production systems.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="hero">
        <HeroVideo />
        <div className="hero-overlay"></div>
        <div className="wrap hero-inner">
          <h1>AI engineering, built by humans.</h1>
          <p>Applied AI, data and robotics expertise for your team.</p>
          <div className="hero-pill-row">
            <a href="/ai-services" className="hero-pill">AI Services <span>→</span></a>
            <a href="/data-bi" className="hero-pill">Data &amp; BI <span>→</span></a>
            <a href="/embedded-software" className="hero-pill">Embedded Software <span>→</span></a>
            <a href="/ai-robotics" className="hero-pill">AI for Robotics <span>→</span></a>
          </div>
        </div>
      </section>

      {/* 2. PRACTICES */}
      <section id="services" className="practices">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Six services, one team</h2>
            <p>Gen AI, data, embedded, robotics, DevOps and full-stack — one delivery team across every engagement.</p>
          </div>

          <div className="svc-grid">
            <a href="/ai-services" className="svc-card long reveal">
              <div className="svc-bg"><img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&dpr=1" alt="AI engineering workspace" loading="lazy" decoding="async" /></div>
              <div className="svc-content">
                <h3>AI Services</h3>
                <p>Gen AI apps, agents, RAG pipelines and LLM fine-tuning — proof-of-concept to production.</p>
                <span className="svc-link">Explore <span>→</span></span>
              </div>
            </a>

            <a href="/data-bi" className="svc-card short reveal">
              <div className="svc-bg"><img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&dpr=1" alt="Data analytics dashboard" loading="lazy" decoding="async" /></div>
              <div className="svc-content">
                <h3>Data &amp; BI</h3>
                <p>Pipelines and dashboards that turn operational data into decisions.</p>
                <span className="svc-link">Explore <span>→</span></span>
              </div>
            </a>

            <a href="/embedded-software" className="svc-card short reveal">
              <div className="svc-bg"><img src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&dpr=1" alt="Embedded hardware workbench" loading="lazy" decoding="async" /></div>
              <div className="svc-content">
                <h3>Embedded Software</h3>
                <p>Firmware, RTOS and real-time systems for connected devices.</p>
                <span className="svc-link">Explore <span>→</span></span>
              </div>
            </a>

            <a href="/ai-robotics" className="svc-card short reveal">
              <div className="svc-bg"><img src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=700&h=700&q=80" alt="Industrial robotic arm" loading="lazy" decoding="async" /></div>
              <div className="svc-content">
                <h3>AI for Robotics</h3>
                <p>Perception, navigation and embedded inference for autonomous systems.</p>
                <span className="svc-link">Explore <span>→</span></span>
              </div>
            </a>

            <a href="/devops" className="svc-card short reveal">
              <div className="svc-bg"><img src="/assets/img/services/devops.jpg" alt="DevOps cloud infrastructure" loading="lazy" decoding="async" /></div>
              <div className="svc-content">
                <h3>DevOps</h3>
                <p>CI/CD, Kubernetes and MLOps for AI-driven products.</p>
                <span className="svc-link">Explore <span>→</span></span>
              </div>
            </a>

            <a href="/ai-software-development" className="svc-card long reveal">
              <div className="svc-bg"><img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1000&h=700&dpr=1" alt="Software engineers collaborating" loading="lazy" decoding="async" /></div>
              <div className="svc-content">
                <h3>AI-Software Development</h3>
                <p>Full-stack teams who ship AI-native products — not bolt AI on later.</p>
                <span className="svc-link">Explore <span>→</span></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 3. AT A GLANCE */}
      <section className="glance-band">
        <div className="glance">
          <div className="wrap glance-inner reveal">
            <div className="glance-split">
              <div className="logo-wall" aria-label="Client logos">
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-02.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-02.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-04.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-04.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-05.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-05.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-06.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-06.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-07.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-07.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-09.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-09.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-10.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-10.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-11.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-11.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-16.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-16.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-19.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-19.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-20.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-20.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-21.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-21.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-22.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-22.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-24.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-24.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-25.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-25.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-27.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-27.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-01.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-01.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-03.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-03.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-08.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-08.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-12.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-12.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-13.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-13.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-14.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-14.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-18.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-18.png?v=3" alt="" loading="lazy" decoding="async" /></div>
                  <div className="logo-cell" style={{ "--logo": "url('/assets/img/clients/logo-23.png?v=3')" } as CSSProperties}><img className="logo-img-client" src="/assets/img/clients/logo-23.png?v=3" alt="" loading="lazy" decoding="async" /></div>
              </div>
              <div className="glance-metrics">
                <div className="glance-headline"><span className="count-up" data-target="100" data-suffix="M+">0</span><br />users reached</div>
                <div className="featured-stats">
                  <div className="fstat">
                    <div className="fnum count-up" data-target="60" data-suffix="+">0</div>
                    <div className="flabel">AI use cases delivered</div>
                    <div className="fdesc">From Gen AI products to BI platforms to embedded robotics, across 15 countries and 10 industries.</div>
                  </div>
                  <div className="fstat">
                    <div className="fnum count-up" data-target="60" data-suffix="%+">0</div>
                    <div className="flabel">Average cost saved</div>
                    <div className="fdesc">Compared to building and managing an equivalent team in-house, without compromising delivery quality.</div>
                  </div>
                </div>
                <div className="mini-stats">
                  <div className="mstat"><div className="num count-up" data-target="15" data-suffix="+">0</div><div className="lbl">Countries served</div></div>
                  <div className="mstat"><div className="num count-up" data-target="4" data-suffix="+">0</div><div className="lbl">NVIDIA Ambassadors</div></div>
                  <div className="mstat"><div className="num count-up" data-target="40" data-suffix="+">0</div><div className="lbl">AI + Robot Engineer</div></div>
                  <div className="mstat"><div className="num count-up" data-target="110" data-suffix="+">0</div><div className="lbl">AI Software Engineers</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES */}
      <section id="industries" style={{padding: '0'}}>
        <div className="industries-band" id="industriesBand">
          <div className="ind-bg" aria-hidden="true">
            <img className="is-active" data-ind="home-services" src="/assets/img/industries/home-services.jpg" alt="" loading="lazy" decoding="async" />
            <img data-ind="retail" src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1" alt="" loading="lazy" decoding="async" />
            <img data-ind="fintech" src="/assets/img/industries/fintech.jpg?v=2" alt="" loading="lazy" decoding="async" />
            <img data-ind="manufacturing" src="/assets/img/industries/manufacturing.jpg" alt="" loading="lazy" decoding="async" />
            <img data-ind="logistics" src="https://images.pexels.com/photos/4481942/pexels-photo-4481942.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1" alt="" loading="lazy" decoding="async" />
            <img data-ind="healthcare" src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1" alt="" loading="lazy" decoding="async" />
          </div>
          <h2 className="ind-title">Industries</h2>

          <div className="ind-viewport">
            <div className="ind-track" id="indTrack">
              <a href="/home-services" className="ind-col is-active" data-ind="home-services">
                <span className="ind-name">Home Services</span>
                <div className="ind-copy">
                  <p>Matching, dispatch and field ops AI for home service platforms.</p>
                  <span className="ind-link">Learn more <span>→</span></span>
                </div>
              </a>
              <a href="/retail" className="ind-col" data-ind="retail">
                <span className="ind-name">Retail</span>
                <div className="ind-copy">
                  <p>AI and data engineering for retailers who need conversion and inventory that holds.</p>
                  <span className="ind-link">Learn more <span>→</span></span>
                </div>
              </a>
              <a href="/fintech" className="ind-col" data-ind="fintech">
                <span className="ind-name">Fintech</span>
                <div className="ind-copy">
                  <p>Fraud detection, underwriting and portfolio AI for financial products.</p>
                  <span className="ind-link">Learn more <span>→</span></span>
                </div>
              </a>
              <a href="/manufacturing" className="ind-col" data-ind="manufacturing">
                <span className="ind-name">Manufacturing</span>
                <div className="ind-copy">
                  <p>Production monitoring, predictive maintenance and factory automation systems.</p>
                  <span className="ind-link">Learn more <span>→</span></span>
                </div>
              </a>
              <a href="/logistics" className="ind-col" data-ind="logistics">
                <span className="ind-name">Logistics</span>
                <div className="ind-copy">
                  <p>Route optimization and warehouse automation systems.</p>
                  <span className="ind-link">Learn more <span>→</span></span>
                </div>
              </a>
              <a href="/healthcare" className="ind-col" data-ind="healthcare">
                <span className="ind-name">Healthcare</span>
                <div className="ind-copy">
                  <p>Applied AI for clinical and operational workflows.</p>
                  <span className="ind-link">Learn more <span>→</span></span>
                </div>
              </a>
            </div>
          </div>

          <div className="ind-arrows">
            <button type="button" className="arrow-btn" id="indPrev" aria-label="Previous industries">←</button>
            <button type="button" className="arrow-btn" id="indNext" aria-label="Next industries">→</button>
          </div>
        </div>
      </section>

      {/* 6. RECOGNITION */}
      <section id="about" className="recog">
        <div className="wrap">
          <div className="section-head reveal">
            <h2>Research-backed, industry recognized</h2>
            <p>University R&amp;D, hyperscaler ecosystems and a certified bench — the same people who publish and compete also ship production systems.</p>
          </div>

          <div className="partner-grid">
            <div className="partner-card reveal">
              <div className="partner-photo"><img src="/assets/img/partners/ptit-rd.png" alt="Axtra Labs team with PTIT" loading="lazy" decoding="async" /></div>
              <div className="partner-body">
                <h3>PTIT R&amp;D Center</h3>
                <p>Joint lab with PTIT — applied AI, robotics, and engineers trained on live Axtra work.</p>
              </div>
            </div>
            <div className="partner-card reveal">
              <div className="partner-photo"><img src="/assets/img/partners/nvidia-ambassador.jpg" alt="NVIDIA AI Day Ho Chi Minh City" loading="lazy" decoding="async" /></div>
              <div className="partner-body">
                <h3>NVIDIA Ambassador</h3>
                <p>Four ambassadors in-house for CUDA, TensorRT, and production GPU systems.</p>
              </div>
            </div>
            <div className="partner-card reveal">
              <div className="partner-photo partner-photo--collage">
                <img className="partner-photo-main" src="/assets/img/partners/qualcomm-stage.jpg" alt="Axtra Labs presenting at Qualcomm Vietnam Innovation Challenge" loading="lazy" decoding="async" />
                <div className="partner-photo-inset">
                  <img src="/assets/img/partners/qualcomm-trophy.jpg" alt="QVIC 2026 Top 15 trophy for Axtra Labs" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="partner-body">
                <h3>Qualcomm Challenge</h3>
                <p>Top 15 nationwide, 2026 — applied edge AI for devices, cameras, and on-prem inference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MOSAIC */}
      <section id="work" className="work-mosaic" style={{paddingTop: '32px'}}>
        <span id="insights" aria-hidden="true" style={{display: 'block', position: 'relative', top: '-80px'}}></span>
        <div className="wrap">
          <div className="section-head">
            <h2>Outcomes and technical notes</h2>
          </div>
        </div>
        <div className="mosaic">
          {/* Row 1: photo | service (blue) | case study photo+text (span 2) */}
          <div className="tile photo-plain reveal">
            <div className="tile-media"><img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=700&h=760&dpr=1" alt="Delivery team collaborating" loading="lazy" decoding="async" /></div>
          </div>
          <a href="/ai-services" className="tile color-blue reveal">
            <div className="tile-content">
              <div className="tile-tag">Service</div>
              <h4>AI Services</h4>
              <div className="tile-desc">Gen AI apps, agents, RAG pipelines and LLM fine-tuning, from proof-of-concept to production.</div>
            </div>
          </a>
          <a href="/ai-powered-rfp-tender-response-platform" className="tile color-navy span2 reveal">
            <div className="tile-content">
              <div className="tile-tag">Case Study</div>
              <h4>AI-Powered RFP &amp; Tender Response Platform</h4>
              <div className="tile-desc">Tender preparation time reduced by 50% for a Europe-based B2B SaaS startup, with up to 90% less time on repetitive work.</div>
            </div>
          </a>

          {/* Row 2: case study (dark navy) | photo | case study (light) | photo */}
          <a href="/uk-infrastructure-project-tracking-portal" className="tile color-navy reveal">
            <div className="tile-content">
              <div className="tile-tag">Case Study</div>
              <h4>Enterprise Project Tracking Portal</h4>
              <div className="tile-desc">Reporting delays reduced by 70%+ for 400+ users across 10+ departments at a UK infrastructure firm.</div>
            </div>
          </a>
          <div className="tile photo-plain reveal">
            <div className="tile-media"><img src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=700&h=760&dpr=1" alt="Business reporting dashboards" loading="lazy" decoding="async" /></div>
          </div>
          <a href="/intelligent-loan-processing-platform" className="tile color-navy reveal">
            <div className="tile-content">
              <div className="tile-tag">Case Study</div>
              <h4>Intelligent Loan Processing Platform</h4>
              <div className="tile-desc">Document intake for a US fintech lender. Thousands of documents a month, and the contract was extended 7 times.</div>
            </div>
          </a>
          <div className="tile photo-plain reveal">
            <div className="tile-media"><img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=700&h=760&dpr=1" alt="Code on a development workstation" loading="lazy" decoding="async" /></div>
          </div>

          {/* Row 3: insight (light, span 2) | photo | case study (blue) */}
          <div className="tile color-navy span2 reveal">
            <div className="tile-content">
              <div className="tile-tag">Insight</div>
              <h4>RAG vs. fine-tuning for a domain chatbot</h4>
              <div className="tile-desc">A practical framework for deciding when retrieval beats retraining for domain-specific chatbots.</div>
            </div>
          </div>
          <div className="tile photo-plain reveal">
            <div className="tile-media"><img src="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=700&h=760&dpr=1" alt="Factory production line" loading="lazy" decoding="async" /></div>
          </div>
          <a href="/ai-powered-retail-traffic-analytics" className="tile color-blue reveal">
            <div className="tile-content">
              <div className="tile-tag">Case Study</div>
              <h4>AI-Powered Retail Traffic Analytics</h4>
              <div className="tile-desc">Footfall and dwell-time analytics on existing CCTV for a regional mall operator in Thailand.</div>
            </div>
          </a>

          {/* Row 4: photo | service (blue) | service photo+text (span 2) */}
          <div className="tile photo-plain reveal">
            <div className="tile-media"><img src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=700&h=760&q=80" alt="Industrial robot on a factory floor" loading="lazy" decoding="async" /></div>
          </div>
          <a href="/data-bi" className="tile color-blue reveal">
            <div className="tile-content">
              <div className="tile-tag">Service</div>
              <h4>Data &amp; BI</h4>
              <div className="tile-desc">Pipelines and dashboards that turn operational data into decisions.</div>
            </div>
          </a>
          <a href="/devops" className="tile photo-text span2 reveal">
            <div className="tile-media"><img src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200&h=760&dpr=1" alt="Server infrastructure for CI/CD and MLOps" loading="lazy" decoding="async" /></div>
            <div className="tile-content">
              <div className="tile-tag">Service</div>
              <h4>DevOps</h4>
              <div className="tile-desc">CI/CD, Kubernetes and MLOps for AI-driven products.</div>
            </div>
          </a>
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section id="contact" style={{padding: '0'}}>
        <div className="cta-banner cta-banner--split">
          <div className="cta-banner-inner">
            <h2>Ready to start your AI project?</h2>
            <div className="cta-right">
              <p>Response within 1 business day. You will hear from an engineer, not a salesperson.</p>
              <a href="/contact" className="btn btn-inv">Contact Us <span>→</span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
