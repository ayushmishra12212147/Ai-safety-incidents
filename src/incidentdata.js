const incidents = [
  { "id": 4, "title": "Unauthorized Model Access", "description": "An internal system exposed access to proprietary AI models without proper authentication mechanisms...", "severity": "High", "reported_at": "2025-04-10T12:00:00Z" },
  { "id": 5, "title": "Algorithm Bias in Loan Approvals", "description": "AI system favored applicants from certain ZIP codes, leading to unfair loan rejections...", "severity": "Medium", "reported_at": "2025-04-12T15:30:00Z" },
  { "id": 6, "title": "Toxic Content Generation", "description": "Text generation model produced hate speech outputs under specific prompting conditions...", "severity": "High", "reported_at": "2025-03-30T09:45:00Z" },
  { "id": 7, "title": "Personal Data Retention", "description": "Chatbot systems stored sensitive user queries longer than acceptable privacy standards allow...", "severity": "Medium", "reported_at": "2025-04-03T11:00:00Z" },
  { "id": 8, "title": "Overfitting in Facial Recognition", "description": "Facial recognition tool struggled with generalizing to real-world lighting conditions, increasing false positives...", "severity": "Low", "reported_at": "2025-04-05T10:30:00Z" },
  { "id": 9, "title": "Misinformation Propagation", "description": "News summarization AI unintentionally introduced factual inaccuracies into critical health news articles...", "severity": "High", "reported_at": "2025-04-08T14:20:00Z" },
  { "id": 10, "title": "Insecure Model API Endpoint", "description": "An API for querying ML models lacked proper rate limiting, making it susceptible to denial-of-service attacks...", "severity": "Medium", "reported_at": "2025-03-28T08:50:00Z" },
  { "id": 11, "title": "Adversarial Image Attacks", "description": "Small pixel changes in images caused AI classifiers to completely misinterpret object recognition tasks...", "severity": "High", "reported_at": "2025-04-02T17:00:00Z" },
  { "id": 12, "title": "Privacy Violation by Voice Assistant", "description": "Voice assistant continued recording after user command ended, raising concerns about always-on listening...", "severity": "High", "reported_at": "2025-04-06T19:30:00Z" },
  { "id": 13, "title": "Ethical Oversight Gaps", "description": "AI system deployed with limited ethical review leading to discriminatory hiring suggestions...", "severity": "Medium", "reported_at": "2025-04-09T16:40:00Z" },
  { "id": 14, "title": "Unintended Political Bias", "description": "Content ranking algorithm favored certain political ideologies unintentionally during elections...", "severity": "High", "reported_at": "2025-03-27T13:15:00Z" },
  { "id": 15, "title": "Incorrect Sentiment Analysis", "description": "Sentiment analysis model misclassified sarcastic comments as serious complaints...", "severity": "Low", "reported_at": "2025-04-04T09:25:00Z" },
  { "id": 16, "title": "Incomplete Data Anonymization", "description": "De-identified datasets were susceptible to re-identification attacks under analysis...", "severity": "High", "reported_at": "2025-04-07T12:40:00Z" },
  { "id": 17, "title": "Model Update Regression", "description": "Latest AI model update introduced unexpected prediction inaccuracies in critical use cases...", "severity": "Medium", "reported_at": "2025-03-31T15:55:00Z" },
  { "id": 18, "title": "Unclear Explainability Outputs", "description": "Model explanations were too technical for non-expert stakeholders to interpret decisions properly...", "severity": "Low", "reported_at": "2025-04-01T11:10:00Z" },
  { "id": 19, "title": "Trolling via Chatbot", "description": "Users manipulated chatbot dialogues to provoke inappropriate, offensive responses...", "severity": "Medium", "reported_at": "2025-03-26T17:45:00Z" },
  { "id": 20, "title": "Overpersonalization Risks", "description": "Highly personalized recommendation engines limited user exposure to diverse content, reinforcing confirmation biases...", "severity": "Low", "reported_at": "2025-04-11T13:00:00Z" },
  { "id": 21, "title": "Security Flaw in Prompt Injection", "description": "LLM systems vulnerable to prompt injection attacks leading to unexpected behavior and data leakage...", "severity": "High", "reported_at": "2025-04-13T10:25:00Z" },
  { "id": 22, "title": "Bias Amplification during Fine-Tuning", "description": "Fine-tuned LLM models amplified existing societal biases from small datasets...", "severity": "Medium", "reported_at": "2025-04-14T09:50:00Z" },
  { "id": 23, "title": "Localization Translation Errors", "description": "AI translation engine incorrectly translated critical legal terms, impacting cross-border operations...", "severity": "High", "reported_at": "2025-04-15T08:30:00Z" }
]
;
  
  export default incidents;
  