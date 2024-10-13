import { logEvent } from "firebase/analytics";
import { analytics } from "./firebaseConfig";

export const globalAnalytics = (page) => {
  logEvent(analytics, `Protfolio_new_${page?.eventName}`, {
    content_type: page?.type,
  });
};
