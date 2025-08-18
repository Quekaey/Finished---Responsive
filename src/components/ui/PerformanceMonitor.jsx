import { useEffect, useState } from 'react';

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    // Only run in production and if PerformanceObserver is supported
    if (process.env.NODE_ENV !== 'production' || !window.PerformanceObserver) {
      return;
    }

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      setMetrics(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Cleanup observers
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  // Send metrics to analytics (in production)
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && metrics.fcp !== null) {
      // Send to analytics service
      console.log('Performance Metrics:', metrics);
      
      // Example: Send to Google Analytics
      if (window.gtag) {
        window.gtag('event', 'performance_metrics', {
          event_category: 'performance',
          fcp: Math.round(metrics.fcp),
          lcp: Math.round(metrics.lcp || 0),
          fid: Math.round(metrics.fid || 0),
          cls: Math.round(metrics.cls * 1000) / 1000,
          ttfb: Math.round(metrics.ttfb || 0)
        });
      }
    }
  }, [metrics]);

  // Performance budget thresholds
  const thresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 }
  };

  const getPerformanceScore = (metric, value) => {
    if (!value) return 'pending';
    if (value <= thresholds[metric].good) return 'good';
    if (value <= thresholds[metric].poor) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score) => {
    switch (score) {
      case 'good': return 'text-green-500';
      case 'needs-improvement': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  // Only show in development or when explicitly enabled
  if (process.env.NODE_ENV !== 'development' && !process.env.REACT_APP_SHOW_PERFORMANCE) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200 z-50 max-w-xs">
      <h3 className="text-sm font-semibold text-gray-800 mb-2">Performance Metrics</h3>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(getPerformanceScore('fcp', metrics.fcp))}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'Pending'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(getPerformanceScore('lcp', metrics.lcp))}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'Pending'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(getPerformanceScore('fid', metrics.fid))}>
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : 'Pending'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(getPerformanceScore('cls', metrics.cls))}>
            {metrics.cls ? Math.round(metrics.cls * 1000) / 1000 : 'Pending'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className={getScoreColor(getPerformanceScore('ttfb', metrics.ttfb))}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'Pending'}
          </span>
        </div>
      </div>
      <div className="mt-2 text-xs text-gray-500">
        <div className="flex gap-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Good</span>
          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
          <span>Needs Improvement</span>
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          <span>Poor</span>
        </div>
      </div>
    </div>
  );
}
