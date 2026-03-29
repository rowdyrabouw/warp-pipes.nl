const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1];
  console.log("LCP:", lastEntry.startTime);
  observer.disconnect();
});

observer.observe({ type: "largest-contentful-paint", buffered: true });
