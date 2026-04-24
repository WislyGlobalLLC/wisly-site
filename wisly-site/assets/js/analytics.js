/**
 * Wisly Global — Analytics & Tracking Setup
 * 
 * Instructions:
 * 1. Replace GA_MEASUREMENT_ID with your real Google Analytics 4 ID
 * 2. Replace META_PIXEL_ID with your Meta Pixel ID (optional)
 * 3. Include this file in index.html: <script src="assets/js/analytics.js"></script>
 */

// ===== Google Analytics 4 =====
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // ← Replace with your GA4 ID

if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
  // Load GA4 script
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true,
    custom_map: {
      'custom_parameter_1': 'project_id',
      'custom_parameter_2': 'user_type'
    }
  });

  // Track custom events
  window.trackEvent = function(eventName, params = {}) {
    gtag('event', eventName, params);
  };

  // Auto-track card clicks
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (card) {
      const projectId = card.dataset.projectId;
      gtag('event', 'project_card_click', {
        project_id: projectId,
        project_name: card.querySelector('.card-title')?.textContent || 'unknown'
      });
    }
  });
}

// ===== Meta Pixel (Facebook) — Optional =====
const META_PIXEL_ID = 'XXXXXXXXXX'; // ← Replace with your Pixel ID

if (META_PIXEL_ID !== 'XXXXXXXXXX') {
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');
}

// ===== Microsoft Clarity — Optional =====
const CLARITY_ID = 'XXXXXXXXXX'; // ← Replace with your Clarity ID

if (CLARITY_ID !== 'XXXXXXXXXX') {
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", CLARITY_ID);
}

// ===== Wisly Custom Analytics (Privacy-First) =====
const WISLY_ANALYTICS = {
  sessionStart: Date.now(),
  pageViews: 1,

  track: function(event, data = {}) {
    const payload = {
      event,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      referrer: document.referrer,
      screen: `${window.innerWidth}x${window.innerHeight}`,
      language: navigator.language,
      sessionDuration: Date.now() - this.sessionStart,
      ...data
    };

    // Send to your own endpoint (when ready)
    // fetch('https://analytics.wislyglobal.com/track', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload)
    // });

    console.log('[Wisly Analytics]', payload);
  }
};

// Auto-track page view
WISLY_ANALYTICS.track('page_view');

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', () => {
  const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
  if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
    maxScroll = scrollPercent;
    WISLY_ANALYTICS.track('scroll_depth', { depth: scrollPercent });
  }
});
