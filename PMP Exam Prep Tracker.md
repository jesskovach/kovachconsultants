# PMP Exam Prep Tracker: Integrated Learning System

This tracker embeds your PMP exam prep directly into your daily work and uses spaced repetition to lock in knowledge.

## Core Philosophy

You can't cram the PMP. You can't just read and pass. The exam tests your ability to *apply* PMP thinking in realistic scenarios.

**Your advantage**: You're building tools and managing projects. Every decision you make in real work is a study moment.

**This tracker does three things**:
1. **Captures** what you learn from real project decisions
2. **Surfaces** forgotten concepts via spaced repetition
3. **Integrates** with your daily standup so studying isn't extra work

---

## Setup: Notion Template

Create a Notion workspace with these linked databases:

### Database 1: Study Sessions (Time-Boxed)

| Property | Type | Details |
|----------|------|---------|
| Date | Date | When did you study? |
| Knowledge Area | Select | Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder |
| Topic | Text | Specific topic (e.g., "WBS creation", "Risk matrix analysis") |
| Duration (minutes) | Number | How long? (target: 25-90 min blocks) |
| Type | Select | Reading, Practice Questions, Flashcards, Case Study, Real Project Work |
| Confidence Level | Select | 1 (Struggling), 2 (Developing), 3 (Proficient), 4 (Expert) |
| Notes | Rich Text | Key insights, things to revisit |
| Next Review Date | Date | When to resurface this (auto-calculated by spaced repetition) |
| Status | Select | Learning, Review Ready, Mastered, Struggling |

**Example rows**:
```
Date: 2026-03-27
Knowledge Area: Scope Management
Topic: Work Breakdown Structure (WBS) creation
Duration: 45 minutes
Type: Case Study (used real project to build WBS)
Confidence Level: 3 (Proficient)
Notes: Created WBS for healthcare platform using client deliverables as major WBS items. Realized hierarchical decomposition easier if start with client acceptance criteria. Struggled with level of detail—went too granular.
Next Review Date: 2026-04-10 (spaced repetition formula)
Status: Review Ready
```

### Database 2: Knowledge Area Mastery Tracker

| Property | Type | Details |
|----------|------|---------|
| Knowledge Area | Text | One per row: Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder |
| Exam Weight | Number | % of exam questions (from PMBOK) |
| Study Sessions Count | Rollup | Auto-count of study sessions for this area |
| Average Confidence | Rollup | Average confidence level |
| Practice Questions Correct | Number | How many practice questions got right |
| Practice Questions Total | Number | Total practice questions attempted |
| Success Rate | Formula | (Correct / Total) * 100 |
| Last Studied | Rollup | Date of most recent study session |
| Mastery Level | Formula | Color-coded: Green (>80%), Yellow (60-80%), Red (<60%) |
| Focus Areas | Rich Text | Topics within this area to review |
| Next Session Due | Formula | Based on spaced repetition + success rate |

**Why this matters**: You can see at a glance which knowledge areas need attention. PMP exam weight varies (Risk is heavy, Procurement lighter), so prioritize accordingly.

### Database 3: Practice Questions

| Property | Type | Details |
|----------|------|---------|
| Question | Rich Text | The full question |
| Knowledge Area | Select | Which area does it test? |
| Difficulty | Select | Easy, Medium, Hard |
| Your Answer | Select | A, B, C, D |
| Correct Answer | Select | A, B, C, D |
| Correct | Checkbox | Did you get it right? |
| Explanation | Rich Text | Why is correct answer correct? |
| Why You Missed It | Rich Text | If wrong, what was your misunderstanding? |
| Date Attempted | Date | When did you try this question? |
| Attempts | Number | How many times have you tried this? |
| Next Review | Date | When to review again (harder if got wrong) |
| Tags | Multi-Select | Specific concept tags for filtering |
| Source | Text | Which study material? (book, mock exam, etc.) |

**Spaced Repetition Logic**:
- If correct on first try: Review in 7 days, then 14 days, then 30 days
- If correct on second try: Review in 3 days, then 7 days, then 14 days
- If never gotten right: Review in 1 day, then 3 days, then weekly

### Database 4: Real Project Case Studies

