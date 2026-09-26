Book : 
0 Designing Data-Intensive Applications The Big Ideas Behind Reliable, Scalable, and Maintainable Systems by Martin Kleppmann & Chris Riccomini, 2nd Edition


Authors : Martin Kleppmann & Chris Riccomini



preface __xvii__

# Trade-Offs in Data Systems Architecture __1__
- Operational Versus Analytical Systems __3__
- Characterizing Transaction Processing and Analytics __5__
- Data Warehousing __7__
- Systems of Record and Derived Data __10__
- Cloud Versus Self-Hosting __12__
- Pros and Cons of Cloud Services __13__
- Cloud Native System Architecture __14__
- Operations in the Cloud Era __17__
- Distributed Versus Single-Node Systems __19__
- Problems with Distributed Systems __20__
- Microservices and Serverless __21__
- Cloud Computing Versus Supercomputing __23__
- Data Systems, Law, and Society __24__
- Summary __25__

# 2. Defining Nonfunctional Requirements __33__
- Case Study: Social Network Home Timelines __34__
- Representing Users, Posts, and Follows __34__
- Materializing and Updating Timelines __35__
- Describing Performance __37__
- Latency and Response Time __38__
- Average, Median, and Percentiles __40__
- Use of Response Time Metrics __41__
- Reliability and Fault Tolerance __43__
- Fault Tolerance __43__
- Hardware and Software Faults __44__
- Humans and Reliability __47__
- Scalability __49__
- Understanding Load __50__
- Shared-Memory, Shared-Disk, and Shared-Nothing Architectures __51__
- Principles for Scalability __52__
- Maintainability __52__
- Operability: Making Life Easy for Operations __53__
- Simplicity: Managing Complexity __54__
- Evolvability: Making Change Easy __55__
- Summary __56__

# 3. Data Models and Query Languages __65__
- Relational Versus Document Models __67__
- The Object-Relational Mismatch __68__
- Normalization, Denormalization, and Joins __72__
- Many-to-One and Many-to-Many Relationships __75__
- Stars and Snowflakes: Schemas for Analytics __77__
- When to Use Which Model __80__
- Graph-Like Data Models __84__
- Property Graphs __86__
- The Cypher Query Language __88__
- Graph Queries in SQL __90__
- Triple Stores and SPARQL __92__
- Datalog: Recursive Relational Queries __96__
- GraphQL __98__
- Event Sourcing and CQRS __101__
- DataFrames, Matrices, and Arrays __105__
- Summary __107__

# 4. Storage and Retrieval __115__
- Storage and Indexing for OLTP __116__
- Log-Structured Storage __118__
- B-Trees __125__
- Comparing B-Trees and LSM-Trees __129__
- Multicolumn and Secondary Indexes __132__
- Storing Values Within the Index __133__
- Keeping Everything in Memory __133__
- Data Storage for Analytics __134__
- Cloud Data Warehouses __135__
- Column-Oriented Storage __136__
- Query Execution: Compilation and Vectorization __142__
- Materialized Views and Data Cubes __143__
- Multidimensional and Full-Text Indexes __145__
- Full-Text Search __146__
- Vector Embeddings __147__
- Summary __150__

# 5. Encoding and Evolution __161__
- Formats for Encoding Data __163__
- Language-Specific Formats __164__
- JSON, XML, and Binary Variants __165__
- Protocol Buffers __169__
- Avro __172__
- The Merits of Schemas __177__
- Modes of Dataflow __178__
- Dataflow Through Databases __178__
- Dataflow Through Services: REST and RPC __180__
- Durable Execution and Workflows __187__
- Event-Driven Architectures __189__
- Summary __191__

# 6. Replication __197__
- Single-Leader Replication __198__
- Synchronous Versus Asynchronous Replication __200__
- Setting Up New Followers __201__
- Handling Node Outages __204__
- Implementation of Replication Logs __206__
- Problems with Replication Lag __209__
- Solutions for Replication Lag __214__
- Multi-Leader Replication __215__
- Geographically Distributed Operation __216__
- Sync Engines and Local-First Software __220__
- Dealing with Conflicting Writes __222__
- Leaderless Replication __229__
- Writing to the Database When a Node Is Down __229__
- Single-Leader Versus Leaderless Replication Performance __235__
- Multi-Region Operation __236__
- Detecting Concurrent Writes __237__
- Summary __243__

# [[7. Sharding __251__]]

[[Sharding]]

