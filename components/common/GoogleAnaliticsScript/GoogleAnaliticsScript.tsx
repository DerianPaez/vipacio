import * as React from 'react'
import { useRouter } from 'next/router'

declare global {
  interface Window {
      gtag: any;
  }
}

const GoogleAnaliticsScript: React.FC = () => {
  const router = useRouter()

  const handleRouteChange = (url: string) => {
    window.gtag('config', `${process.env.GOOGLE_ANALITICS_ID}`, {
      page_path: url,
    })
  }

  React.useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [])

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALITICS_ID}`} />
      <script id="google-analytics" dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GOOGLE_ANALITICS_ID}', { page_path: window.location.pathname });
        `
      }} />
    </>
  )
}

export default GoogleAnaliticsScript