| Property | Type | Details |
|----------|------|---------|
| Project Name | Text | What project is this from? |
| Knowledge Areas | Multi-Select | Which areas does this teach? |
| Description | Rich Text | What happened? What did you learn? |
| Decision Made | Rich Text | What decision did you make? How did you apply PMBOK? |
| Outcome | Rich Text | What was the result? Did your PMBOK approach help? |
| Date | Date | When did this happen? |
| Client/Internal | Select | Was this a client or internal project? |
| Review Status | Select | Fresh, Reviewed, Mastered |
| Key Lessons | Rich Text | What will you apply to next project? |
| Link to PMP Skill | Relation | Link to the /pmp-project-management skill output for this project |

**Example**:
```
Project Name: Healthcare Donor Platform
Knowledge Areas: Scope, Risk, Stakeholder, Quality
Description: Client asked for new features mid-project, but we had fixed timeline
Decision Made: Submitted formal change request with impact analysis. Analyzed risk (schedule pressure, quality impact). Got stakeholder approval to descope lower-priority features.
Outcome: Delivered on schedule. Client appreciated discipline. Quality didn't suffer.
Key Lessons: Formal change control saves projects. Stakeholders respect process. Risk-based decisions trump emotional reactions.
Review Status: Mastered
```

### Database 5: Spaced Repetition Review Calendar

| Property | Type | Details |
|----------|------|---------|
| Review Date | Date | When should you review this? |
| Knowledge Area | Select | For filtering |
| Item Type | Select | Study Session, Practice Question, Case Study |
| Title | Text | What are you reviewing? |
| Related Item | Relation | Link to actual item in other database |
| Status | Select | Pending, Completed, Skipped |
| Difficulty | Select | Easy, Medium, Hard |

**How it works**: Every morning, look at "Review Date = Today". That's your priority review list.

---

## Daily Workflow: Integration with Your Work

### Morning Routine (10 minutes)

1. **Open Notion dashboard**
2. **Check "Spaced Repetition Review Calendar" filtered to Today**
3. **Review 2-3 items** (flashcards, past questions, case studies)
4. **Mark as completed**
5. **Update confidence level if understanding changed**

Example time-box:
- 5 min: Review 1 flashcard on Risk knowledge area
- 3 min: Reflect on one past practice question you got wrong
- 2 min: Review lessons learned from previous project

**Total: 10 minutes, every day**

### During Work (Continuous Learning)

**When you make a project decision**:
1. Spend 2 minutes documenting it in `/pmp-project-management` skill
2. Skill output automatically maps to knowledge areas
3. Create a "Real Project Case Study" entry linking to that decision
4. Tag it with relevant knowledge area

**Example**:
```
You're deciding how to handle resource conflict (person needed on 2 projects)
→ Use /pmp-project-management to document decision
→ Knowledge Area identified: Resource Management
→ Create case study: "How I resolved resource contention"
→ Next study session will surface this case study for review
→ This becomes spaced repetition material (no extra work)
```

### Weekly Review (30 minutes, Friday)

1. **Review the past week's study sessions**
2. **Which knowledge areas are weakest?** (Use Mastery Tracker)
3. **Schedule focused study for next week**
4. **Adjust spaced repetition based on how you're doing**

**Example**:
```
Week 1 Mastery Summary:
Risk: 92% success rate (strong)
Procurement: 56% success rate (needs work)
Schedule: 78% success rate (okay, but room to improve)

Plan for Week 2:
- Focus: Procurement + Schedule
- Time-box: 3 sessions on Procurement concepts
- Practice: 20 procurement-related questions
- Real project: Evaluate any vendor/contract decisions
```

### When Studying (90-minute session)

**Structure**:

**Phase 1: Read/Learn (30 min)**
- Pick a knowledge area from your "weak" list
- Read 1 chapter or 1 topic section
- Take notes in Notion
- Focus on understanding *why*, not just facts

**Phase 2: Apply (30 min)**
- Take 10-15 practice questions on this topic
- Review any you get wrong
- Use your real projects as examples: "When would I use this?"

**Phase 3: Reflect (30 min)**
- Create or update a case study from your real work
- How does today's learning apply to your projects?
- Write 3-5 sentences on how you'll use this

