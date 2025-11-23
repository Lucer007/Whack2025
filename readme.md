ONBOARDING FLOW
   Goal: Set identity, set context, reduce friction.

User opens app → “Welcome to NudgeAi”

Tap “Get Started”

Choose identity:

Student

Student Athlete

Worker/Hybrid

Connect Calendar (skip available)

Import .ics file OR

“Connect to Canvas/Moodle/Blackboard” (future feature — for hackathon, fake it)

AI displays:

“Your week at a glance” with upcoming tasks (fake data acceptable)

User creates username + streak goal

Takes profile picture OR chooses avatar

Lands on Home Screen

HOME SCREEN FLOW
   Goal: Display what matters immediately.

Home Screen shows:

Today’s Recommendation (task + suggested study time)

Start Session button

Upcoming Tasks

Friend Activity Preview (2–3 avatars locking in)

User can:

Tap “Start Session”

Tap a task to see AI breakdown

Swipe to feed

Open Profile

“START SESSION” FLOW (CORE FEATURE)
   Goal: BeReal-style lock-in.

User taps Start Session

App prompts:
“Ready to lock in?” → “Take a quick picture”

Camera opens

User snaps photo (or short 2–3 second clip if you want the motion effect)

App uploads photo

Timer screen appears:

Duration pre-filled by AI (e.g., 30 min)

User can adjust

Tap “Begin Session”

Screen enters Focus Mode

Fullscreen timer

No navigation

Dimmed UI

Optional music toggle

Session ends →

“Great work!”

Streak increases

XP increases

Photo posted to feed automatically

FEED FLOW (SOCIAL)
   Goal: Make studying visible + competitive.

User opens Feed

Sees grid of friends’ latest lock-ins

Picture

Timestamp

Duration

Streak badge

Tapping a friend opens their profile:

Their streak

Study minutes this week

All past lock-in photos

User can react with emojis or comments (optional for MVP)

“🔥”

“👀 locked in”

“📚 proud of you”

User can post their own update again from Feed (“Lock in now” button)

STREAK + XP FLOW
   Goal: Dopamine loop.

Whenever a session completes:

Check time-on-task vs recommended

Add streak (+1)

Give XP (based on minute count)

Trigger small animation

Push new “Level Up” card to Profile

Rules:

Missing a session → lose streak

Session longer than recommended → bonus XP

3 streak milestones: 3, 7, 14 days

Profile shows streak graph and stats

ASSIGNMENT / CALENDAR FLOW
   Goal: Give structure without building too much.

MVP Method: Upload syllabus OR manual input
Future Method: Canvas/Blackboard/Moodle API

Flow:

User taps “Add Assignment”

Options:

Upload PDF Syllabus

Upload .ics file

Manual: Title, Due date, Type

AI parses:

Topic

Pages to read

Difficulty

Estimated time

App breaks task into chunks:

“Study 30 min today”

“Review notes tomorrow”

“Finish draft Friday”

Blocks appear on calendar (fake calendar is fine for hackathon)

Each block can be turned into a session with Start Session.

AI FLOW (FOR JUDGES)
   Goal: Show intelligence even if it’s partially faked.

Input:

Syllabus text

Task title

Due date

User type (student / athlete)

Preferred study times

Past performance (optional)

AI Steps:

Extract topics + chapters

Estimate work time

Recommend daily study blocks

Auto-populate schedule

Adjust if user postpones session

Recalculate timeline and notify user:

“You postponed today’s study block.
Here’s an updated plan — you still have time to finish before the due date.”

This looks advanced, even if half is mock data.

QUARTERLY REVIEW FLOW
   Goal: Monthly/Quarterly “Spotify Wrapped for Studying”

User taps “Your Review”

Screens show:

Total hours studied

Largest streak

Most productive day

Top subject

All lock-in photos in collage

Option: “Share Review” → auto-generates IG story template

Adds to user profile

This is GREAT for judges. Easy to mock.

🔥 9. DEMO FLOW (For Pitch Presentation)

This is EXACTLY the order your team should show to judges.

Problem: Students waste hours on social media; screen time is out of control.

Insight: Social accountability and dopamine loops keep users engaged.

Solution: A BeReal-style, gamified study platform.

Demo:

Onboarding

Home screen

Start Session (take picture → timer → finish)

Feed

Streak increase

AI calendar suggestion

Quarterly review

Tech:

React Native

Firebase

Cohere/OpenAI for AI parsing

Vultr/Cloudflare hosting

Impact: Students stay productive because they finally get dopamine from studying.

Vision: The digital discipline layer for every student.