---
title: "Security Groups: A mathematical thought exercise"
---

A thought exercise: what algebraic structure do AWS's Security Groups exhibit?

This is not a formal proof of but a thought exercise in seeing mathematical structures in the tools that I use daily.

## What is a security group (SG)

A VPC security group (SG) is a set of rules that determine whether a given request is "allowed" or not.

A rule is a tuple of (IP Address Range, Protocol, Port/Port Range) where all requests from the given protocol, from the provided IP addresses are allowed on the assigned ports.

We can start by looking just at inbound rules and think of security groups in many different ways.

## Security Groups as Sets

One way to think about an SG is a subset of the set of all possible IP/protocol/port combinations that exist. This gives us some nice attributes. We can consider a fully open SG $ (::/0, All, All) $ as the entire set. The complement would be the entirely closed SG (a group with no inbound rules).

We can also look at an SG and think about set operations as leading two new SGs. A union of two SGs is an SG that would allow any request that would be in either of the two SGs.

A set difference $A - B$ can be all requests that $A$ accepts where$B$ does not.

We can also look at groups and look at the intersection of sets as a valuable subset of the space, i.e., what requests could go to both of these groups.

## Security groups as algebraic objects

**Additive Identity** We can start with an element $0$ that we can define as the group that blocks everything.

**Closure under Addition** We can define the group operation $A + B$ as the set of requests that are accepted by both $A$ and $B$ (i.e. intersection of the two sets). We know that the intersection of them must itself be a valid SG, and we can say that $A + B$ is closed under addition.

**Associativity of Addition** We know that the intersection of sets is associative. $A + (B + C)$ can be thought of as all requests allowed by A and B and C.

**Additive Inverse** We can define an operation $-A$ as the complement of the set of allowed rules. If a request would be permitted under $A$, then that request would not be permitted under $-A$. Knowing that we defined addition as intersection, this makes $A + -A = 0$ since no request can be both in $A$ and $A compliment$.

We can go further and define an operation $A * B$ as a union of SGs $A$ and $B$.

**Closure of Multiplication** We know that unions of sets are themselves sets, and there is semantic meaning in $A(B)$ in that all requests that would fit either $A$ or $B$ would fit in $A(B)$. We know that this SG is valid.

**Associativity of Multiplication** Since we know that we are thinking of SGs as sets, we know that unions of sets is associative.

**Distribution of Multiplication** The final property to look at is the distribution of SGs. If we can think of $A(B + C)$ as all requests that would fit $A$ and $(B  \space or \space  C)$, that follows as $AB + AC$.

This means that we can treat the group of SGs as a $Ring$.

## Boolean Rings

Since we decided to think of a security group as a subset of all requests. We can also think of them as an element in a set of all such subsets.

Though we went through the exercise of looking at these operations individually, any set of sets that are closed under union and intersection form a Boolean algebra. Every Boolean algebra yields a Boolean ring, so by merely showing that $A \cup B$ and $A \cap B$ were valid security groups, we could get the rest of the properties of a ring for free.

## Other interpretations

We could consider an SG a membership function that says whether the request is an element of the set of allowed requests.

We could enumerate all possible requests and look at what percentage of all requests an SG gives access to.

We could look at a group of SGs and figure out a "minimal" SG that covers the same set of requests.

This was just a thought exercise on the mathematical structure of security groups. I'd be curious to know if AWS actually looks at these entities mathematically and if this kind of reasoning helps implement or debug this fundamental building block of AWS offerings.