**Spaced Repetition Trigger**:
- After this session, auto-schedule review dates
- Easy topic: Review in 7 days
- Medium topic: Review in 3 days
- Difficult topic: Review tomorrow

---

## Spaced Repetition Schedule (Automatic)

Use this formula to calculate next review date:

| Scenario | First Review | Second Review | Third Review | Final Review |
|----------|---|---|---|---|
| Got it right first try | 7 days | 14 days | 30 days | 60 days (mastered) |
| Got it right 2nd try | 3 days | 7 days | 14 days | 30 days |
| Got it right 3+ tries | 1 day | 3 days | 7 days | 14 days |
| Still struggling | Every 1 day | Until correct 2x in a row | Then 3 days | Then 7 days |

**In Notion**: Create a formula that auto-calculates based on `Attempts` and `Correct` fields.

```
IF(Correct = true,
  IF(Attempts = 1, DateAdd(Today, 7),
    IF(Attempts = 2, DateAdd(Today, 3),
      DateAdd(Today, 1)
    )
  ),
  DateAdd(Today, 1)
)
```

---

## Study Material Organization

Create a Notion page linking to study resources:

### By Knowledge Area

**Integration Management**
- Agile practices (contrast with waterfall thinking)
- Project charter creation
- Change control process
- Example: Your `pmp-project-management charter` outputs become study material

**Scope Management**
- Requirements gathering (who are stakeholders?)
- Work Breakdown Structure (hierarchical decomposition)
- Scope baseline and change control
- Example: WBS you created for real projects

**Schedule Management**
- Network diagramming (dependencies)
- Critical path analysis
- Crashing vs. fast-tracking
- Resource leveling
- Example: Project timelines you've created

**Cost Management**
- Budget estimation
- Earned Value Management (EVM)
- Cost baseline
- Example: Budget discussions from your projects

**Quality Management**
- Quality planning (standards, metrics)
- Testing and defect management
- Continuous improvement
- Example: Your design system and accessibility standards

**Resource Management**
- Team structure and roles
- Hiring and skill development
- Performance management
- Example: How you organize your solo dev work (outsourcing, contractors, etc.)

**Communications Management**
- Stakeholder analysis
- Communication plan
- Status reporting
- Example: Client updates, team standups

**Risk Management**
- Risk identification (brainstorm threats)
- Qualitative & quantitative analysis
- Response planning (avoid, mitigate, transfer, accept)
- Example: Risk registers from your projects

**Procurement Management**
- Vendor evaluation
- Contract negotiation
- Supplier management
- Example: When you hire contractors

**Stakeholder Management**
- Identification (who cares?)
- Engagement strategy
- Expectation management
- Conflict resolution
- Example: Client management, team dynamics

---

## Sample 12-Week Study Plan (For Exam Prep)

### Weeks 1-2: Foundation (Review & Practice)
- 3 sessions/week on foundational concepts
- 30 practice questions/week
- 1 real project case study/week
- Focus: Understanding PMBOK structure, not memorizing

### Weeks 3-4: Deep Knowledge
- 4 sessions/week on weak knowledge areas
- 50 practice questions/week
- 2 real project case studies/week
- Focus: Applying concepts, not just reading

### Weeks 5-8: Focused Mastery
- 3-4 sessions/week (quality > quantity)
- 75-100 practice questions/week
- Mock exams: 1x per week (200 questions, 4 hours)
- Real project work: Apply 1 new skill/week
- Focus: Speed and accuracy

### Weeks 9-10: Final Review
- 2-3 sessions/week on worst knowledge areas
- 100+ practice questions/week
- 2x full mock exams
- Real project: Manage final project using full PMBOK
- Focus: Confidence, not new learning

### Weeks 11-12: Maintenance & Exam Prep
- 1-2 sessions/week (maintain, not learn new)
- 50 practice questions/week on weak areas only
- 1x full mock exam per week
- Final review of case studies
- Focus: Rest and confidence building

---

## Metrics to Track Progress

Create a Notion dashboard with these charts:

### Chart 1: Knowledge Area Mastery Over Time
- X-axis: Time (weeks)
- Y-axis: Success rate (%) per knowledge area
- Shows which areas are improving, which are plateauing

