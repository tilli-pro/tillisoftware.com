import * as amplitude from "@amplitude/unified";

if (!process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY) {
  console.log(
    "Amplitude API key is not set. Skipping Amplitude initialization.",
  );
} else {
  amplitude.initAll(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY, {
    analytics: {
      autocapture: {
        sessions: true,
        pageViews: true,
        formInteractions: true,
      },
    },
    sessionReplay: {
      sampleRate: 0.1,
      useWebWorker: true,
      debugMode: process.env.NEXT_PUBLIC_NODE_ENV === "development",
    },
  });
}
