Source : 
- [Architecture for startups - Azure Architecture Center | Microsoft Learn](https://learn.microsoft.com/en-us/azure/architecture/guide/startups/startup-architecture)


# Innovation Stages

## Explore Stage

> Initial phase, certainty is low, and the startup must iterate quickly on multiple ideas to find what works.

- Priorities 
	- Architecture should be optimized for **Speed**, **Cost** and **Optionality**.
- Strategy
	- Avoid over-investing in complex infrastructure. 
	- Instead they should use managed services and platform as a service (PaaS). 
		- Azure app service
- Cost Management
	-  use free tiers & small instance sizes to minimize spend while making many "small best" on product idea. 
- Balance
	- Balanced with  priorities.
		- focusing too much on cost can limit spend 
		- while designing for too many options increases complexity and cost.


## Expand Stage

> Once product-market fit is found, Rapid growth and must remove blockages to scaling.

- Priority
	- solving infrastructure scale challenges and increasing development velocity.
- Architecture Extensions
	- growth may require adding features like AI (via RAG), Background tasks, IoT handling.
- Just-in-Time Design
	- Changes made in JITD
- Resiliency
	- Enhancing Security through network-hardened stacks or improving resiliency with zone-redundant deployments.


## Extract Stage

> As the startup reaches Maturity and Market Growth plateaus, The focus shifts to efficiency and stability.

- Priorities
	- Margin Expansion
	- Cost Reduction
	- Efficiency Improvements
- Maturity
	- Staff experience on Higher Regulatory compliance and Infrastructure Isolation
- Caution
	- Because there is more to be lose at this stage, changes are approached with more caution 