### Chart 2: Study Session Frequency
- Daily/weekly count of study sessions
- Target: 5-6 sessions/week (25-45 min each)
- Goal: Consistency > intensity

### Chart 3: Practice Question Trends
- Success rate over time
- Difficulty level distribution
- First attempt vs. review attempt success rates

### Chart 4: Spaced Repetition Health
- Items due for review today
- Items overdue (fell behind)
- Items mastered (no longer need review)

### Chart 5: Time Investment by Knowledge Area
- Pie chart showing where you're spending study time
- Should roughly match exam weight (Risk, Communications, Scope are heavy)

---

## Integration with Your Engineering Skills

### With `/pmp-project-management` Skill

Every time you run this skill:
1. It outputs a project charter/plan
2. You create a case study entry from the output
3. You identify 2-3 knowledge areas exercised
4. You schedule a 25-min review session on those areas
5. Spaced repetition surfaces this case study later

**Example**:
```
Day 1: Build project charter for new client project
→ Use /pmp-project-management charter
→ Output: Complete charter with all 10 knowledge areas mapped
→ Create Notion entry: "Retail Client POS System Charter"
→ Identify: Integration (charter creation), Scope (boundaries),
   Stakeholder (identified 8 stakeholders), Risk (initial risks)
→ Schedule: 30-min review on Stakeholder Management (your weak area)

Day 8: Spaced repetition surfaces "Retail Client POS System Charter"
→ Spend 10 min reviewing why you identified those stakeholders
→ Mark confidence level: 3 (improved from day 1)
→ Reschedule next review: 14 days out
```

### With `/accessibility-code-review` Skill

Quality knowledge area includes accessibility:
- Every accessibility review becomes quality learning
- Link accessibility findings to Quality knowledge area
- Track accessibility patterns across projects
- Example: "Modal accessibility issues" becomes study material

### With `/design-system` Template

Quality knowledge area includes design systems:
- Creating consistent components = quality planning
- Design tokens = standards documentation
- Accessibility in design system = quality assurance
- Case study: "Why we chose Open Dyslexic font = inclusive design"

---

## Sample Notion Dashboard (Homepage)

Create a dashboard page with these widgets:

```
┌─────────────────────────────────────────────────────────┐
│ PMP EXAM PREP TRACKER                                   │
├─────────────────────────────────────────────────────────┤
│ Today's Reviews Due: 3                                  │
│ Overall Mastery: 71% (4 weeks to exam)                 │
│ Study Streak: 12 days                                  │
│ Hours Until Exam: 672 (28 days)                        │
├─────────────────────────────────────────────────────────┤
│ KNOWLEDGE AREA MASTERY (This Week)                     │
│ ████████████░ Integration      92% ✓                   │
│ █████░░░░░░░ Scope            45% ⚠️  Focus Week      │
│ ███████████░░ Schedule         82% ✓                   │
│ ███░░░░░░░░░ Cost             28% 🔴 URGENT          │
│ ██████████░░░ Quality          78% ✓                   │
│ █████████░░░░ Resource         73% ✓                   │
│ ████████░░░░░ Communications   67% ↑ Improving        │
│ ██████████████ Risk            96% ✓✓                 │
│ ███░░░░░░░░░░ Procurement      24% 🔴 URGENT          │
│ ██████████░░░░ Stakeholder     75% ✓                   │
├─────────────────────────────────────────────────────────┤
│ UPCOMING REVIEWS (Next 7 Days)                         │
│ • Today: WBS Creation (Scope)                          │
│ • Today: Risk Matrix Analysis (Risk)                   │
│ • Today: Resource Leveling (Schedule)                  │
│ • Tomorrow: Vendor Selection (Procurement)             │
│ • Fri: Integration Testing Case Study (Quality)        │
├─────────────────────────────────────────────────────────┤
│ RECENT CASE STUDIES                                     │
│ • Healthcare Donor Platform (managed with full PMBOK)  │
│ • E-commerce Rebuild (risk management focus)           │
│ • Internal Tool Launch (scope + stakeholder mgmt)      │
├─────────────────────────────────────────────────────────┤
│ WEEK'S STATS                                            │
│ Sessions: 4 / 6 (67%)                                  │
│ Practice Q's: 47 / 50 success rate                     │
│ Average Time/Session: 38 minutes                       │
│ Best Knowledge Area: Risk (96%)                        │
│ Needs Help: Procurement (24%)                         │
├─────────────────────────────────────────────────────────┤
│ NEXT ACTIONS                                            │
│ 1. Review these 3 items due today (10 min)            │
│ 2. Schedule 2 focused Procurement sessions this week   │
│ 3. Complete 10 more Cost Management questions         │
│ 4. Manage Retail Client project with full PMBOK      │
└─────────────────────────────────────────────────────────┘
```

