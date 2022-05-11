import * as React from 'react'

// Lib
import * as gtag from '@lib/gtag'

declare global {
  interface Window {
      gtag: any;
  }
}

const GoogleAnaliticsScript: React.FC = () => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', { page_path: window.location.pathname });
            `
        }}
      />
    </>
  )
}

export default GoogleAnaliticsScript
