
### The Recommended Learning Path:


_Opiniated tech stack_ can be swapped with any Language and framework.

* **Foundations:** Begin with Python, build APIs using FastAPI, and master SQL databases. AI models are treated as just another component within a standard software architecture.


* **Model Interaction:** Learn to integrate Large Language Models (LLMs) by making API calls, monitoring metrics like token usage and latency. Open Router is suggested for accessing multiple models through a single API key.


* **Structured Outputs:** Use Pydantic to enforce specific JSON response formats, ensuring predictability for your backend services.


* **Embeddings & Semantic Search:** Implement vector search using PGVector in PostgreSQL to find information based on meaning rather than exact keywords.

* **Retrieval Augmented Generation (RAG):** Combine search and generation by injecting relevant document context into the model's prompt.

* **Tools:** Provide agents with access to deterministic functions, such as database lookups, to ensure accuracy for critical tasks.

* **Agents:** Build autonomous, multi-step systems that observe, decide, and act. This is recommended as a late-stage step after mastering individual components.

* **Memory & Context:** Manage persistent state and context windows to ensure agents handle long-lived conversations efficiently.

* **Evals & Testing:** Establish observability and systematic logging to evaluate and improve your AI application's performance.