- Pros and Cons of Sharding __253__
- Sharding for Multitenancy __254__
- Sharding of Key-Value Data __255__
- Sharding by Key Range __256__
- Sharding by Hash of Key __258__
- Skewed Workloads and Relieving Hot Spots __263__
- Operations: Automatic Versus Manual Rebalancing __264__
- Request Routing __265__
- Sharding and Secondary Indexes __268__
- Local Secondary Indexes __268__
- Global Secondary Indexes __270__
- Summary __271__

# 8. Transactions __277__
- What Exactly Is a Transaction? __278__
- The Meaning of ACID __279__
- Single-Object and Multi-Object Operations __284__
- Weak Isolation Levels __288__
- Read Committed __290__
- Snapshot Isolation and Repeatable Read __293__
- Preventing Lost Updates __299__
- Write Skew and Phantoms __303__
- Serializability __308__
- Actual Serial Execution __309__
- Two-Phase Locking __313__
- Serializable Snapshot Isolation __317__
- Distributed Transactions __323__
- Two-Phase Commit __324__
- Distributed Transactions Across Different Systems __328__
- Database-Internal Distributed Transactions __333__
- Exactly-Once Message Processing Revisited __334__
- Summary __335__

# 9. The Trouble with Distributed Systems __345__
- Faults and Partial Failures __346__
- Unreliable Networks __347__
- The Limitations of TCP __348__
- Network Faults in Practice __350__
- Fault Detection __351__
- Timeouts and Unbounded Delays __352__
- Synchronous Versus Asynchronous Networks __355__
- Unreliable Clocks __358__
- Monotonic Versus Time-of-Day Clocks __359__
- Clock Synchronization and Accuracy __360__
- Relying on Synchronized Clocks __362__
- Process Pauses __366__
- Knowledge, Truth, and Lies __371__
- The Majority Rules __372__
- Distributed Locks and Leases __373__
- Byzantine Faults __377__
- System Model and Reality __380__
- Formal Methods and Randomized Testing __384__
- Summary __388__

# 10. Consistency and Consensus __401__
- Linearizability __402__
- What Makes a System Linearizable? __404__
- Relying on Linearizability __408__
- Implementing Linearizable Systems __411__
- The Cost of Linearizability __413__
- ID Generators and Logical Clocks __417__
- Logical Clocks __420__
- Linearizable ID Generators __423__
- Consensus __425__
- The Many Faces of Consensus __427__
- Consensus in Practice __433__
- Coordination Services __437__
- Summary __440__

# 11. Batch Processing __451__
- Batch Processing with Unix Tools __454__
- Simple Log Analysis __454__
- Chain of Commands Versus Custom Program __456__
- Sorting Versus In-Memory Aggregation __456__
- Batch Processing in Distributed Systems __457__
- Distributed Filesystems __458__
- Object Stores __460__
- Distributed Job Orchestration __461__
- Batch Processing Models __466__
- MapReduce __466__
- Dataflow Engines __468__
- Shuffling Data __469__
- Joins and Grouping __471__
- Query Languages __473__
- DataFrames __475__
- Batch Use Cases __476__
- Extract–Transform–Load __476__
- Analytics __477__
- Machine Learning __478__
- Serving Derived Data __479__
- Summary __481__

# 12. Stream Processing __487__
- Transmitting Event Streams __488__
- Messaging Systems __489__
- Log-Based Message Brokers __495__
- Databases and Streams __500__
- Keeping Systems in Sync __501__
- Change Data Capture __503__
- State, Streams, and Immutability __508__
- Processing Streams __513__
- Uses of Stream Processing __514__
- Reasoning About Time __518__
- Stream Joins __523__
- Fault Tolerance __526__
- Summary __529__

# 13. A Philosophy of Streaming Systems __539__
- Data Integration __539__
- Combining Specialized Tools by Deriving Data __540__
- Batch and Stream Processing __544__
- Unbundling Databases __546__
- Composing Data Storage Technologies __547__
- Designing Applications Around Dataflow __551__
- Observing Derived State __555__
- Aiming for Correctness __561__
- The End-to-End Argument for Databases __562__
- Enforcing Constraints __566__
- Timeliness and Integrity __571__
- Trust, but Verify __575__
- Summary __579__

# 14. Doing the Right Thing __585__
- Predictive Analytics __586__
- Bias and Discrimination __586__
- Responsibility and Accountability __587__
- Feedback Loops __588__
- Privacy and Tracking __589__
- Surveillance __590__
- Consent and Freedom of Choice __591__
- Privacy and Use of Data __592__
- Data as Assets and Power __594__
- Remembering the Industrial Revolution __595__
- Legislation and Self-Regulation __596__
- Summary __597__

Glossary __603__

Index __609__
