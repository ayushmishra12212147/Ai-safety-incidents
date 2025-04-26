const incidents = [
    {
      id: 1,
      title: "Biased Recommendation Algorithm",
      description: "An internal audit discovered that the recommendation algorithm consistently favored certain demographics over others. This was traced back to biased training data and an oversight during model validation. The impact could have led to unfair access to opportunities for underrepresented groups.",
      severity: "Medium",
      reported_at: "2025-03-15T10:00:00Z"
    },
    {
      id: 2,
      title: "LLM Hallucination in Critical Info",
      description: "During a user session, a Large Language Model (LLM) provided incorrect safety procedures related to emergency evacuation protocols. This misinformation could have caused dangerous outcomes if acted upon during real emergencies. Immediate retraining and stricter validation layers were recommended.",
      severity: "High",
      reported_at: "2025-04-01T14:30:00Z"
    },
    {
      id: 3,
      title: "Minor Data Leak via Chatbot",
      description: "The customer support chatbot inadvertently exposed non-sensitive metadata of users (like timestamps and anonymous session IDs) in its public responses. While no critical information was leaked, the incident highlighted weaknesses in output filtering mechanisms that needed addressing.",
      severity: "Low",
      reported_at: "2025-03-20T09:15:00Z"
    },
    {
      id: 4,
      title: "Unauthorized Model Update",
      description: "An experimental version of a fraud detection model was accidentally deployed to production without a complete security audit. Though it functioned within expected parameters, the model had not undergone adversarial robustness testing, increasing risks of potential exploitation during its active window.",
      severity: "High",
      reported_at: "2025-04-05T11:45:00Z"
    },
    {
      id: 5,
      title: "Facial Recognition Misidentification",
      description: "The facial recognition module falsely matched individuals at a significantly higher rate among minority populations. A thorough review showed that dataset imbalance during pre-training contributed heavily to this misidentification bias. Urgent data augmentation and fairness audits were initiated.",
      severity: "Medium",
      reported_at: "2025-03-28T08:30:00Z"
    },
    {
      id: 6,
      title: "Auto-Moderation False Positives",
      description: "An AI-driven auto-moderation tool wrongly flagged large amounts of legitimate user content as abusive. This mass misclassification led to unnecessary account suspensions and significant user dissatisfaction. Root cause analysis pointed towards an overly aggressive toxicity threshold setting.",
      severity: "Low",
      reported_at: "2025-03-22T17:20:00Z"
    },
    {
      id: 7,
      title: "Voice Assistant Privacy Breach",
      description: "Voice commands intended for personal use were unintentionally recorded and processed for advertisement profiling. Although personally identifiable information (PII) was not directly exposed, the practice violated user expectations of privacy and internal ethical standards. A new consent protocol was developed as a corrective measure.",
      severity: "High",
      reported_at: "2025-04-10T16:10:00Z"
    }
  ];
  
  export default incidents;
  