---

## Why This Works for Solo Bootstrapped Business Builders

1. **Learning as Work**: Every project decision is study material. No separate study routine.
2. **Spaced Repetition**: You review 1-2 items daily (10 min), not cram before exam.
3. **Real-World Application**: You'll pass because you've *lived* PMP, not memorized it.
4. **Consulting Proof Points**: When clients ask "How do you manage projects?", you have real examples.
5. **Time-Efficient**: 5-6 hours/week of structured study, not 15+ hours cramming.
6. **Scalable**: As you take on more client projects, you generate more case studies (more learning, no extra time).

---

## Tools & Resources to Support This

### Study Materials
- **PMBOK 6th Edition** (official, required)
- **PMP Exam Cram** (Andrew Stellman) — practical examples
- **Udemy PMP Prep Course** ($15, better than expensive bootcamps)
- **Khan Academy Study Videos** (free, high quality)
- **PMI Practice Exams** (official, most realistic)

### Notion Setup
- Use templates provided in this document
- Set up automation for spaced repetition dates
- Use database relations to link everything together
- Create views for: "Due Today", "By Knowledge Area", "Success Rate"

### Tracking Software
- **Notion** (free): Everything lives here
- **Habit Tracker** (optional): Track study streak
- **Google Calendar**: Time-box study sessions
- **Anki** (optional): For flashcards, but Notion database works too

### Mock Exams
- **PMI Official Practice Exam**: 200 questions, realistic
- **ExamTopics**: Community-sourced (free, decent quality)
- **Oliver Lehmann's 75 Question Exam**: Well-regarded
- Goal: Score 80%+ consistently on mocks before real exam

---

## Final Setup Checklist

- [ ] Create 5 Notion databases (Study Sessions, Mastery Tracker, Practice Q's, Case Studies, Review Calendar)
- [ ] Set up spaced repetition formula in Notion
- [ ] Create dashboard with widgets above
- [ ] Create views: "Today's Reviews", "By Knowledge Area", "Weak Areas"
- [ ] Gather study materials (PMBOK, course, practice exams)
- [ ] Schedule first 12-week study plan
- [ ] Set weekly review time (suggest: Friday 4pm, 30 min)
- [ ] Link this system to your `/pmp-project-management` skill (run every project through it)
- [ ] Create 3-5 initial case studies from past projects
- [ ] Start daily 10-min review routine tomorrow

---

## Success Metrics

**You'll know this is working when**:
- Study sessions feel connected to real work (not separate task)
- You naturally explain project decisions using PMBOK language
- Practice question success rate > 80%
- Confidence increases week-over-week
- Clients notice your project discipline
- You're excited about upcoming projects (because they're study opportunities)

**Exam readiness**:
- 12 weeks: Target > 75% on mock exams
- 8 weeks: Target > 80%
- 4 weeks: Target > 85%
- 2 weeks: Target > 90%
- 1 week: Take a break, trust your preparation

---

## Post-Exam: Your PMP Superpower

After you pass (and you will), keep this system:

1. **Leverage for Clients**: "I don't just code, I manage projects using PMBOK framework"
2. **Case Studies for Consulting**: Every project becomes a case study for proposals
3. **Competitive Advantage**: Most devs can't talk PMBOK language; you can
4. **Continuous Learning**: Stay current with PMP best practices
5. **Service Offering**: Offer PMI-aligned project management as consulting service

This system doesn't just help you pass the exam. It builds your consulting business while you study.

Good luck. You've got this.
