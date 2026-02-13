export interface Slide {
  id: string;
  category: string;
  name: string;
  explanation: string;
  whenToUse: string;
  example: string;
}

export const categories = [
  "The Spirit",
  "Four Processes",
  "Foundations",
  "Stages of Change",
  "OARS Core Skills",
  "Advanced Reflections",
  "Information Exchange",
  "Evoking Motivation",
  "Navigating Resistance",
  "Planning",
  "Process Skills",
  "Traps to Avoid",
  "Educator vs Counselor",
] as const;

export type Category = (typeof categories)[number];

export const categoryDescriptions: Record<Category, string> = {
  "The Spirit":
    "The foundational mindset of MI \u2014 not techniques, but a way of being. Without the spirit, the skills become hollow.",
  "Four Processes":
    "MI unfolds through four overlapping, recursive processes. They\u2019re not strictly linear.",
  Foundations:
    "Core concepts that underpin everything in MI \u2014 change talk, sustain talk, and the righting reflex.",
  "Stages of Change":
    "The Transtheoretical Model \u2014 where your client is in their journey determines which MI strategies to use.",
  "OARS Core Skills":
    "The four foundational skills of MI practice: Open questions, Affirmations, Reflections, and Summaries.",
  "Advanced Reflections":
    "Sophisticated reflection techniques that deepen exploration and gently guide toward change.",
  "Information Exchange":
    "How to share nutrition knowledge without slipping into educator mode. The MI way to teach.",
  "Evoking Motivation":
    "Strategic techniques for drawing out the client\u2019s own reasons, desires, and commitment to change.",
  "Navigating Resistance":
    "When the client pushes back, these techniques flow with it rather than fighting against it.",
  Planning:
    "Concrete techniques for developing a change plan \u2014 only when the client is truly ready.",
  "Process Skills":
    "Meta-skills for monitoring and improving your MI practice in real time.",
  "Traps to Avoid":
    "Common pitfalls that pull you out of MI and back into educator mode.",
  "Educator vs Counselor":
    "The central tension for dietitians \u2014 and specific techniques for staying in counselor mode.",
};

// Light/dark background tints for each category's cards
export const categoryColors: Record<
  Category,
  { light: string; dark: string; pill: string }
> = {
  "The Spirit": { light: "#eef5f1", dark: "#1e2b22", pill: "#5b8a6e" },
  "Four Processes": { light: "#eef1f7", dark: "#1e222e", pill: "#6878a8" },
  Foundations: { light: "#f5eeee", dark: "#2b1e1e", pill: "#a06868" },
  "Stages of Change": { light: "#f3eef5", dark: "#261e2b", pill: "#8868a0" },
  "OARS Core Skills": { light: "#eef5f4", dark: "#1e2b28", pill: "#5b8a82" },
  "Advanced Reflections": { light: "#f5f2ee", dark: "#2b261e", pill: "#a08e5b" },
  "Information Exchange": { light: "#eef0f5", dark: "#1e202b", pill: "#5b72a0" },
  "Evoking Motivation": { light: "#f5eeef", dark: "#2b1e20", pill: "#a05b68" },
  "Navigating Resistance": { light: "#f1eef5", dark: "#221e2b", pill: "#7b5ba0" },
  Planning: { light: "#eef5ee", dark: "#1e2b1e", pill: "#5ba05b" },
  "Process Skills": { light: "#f5f4ee", dark: "#2b2a1e", pill: "#8a8a5b" },
  "Traps to Avoid": { light: "#f5efee", dark: "#2b201e", pill: "#a07058" },
  "Educator vs Counselor": { light: "#eef3f5", dark: "#1e262b", pill: "#5b8aa0" },
};

export const slides: Slide[] = [
  // ═══════════════════════════════════════════
  // THE SPIRIT
  // ═══════════════════════════════════════════
  {
    id: "spirit-of-mi",
    category: "The Spirit",
    name: "The Spirit of MI (PACE)",
    explanation:
      "The Spirit of MI is the foundational mindset underlying all MI practice. It is NOT a set of techniques but a way of being with clients. Without the spirit, the techniques become hollow manipulation. The spirit comprises four elements: Partnership, Acceptance, Compassion, and Evocation (PACE).",
    whenToUse:
      "Always. The spirit is not something you turn on and off \u2014 it is the stance you hold throughout every interaction about food, nutrition, or lifestyle change.",
    example:
      'Instead of thinking "I need to convince this patient to eat more vegetables," think "This person has their own reasons for wanting to be healthy. My job is to help them discover and articulate those reasons."',
  },
  {
    id: "partnership",
    category: "The Spirit",
    name: "Partnership",
    explanation:
      'MI is done WITH people, not TO them or FOR them. Both the dietitian and client are experts \u2014 the dietitian in nutrition science, the client in their own life, preferences, barriers, and values. The relationship is collaborative, not hierarchical. This is sometimes called "dual expertise."',
    whenToUse:
      'From the very first moment of the session. Especially important when the client has been "told what to do" by doctors or family and comes in expecting another lecture.',
    example:
      '"You know your life and your schedule better than anyone. I have some nutrition knowledge that might be helpful. How about we put our heads together and figure out what might work for you?"',
  },
  {
    id: "acceptance",
    category: "The Spirit",
    name: "Acceptance",
    explanation:
      "Prizing the client\u2019s inherent worth regardless of their current behaviors. It has four parts: unconditional positive regard, accurate empathy, autonomy support, and affirmation. Acceptance does NOT mean approving of harmful behaviors \u2014 it means respecting the person while being honest about health realities.",
    whenToUse:
      'When a client reveals eating behaviors they feel ashamed of (binge eating, hiding food, skipping meals). When a client has "failed" a previous diet. When working with clients who have been shamed about weight or food choices.',
    example:
      '"It sounds like you\u2019ve been through a lot of diet cycles, and each one has been really frustrating. That takes a toll. I want you to know there\u2019s no judgment here \u2014 we\u2019re just going to look at what works for you."',
  },
  {
    id: "compassion",
    category: "The Spirit",
    name: "Compassion",
    explanation:
      "Actively promoting the client\u2019s welfare and giving priority to their needs. It is NOT pity. It means that the practitioner\u2019s agenda is genuinely oriented toward the client\u2019s wellbeing, not toward institutional metrics, billing codes, or the practitioner\u2019s ego.",
    whenToUse:
      "When institutional pressures (short appointment times, insurance requirements, physician orders) tempt you to push an agenda that may not align with what the client is ready for.",
    example:
      '"I know your doctor wants to see your A1c come down quickly, and that\u2019s important. But I\u2019m more interested in what feels manageable for you, because changes that feel forced don\u2019t usually stick."',
  },
  {
    id: "evocation",
    category: "The Spirit",
    name: "Evocation",
    explanation:
      'The belief that motivation and resources for change reside within the client, not the practitioner. Your role is to draw these out rather than install them. This is the opposite of the "empty vessel" model where the expert fills the client with knowledge.',
    whenToUse:
      "When you catch yourself about to launch into a nutrition education monologue. When the client seems disengaged during information delivery. When you want to increase the client\u2019s sense of ownership over their plan.",
    example:
      '"What do you already know about how fiber affects blood sugar?" (Then build on what they say, rather than starting from scratch with a lecture.)',
  },

  // ═══════════════════════════════════════════
  // FOUR PROCESSES
  // ═══════════════════════════════════════════
  {
    id: "four-processes",
    category: "Four Processes",
    name: "The Four Processes",
    explanation:
      "MI unfolds through four overlapping, recursive processes: Engaging, Focusing, Evoking, and Planning. They are not strictly linear \u2014 you may return to earlier processes as needed. The first three are always present; Planning depends on readiness.",
    whenToUse:
      "Use as a mental map to know where you are in any session. If evoking isn\u2019t working, you may need to go back to engaging. If the client seems unfocused, you need more focusing before evoking.",
    example:
      'A dietitian notices the client is giving short answers and seems defensive (engaging issue), so she pauses the meal planning discussion and asks, "Before we go further, I\u2019m curious \u2014 what was it like getting this referral from your doctor?"',
  },
  {
    id: "engaging",
    category: "Four Processes",
    name: "Engaging",
    explanation:
      "Establishing a mutually trusting and respectful helping relationship. It is the foundation upon which everything else is built. Without genuine engagement, focusing and evoking will not work. Involves using OARS skills, demonstrating genuine curiosity, and showing warmth.",
    whenToUse:
      "At the beginning of every session, especially the first. Also when you sense the relationship is strained \u2014 the client seems guarded, defensive, or disengaged. Re-engage before proceeding.",
    example:
      '"Before we dive into anything, I\u2019d love to just hear a bit about you. What\u2019s going on in your life right now?"',
  },
  {
    id: "focusing",
    category: "Four Processes",
    name: "Focusing",
    explanation:
      "Developing and maintaining a specific direction in the conversation about change. It involves collaboratively identifying what the client wants to work on \u2014 which may or may not align with the referral reason. The focus should be mutually agreed upon, not imposed.",
    whenToUse:
      "When a client has multiple health concerns and you need to decide where to start. When the physician\u2019s referral reason differs from what the client is motivated to change. When the session feels scattered.",
    example:
      '"Your doctor mentioned your blood sugar, you brought up wanting more energy, and you also mentioned stress eating. Which one feels most pressing to you right now?"',
  },
  {
    id: "evoking",
    category: "Four Processes",
    name: "Evoking",
    explanation:
      'The MI-specific process of strategically eliciting the client\u2019s own motivations for change. Rather than providing reasons to change, you draw out their reasons. Listen for and reinforce "change talk" while softening "sustain talk."',
    whenToUse:
      "Once you have a clear focus and the client is engaged but ambivalent. This is the heart of MI \u2014 where the client talks themselves into change rather than being talked into it.",
    example:
      '"You mentioned that your energy levels have been really low. What would it mean for your daily life if you had more energy?"',
  },
  {
    id: "planning",
    category: "Four Processes",
    name: "Planning",
    explanation:
      'Developing commitment to change and formulating a concrete plan. Only appropriate when the client shows readiness (increased change talk, decreased sustain talk, questions about "how"). The plan should be the CLIENT\u2019s plan, not yours.',
    whenToUse:
      'When the client starts asking "how" questions rather than "why" questions. When you hear strong commitment language. Do NOT jump to planning prematurely \u2014 one of the most common MI errors.',
    example:
      '"It sounds like you\u2019re ready to make some changes to your breakfast routine. What ideas do you have about what that might look like?"',
  },

  // ═══════════════════════════════════════════
  // FOUNDATIONS
  // ═══════════════════════════════════════════
  {
    id: "change-talk",
    category: "Foundations",
    name: "Change Talk (DARN-CAT)",
    explanation:
      'Any client speech that favors movement toward change. Preparatory: Desire ("I want to..."), Ability ("I could..."), Reasons ("because..."), Need ("I need to..."). Mobilizing: Commitment ("I will..."), Activation ("I\u2019m ready..."), Taking Steps ("I already started..."). Mobilizing change talk is a stronger predictor of actual behavior change.',
    whenToUse:
      "Listen for change talk throughout every session. When you hear it, reinforce it with reflections, affirmations, and follow-up questions. Your ears should be tuned to these signals.",
    example:
      'Client: "I really want to have more energy for my kids" (Desire). Reflect: "Being there for your kids is a powerful motivator for you." Client: "Yeah, and I know I could meal prep on Sundays" (Ability). Reflect: "You\u2019ve already figured out a strategy that could work."',
  },
  {
    id: "sustain-talk",
    category: "Foundations",
    name: "Sustain Talk",
    explanation:
      'Any client speech that favors the status quo. Examples: "I can\u2019t give up soda," "Diets never work for me," "I don\u2019t have time to cook." Sustain talk is normal and expected \u2014 it is NOT resistance or defiance. It is one side of ambivalence. The more you argue against it, the more the client produces it.',
    whenToUse:
      "When you hear sustain talk, do NOT argue against it or counter it with facts. Acknowledge it briefly, reflect it (sometimes double-sided), and gently steer toward change talk. Don\u2019t give sustain talk excessive airtime.",
    example:
      'Client: "I don\u2019t see how I can eat healthy when my family eats junk food." Dietitian: "It feels really hard to make different choices when everyone around you is eating differently. And at the same time, you mentioned wanting to feel better. Tell me more about that."',
  },
  {
    id: "discord",
    category: "Foundations",
    name: "Discord",
    explanation:
      "Interpersonal friction in the counseling relationship itself \u2014 not about the behavior change topic, but about the relationship. Signs: arguing, interrupting, discounting, being hostile. Discord is almost always a signal that YOU need to change approach, not that the client is being difficult.",
    whenToUse:
      "When the client becomes argumentative, withdrawn, or hostile. This is a signal to STOP what you\u2019re doing, shift focus, re-engage, and potentially apologize. Discord is a practitioner problem, not a client problem.",
    example:
      'Client: "You sound just like my doctor. Everyone tells me what to eat." Dietitian: "I\u2019m sorry \u2014 that\u2019s not what I want this to feel like. You\u2019re in charge here. Can we back up? What would be most helpful for you today?"',
  },
  {
    id: "righting-reflex",
    category: "Foundations",
    name: "The Righting Reflex",
    explanation:
      'The natural impulse to fix, correct, educate, warn, or advise when you see a client heading toward harm. It comes from genuine caring, but it is counterproductive because it puts YOU in the role of advocate for change while pushing the CLIENT into advocate for the status quo. Especially strong in dietitians because they are trained as educators.',
    whenToUse:
      'Monitor yourself constantly. When you feel the urge to say "But you should..." or "The research shows..." or "Have you considered..." \u2014 PAUSE. That urge is the righting reflex. Ask a question instead.',
    example:
      'Righting reflex: "You really need to cut sodium below 2300mg. Let me show you how to read labels." MI alternative: "What do you know about how salt affects blood pressure? ... What concerns you about that?"',
  },

  // ═══════════════════════════════════════════
  // STAGES OF CHANGE
  // ═══════════════════════════════════════════
  {
    id: "stages-overview",
    category: "Stages of Change",
    name: "Stages of Change Overview",
    explanation:
      "The Transtheoretical Model describes five stages: Precontemplation (not thinking about change), Contemplation (weighing pros and cons), Preparation (intending to change soon), Action (actively modifying behavior), and Maintenance (sustaining change). Knowing the stage helps you choose the right MI approach.",
    whenToUse:
      "Assess which stage a client is in early in the session. Do NOT use action-stage strategies (meal planning, calorie counting) with a precontemplation-stage client. Match your approach to the stage.",
    example:
      "Precontemplation: build rapport, explore values. Contemplation: use evoking, decisional balance. Preparation: strengthen commitment, plan with options. Action: affirm progress, troubleshoot. Maintenance: reinforce identity, plan for relapse.",
  },
  {
    id: "precontemplation",
    category: "Stages of Change",
    name: "Precontemplation",
    explanation:
      'The client is not considering change. They may not see a problem, may feel hopeless, or may be uninformed. Often referred by others rather than self-referred. They are NOT "in denial" \u2014 they simply haven\u2019t connected their behavior to negative outcomes in a personally meaningful way.',
    whenToUse:
      'When a client says "My doctor sent me here but I don\u2019t see the point" or "I eat fine." Focus on engaging and building rapport. Do NOT push information or action plans.',
    example:
      '"It sounds like coming here wasn\u2019t really your idea. That\u2019s okay. I\u2019m curious \u2014 what does a good day look like for you in terms of how you feel physically?"',
  },
  {
    id: "contemplation",
    category: "Stages of Change",
    name: "Contemplation",
    explanation:
      "The client is aware a problem exists and is thinking about change but hasn\u2019t committed. They\u2019re weighing pros and cons \u2014 the stage of ambivalence. They can see reasons to change AND reasons to stay the same. They may stay here a long time.",
    whenToUse:
      'When a client says "I know I should eat better, but..." or "Part of me wants to change." Use evoking strategies: decisional balance, developing discrepancy, importance/confidence rulers.',
    example:
      '"You\u2019ve mentioned several things that concern you about your current eating habits, and also some things that make it hard to change. Let\u2019s explore both sides of that."',
  },
  {
    id: "preparation",
    category: "Stages of Change",
    name: "Preparation",
    explanation:
      'The client intends to take action soon and may have already taken small steps. They\u2019re shifting from "why" to "how." This is where planning becomes appropriate.',
    whenToUse:
      'When a client says "I\u2019m ready to do something" or "I bought some cookbooks last week." Support their momentum, help develop a specific plan, anticipate obstacles, offer a menu of options.',
    example:
      '"It sounds like you\u2019re ready to make some moves. What\u2019s one change you could see yourself making this week that feels doable?"',
  },
  {
    id: "action",
    category: "Stages of Change",
    name: "Action",
    explanation:
      "The client is actively making changes \u2014 modifying eating habits, trying new foods, meal prepping, reading labels. This stage requires the most time and energy. Changes have been sustained for less than 6 months.",
    whenToUse:
      'Affirm their efforts, help troubleshoot barriers, prevent the "all or nothing" trap, normalize setbacks, and reinforce their identity as someone who makes healthy choices.',
    example:
      '"You\u2019ve been meal prepping on Sundays for three weeks now \u2014 that\u2019s real commitment. What\u2019s been the hardest part, and what\u2019s been surprisingly easy?"',
  },
  {
    id: "maintenance",
    category: "Stages of Change",
    name: "Maintenance",
    explanation:
      "The client has sustained change for more than 6 months and is working to prevent relapse. The new behavior is becoming part of their identity. Your role shifts to reinforcing confidence, planning for high-risk situations, and celebrating the transformation.",
    whenToUse:
      "Help identify high-risk situations (holidays, stress, travel), develop coping strategies, and recognize how far they\u2019ve come.",
    example:
      '"You\u2019ve been managing your portions and cooking at home for eight months now. That\u2019s not a diet \u2014 that\u2019s just how you live now. What situations still feel tricky?"',
  },

  // ═══════════════════════════════════════════
  // OARS CORE SKILLS
  // ═══════════════════════════════════════════
  {
    id: "open-ended-questions",
    category: "OARS Core Skills",
    name: "Open-Ended Questions",
    explanation:
      'Questions that cannot be answered with "yes" or "no" and invite the client to elaborate, reflect, and share their perspective. They typically begin with "what," "how," "tell me about," or "describe." Open questions give the client the floor and communicate genuine curiosity.',
    whenToUse:
      "Throughout every session. Use especially at the beginning, when exploring ambivalence, when you want to understand the client\u2019s perspective, and when transitioning between topics. Aim for a high ratio of open to closed questions.",
    example:
      '"What has your experience been with trying to change your eating habits in the past?" / "How does your current way of eating fit with how you\u2019d like to feel day to day?"',
  },
  {
    id: "affirmations",
    category: "OARS Core Skills",
    name: "Affirmations",
    explanation:
      'Genuine statements recognizing the client\u2019s strengths, efforts, values, and past successes. NOT praise ("Good job!") or flattery \u2014 they are specific, authentic observations. Frame as "You..." statements rather than "I..." statements. Affirmations build self-efficacy.',
    whenToUse:
      'When the client shares something they\u2019ve tried (even if it "failed"). When they show up for the appointment. When they demonstrate self-awareness. When confidence is low.',
    example:
      '"You drove through traffic and rearranged your afternoon to be here \u2014 that tells me this matters to you." / "The fact that you\u2019re thinking about how your eating affects your kids shows how much you care about your family."',
  },
  {
    id: "simple-reflections",
    category: "OARS Core Skills",
    name: "Simple Reflections",
    explanation:
      "Reflections that repeat, rephrase, or slightly reword what the client said, staying close to the surface meaning. They demonstrate listening and create momentum. While useful for engagement, overuse can make the conversation feel flat.",
    whenToUse:
      "Early in the session to build rapport. When you want to show you\u2019re listening. When you need a moment to think about a more complex response. When the client says something important and you want them to hear it again.",
    example:
      'Client: "I\u2019ve been eating fast food almost every day this week." Dietitian: "Fast food has been your go-to this week." / Client: "I just don\u2019t have time to cook." Dietitian: "Time for cooking has been really tight."',
  },
  {
    id: "complex-reflections",
    category: "OARS Core Skills",
    name: "Complex Reflections",
    explanation:
      "Reflections that go beyond the surface to capture the underlying meaning, emotion, or implication. You form a hypothesis about what the client means and reflect it back. These add depth, demonstrate empathy, and move the conversation forward. The most powerful tool in MI.",
    whenToUse:
      "When the client expresses emotion (even subtly). When you sense there\u2019s more beneath the surface. When you want to deepen exploration of ambivalence. Aim for at least 50% complex reflections.",
    example:
      'Client: "I know I should eat better but I just don\u2019t care anymore." Dietitian: "You\u2019re exhausted from trying, and part of you has given up hope that anything will actually work this time."',
  },
  {
    id: "summaries",
    category: "OARS Core Skills",
    name: "Summaries",
    explanation:
      "Extended reflections pulling together multiple things the client said into a coherent narrative. Types: Collecting (bouquet of what\u2019s been said), Linking (connecting current to earlier statements), Transitional (wrapping up one topic), and Recapitulation (gathering all change talk).",
    whenToUse:
      "At transitions between topics. At the end of a session. When you want to highlight the client\u2019s change talk. When the conversation has covered a lot of ground and you want to organize it.",
    example:
      '"Let me see if I\u2019ve got this right. You came in because your doctor is concerned about cholesterol. You\u2019ve been eating out more since your job changed. You actually enjoy cooking and feel better eating home-cooked food. And Sunday meal prep worked for you before. Did I capture that?"',
  },

  // ═══════════════════════════════════════════
  // ADVANCED REFLECTIONS
  // ═══════════════════════════════════════════
  {
    id: "double-sided-reflections",
    category: "Advanced Reflections",
    name: "Double-Sided Reflections",
    explanation:
      'Acknowledges both sides of ambivalence in a single statement, connecting sustain talk and change talk with "and" (never "but"). The change talk should always come SECOND \u2014 the last thing said tends to be what the client responds to.',
    whenToUse:
      'When the client expresses clear ambivalence \u2014 "I want to change but..." When you hear both sustain talk and change talk in the same session. When you want to acknowledge difficulty without getting stuck in it.',
    example:
      '"On one hand, late-night snacking is one of the few things that helps you unwind after a stressful day, AND on the other hand, you\u2019ve noticed it\u2019s affecting your sleep and how you feel in the morning."',
  },
  {
    id: "amplified-reflections",
    category: "Advanced Reflections",
    name: "Amplified Reflections",
    explanation:
      "Captures the client\u2019s statement but with greater intensity than expressed. The purpose is to gently nudge the client to back away from the extreme position. Must be done without sarcasm \u2014 warm, matter-of-fact tone. Use sparingly.",
    whenToUse:
      'When a client makes an absolute sustain talk statement like "I can never give up sugar" or "Healthy food tastes terrible." Requires good rapport and a genuinely non-sarcastic tone.',
    example:
      'Client: "I just can\u2019t eat vegetables. I hate all of them." Dietitian (warm, matter-of-fact): "So there isn\u2019t a single vegetable in the world you could imagine eating." Client: "Well, I mean, I don\u2019t mind corn. And I\u2019ll eat carrots if they\u2019re cooked right..."',
  },
  {
    id: "undershooting",
    category: "Advanced Reflections",
    name: "Undershooting Reflections",
    explanation:
      "Intentionally understates the intensity of what the client expressed. This invites them to correct you by expressing their feelings MORE strongly, which generates change talk. The opposite of amplified reflection.",
    whenToUse:
      "When the client expresses positive change talk and you want them to strengthen it. When they say something important about wanting to change and you want them to elaborate and own it more fully.",
    example:
      'Client: "I really need to get my diabetes under control for my kids." Dietitian: "So managing your diabetes is somewhat important to you." Client: "Somewhat? No \u2014 it\u2019s everything. My dad lost his foot to diabetes. I am NOT going down that path."',
  },
  {
    id: "reframing",
    category: "Advanced Reflections",
    name: "Reframing",
    explanation:
      "Offering a new perspective on the client\u2019s experience that is more consistent with change. Does not deny their experience \u2014 acknowledges it, then suggests a different way of looking at it. Can transform perceived failures into evidence of strength.",
    whenToUse:
      "When a client views a past diet attempt as a failure. When they see a characteristic as a weakness. When stuck in a negative interpretation of their situation.",
    example:
      'Client: "I tried keto for three months and then fell off the wagon. I\u2019m such a failure." Dietitian: "You sustained a major dietary change for three entire months. That tells me you have real discipline. The question isn\u2019t whether you can change \u2014 it\u2019s finding the right changes you can sustain."',
  },
  {
    id: "agreement-with-twist",
    category: "Advanced Reflections",
    name: "Agreement with a Twist",
    explanation:
      "Agree with the client\u2019s statement but add a subtle reframe \u2014 a twist that gently steers toward change. It starts with validation (agreement) and ends with a new perspective (twist). Reduces discord because the client feels heard.",
    whenToUse:
      "When a client makes sustain talk with a kernel of truth you can agree with. When direct disagreement would cause discord. When you want to redirect without being confrontational.",
    example:
      '"You\u2019re right that the nutrition information out there can be really contradictory and confusing \u2014 AND you seem like someone who wants to cut through the noise and find what actually works."',
  },
  {
    id: "continuing-paragraph",
    category: "Advanced Reflections",
    name: "Continuing the Paragraph",
    explanation:
      "Offer the next sentence the client might say if they kept talking. You guess at the meaning or feeling just beyond what they expressed. If accurate, it creates a powerful sense of being understood. If inaccurate, the client corrects you, which deepens exploration.",
    whenToUse:
      "When a client trails off or seems to hold something back. When you sense an unspoken emotion beneath what was said. When you want to deepen the conversation without asking another question.",
    example:
      'Client: "I just... every time I start eating better, something happens and I end up right back where I started." Dietitian: "...and you\u2019re starting to wonder if it\u2019s even worth trying again."',
  },
  {
    id: "metaphor-reflection",
    category: "Advanced Reflections",
    name: "Metaphor Reflection",
    explanation:
      "Captures the client\u2019s experience using a metaphor or analogy that can crystallize complex feelings in a vivid, memorable way. The client may adopt the metaphor and build on it, or correct it \u2014 both deepen understanding.",
    whenToUse:
      "When the client describes a complex emotional experience related to food or change. When a vivid image comes to mind that captures what they\u2019re saying. Use sparingly \u2014 very powerful when it lands.",
    example:
      'Client: "I feel like I\u2019m constantly trying to eat right and exercise but nothing ever changes." Dietitian: "It\u2019s like running on a treadmill \u2014 lots of effort but you\u2019re not getting anywhere."',
  },

  // ═══════════════════════════════════════════
  // INFORMATION EXCHANGE
  // ═══════════════════════════════════════════
  {
    id: "elicit-provide-elicit",
    category: "Information Exchange",
    name: "Elicit-Provide-Elicit (EPE)",
    explanation:
      "A three-step method for sharing nutrition info while respecting autonomy. Step 1: ELICIT what they already know or want to know. Step 2: PROVIDE information in small, neutral chunks using conditional language. Step 3: ELICIT their reaction. This transforms a monologue into a dialogue.",
    whenToUse:
      "EVERY time you want to share nutrition information, lab results, guidelines, or recommendations. This is the MI alternative to lecturing. The single most important technique for dietitians used to educating.",
    example:
      '"What do you know about how sodium affects blood pressure?" (ELICIT) Client: "I know salt is bad, but not sure why." "When we eat a lot of sodium, the body holds on to more water, increasing blood volume and pressure." (PROVIDE) "What do you make of that?" (ELICIT)',
  },
  {
    id: "permission-asking",
    category: "Information Exchange",
    name: "Permission Asking",
    explanation:
      'Asking the client\u2019s permission before providing information, advice, or feedback. This simple act transforms the dynamic from "expert telling" to "collaborative sharing." When clients grant permission, they are psychologically more open to receiving the information.',
    whenToUse:
      "Before sharing any nutrition education, lab results, meal plan ideas, or clinical recommendations. Before bringing up a sensitive topic (weight, binge eating, alcohol). Before offering a suggestion.",
    example:
      '"Would it be okay if I shared some information about how fiber works in the body?" / "I have some thoughts about breakfast options \u2014 would you like to hear them, or would you rather brainstorm your own ideas first?"',
  },
  {
    id: "menu-of-options",
    category: "Information Exchange",
    name: "Offering a Menu of Options",
    explanation:
      "Instead of prescribing a single recommendation, present several options and invite the client to choose. This respects autonomy, increases buy-in, and acknowledges that no single approach works for everyone.",
    whenToUse:
      "During planning when the client is ready for changes. When recommending dietary modifications, meal planning, snack alternatives, or lifestyle adjustments. When a client seems overwhelmed by a single recommendation.",
    example:
      '"Some people add a side salad to dinner. Some blend greens into smoothies. Some start with vegetables they already like. Others try one new vegetable a week. Any of those sound interesting, or do you have a different idea?"',
  },
  {
    id: "conditional-language",
    category: "Information Exchange",
    name: "Softened Language",
    explanation:
      'Using tentative, non-prescriptive language when offering info or suggestions. "Some people find..." "You might consider..." "One option could be..." replaces "You should..." "You need to..." This reduces psychological reactance \u2014 the instinct to push back against being told what to do.',
    whenToUse:
      "Whenever providing nutritional guidance or recommendations. Especially important with clients who are sensitive to being told what to do, or who have negative history with healthcare providers.",
    example:
      'Instead of: "You need to stop drinking regular soda \u2014 switch to water." Use: "Some people who\u2019ve been in a similar situation have experimented with sparkling water or infused water. What do you think might work for you?"',
  },
  {
    id: "assessment-feedback",
    category: "Information Exchange",
    name: "Assessment Feedback",
    explanation:
      "Sharing clinical results (lab values, dietary analysis) using the EPE framework. Data is presented neutrally, without judgment, and the client is invited to react and interpret. Particularly relevant for dietitians who regularly review lab work and food recalls.",
    whenToUse:
      "When sharing lab results (A1c, lipid panel, kidney function). When reviewing a food frequency questionnaire or diet recall. Always use EPE format and ask permission first.",
    example:
      '"Your A1c came back at 7.8. Do you know what that number means?" (Elicit) "An A1c of 7.8 means your average blood sugar has been running higher than the target range over the past three months." (Provide) "What do you make of that?" (Elicit)',
  },

  // ═══════════════════════════════════════════
  // EVOKING MOTIVATION
  // ═══════════════════════════════════════════
  {
    id: "developing-discrepancy",
    category: "Evoking Motivation",
    name: "Developing Discrepancy",
    explanation:
      "Helping the client see the gap between where they are now and where they want to be. The discrepancy should come from the CLIENT\u2019s own values and goals, not yours. When people perceive a conflict between their behavior and their deeply held values, internal motivation increases.",
    whenToUse:
      "When current eating behavior conflicts with stated values (e.g., wanting to be healthy for their children but eating fast food daily). During the contemplation stage when they need a gentle push.",
    example:
      '"You\u2019ve said that being a good role model for your daughter is one of the most important things in your life. How do you see your current eating habits fitting with that?"',
  },
  {
    id: "values-exploration",
    category: "Evoking Motivation",
    name: "Values Exploration",
    explanation:
      "In-depth exploration of what the client truly cares about \u2014 their core values, what gives life meaning. Values are the anchor for developing discrepancy. Often reveals motivations far more powerful than health outcomes alone (e.g., \"being there for grandchildren\" vs. \"lowering cholesterol\").",
    whenToUse:
      "Early in the counseling relationship. When standard health arguments aren\u2019t resonating. When the client seems disconnected from health-related motivations.",
    example:
      '"What matters most to you in life right now?" / "When you think about the kind of person you want to be five years from now, what comes to mind?"',
  },
  {
    id: "values-card-sort",
    category: "Evoking Motivation",
    name: "Values Card Sort",
    explanation:
      'A structured exercise where the client sorts cards representing values (health, family, independence, career, spirituality, etc.) into piles of "very important," "somewhat important," and "not important." Makes abstract values tangible and discussable.',
    whenToUse:
      "When a client has difficulty articulating values verbally. As an icebreaker in a first session. When you want to anchor the dietary conversation in something deeper than doctor\u2019s orders.",
    example:
      '"I have these cards with values on them \u2014 family, health, independence, career, fun, spirituality. Would you sort them into three piles: very important, somewhat important, and not as important? Then we\u2019ll talk about how your eating fits with what matters most."',
  },
  {
    id: "importance-ruler",
    category: "Evoking Motivation",
    name: "Importance Ruler",
    explanation:
      'Rate how important change is on a 0\u201310 scale. The KEY is the follow-up: "Why did you choose a [X] and not a lower number?" This forces the client to generate their own arguments for change. Never ask "Why not higher?" \u2014 that elicits sustain talk.',
    whenToUse:
      "When you want to assess and evoke motivation. During focusing or evoking. When the client seems ambivalent and you want to quantify and explore that ambivalence.",
    example:
      '"On a scale of 0 to 10, how important is it to you to change your diet?" Client: "6." "A 6 \u2014 above the middle. What makes it a 6 and not a 3?" (Client now gives reasons why change IS important.)',
  },
  {
    id: "confidence-ruler",
    category: "Evoking Motivation",
    name: "Confidence Ruler",
    explanation:
      'Measures confidence in ability to change on a 0\u201310 scale. Follow-up: "What makes it a [X] and not a 0?" to elicit past successes and ability. If low: "What would it take to move from a [X] to a [X+1]?" to identify specific barriers.',
    whenToUse:
      "When a client seems motivated but unsure of their ability. After exploring importance. When building self-efficacy. When you want to identify specific barriers and resources.",
    example:
      '"How confident are you, 0\u201310, that you could pack lunch three days a week?" Client: "4." "What makes it a 4 and not a 0?" Client: "I used to do it, and I know how to meal prep." "So the skills are there. What would move it to a 5?"',
  },
  {
    id: "decisional-balance",
    category: "Evoking Motivation",
    name: "Decisional Balance",
    explanation:
      "Structured exploration of the pros and cons of both changing AND staying the same \u2014 a four-quadrant grid. Important caveat: most useful for clients who have NOT yet decided to change. For committed clients, it can actually reduce commitment by reintroducing doubt.",
    whenToUse:
      "With contemplation-stage clients weighing options. When the client seems stuck in ambivalence. Do NOT use with clients who have already committed to change.",
    example:
      '"Let\u2019s look at this from all angles. What do you like about your current way of eating? What concerns you about it? What would be good about making changes? What would be hard about making changes?"',
  },
  {
    id: "looking-back",
    category: "Evoking Motivation",
    name: "Looking Back",
    explanation:
      "Inviting the client to recall a time when things were different \u2014 before the unhealthy behavior started, or when they were eating well and feeling good. Comparing that time with the present creates natural discrepancy and evokes desire for change.",
    whenToUse:
      "When the client has a history of eating well at some point. When you want to help them reconnect with a positive past experience. When they seem to have forgotten what \"feeling good\" feels like.",
    example:
      '"Think back to a time when you felt really good about how you were eating. What was that like? What was different about your life then?"',
  },
  {
    id: "looking-forward",
    category: "Evoking Motivation",
    name: "Looking Forward",
    explanation:
      'Inviting the client to envision two possible futures: one where they make changes and one where they don\u2019t. Leverages both hope and concern. Sometimes called the "crystal ball technique."',
    whenToUse:
      "When the client is in contemplation and needs help connecting current behavior to future consequences. When health risks feel abstract. When they need to connect emotionally with the reason for change.",
    example:
      '"Imagine it\u2019s five years from now and nothing has changed. What does that look like? ... Now imagine five years from now with the changes you\u2019ve been thinking about. What does THAT look like?"',
  },
  {
    id: "querying-extremes",
    category: "Evoking Motivation",
    name: "Querying Extremes",
    explanation:
      'Asking about the worst-case consequences of NOT changing and the best-case outcomes of changing. Amplifies the discrepancy between status quo and desired future. Creates emotional intensity that can catalyze motivation.',
    whenToUse:
      'When ambivalence is high and the client seems stuck in an "it\u2019s not that bad" mindset. When you want to amplify weak motivation. Use judiciously \u2014 too hard can feel confrontational.',
    example:
      '"What is the worst thing that could happen if you don\u2019t make any dietary changes?" / "What\u2019s the best thing that could happen if you DO?"',
  },
  {
    id: "columbo-approach",
    category: "Evoking Motivation",
    name: "The Columbo Approach",
    explanation:
      'Named after the TV detective. Adopt genuine, slightly puzzled curiosity \u2014 express that you can\u2019t quite reconcile two things the client has said. The client resolves the discrepancy themselves. Less confrontational than directly pointing out the gap.',
    whenToUse:
      "When stated values clearly conflict with behavior, but direct confrontation would cause discord. When you want the client to recognize a discrepancy without you pointing it out.",
    example:
      '"Help me understand something. You said managing your diabetes is the most important thing to you right now, and you also mentioned drinking regular soda daily. I\u2019m having trouble putting those two things together. Can you help me understand?"',
  },
  {
    id: "evocative-questions",
    category: "Evoking Motivation",
    name: "Evocative Questions",
    explanation:
      'Open-ended questions specifically designed to draw out change talk. Targeted at each DARN category: Desire ("What do you wish were different?"), Ability ("What changes have you made before?"), Reasons ("What would be the advantages?"), Need ("How urgent does this feel?").',
    whenToUse:
      "During evoking when you want to elicit specific types of change talk. When the client\u2019s change talk is weak and you want to strengthen it.",
    example:
      'Desire: "What would you like to see change?" Ability: "If you decided, what could you actually do?" Reasons: "What would be the three best things about eating more vegetables?" Need: "How much do you feel you need to address this?"',
  },
  {
    id: "exploring-others-concerns",
    category: "Evoking Motivation",
    name: "Exploring Others\u2019 Concerns",
    explanation:
      "Inviting the client to consider what important people in their life think about their health or eating. NOT about applying external pressure \u2014 it helps the client access relational motivations they may already hold.",
    whenToUse:
      "When the client seems motivated by relationships (family, children, partner). When others have expressed concern. When you want to tap into relational values.",
    example:
      '"You mentioned your wife has been worried about your health. What has she been saying? ... How does hearing that land with you?"',
  },
  {
    id: "typical-day",
    category: "Evoking Motivation",
    name: "A Typical Day",
    explanation:
      "Walk through what a typical day looks like \u2014 from waking to sleeping \u2014 in terms of eating, activity, emotions, and routines. Gives a holistic picture without making the client feel interrogated. Helps the client see patterns they may not have noticed.",
    whenToUse:
      "In initial assessment sessions. When you want to understand eating patterns in context. When a diet recall feels too clinical. When you want to understand emotional and environmental triggers.",
    example:
      '"Walk me through a typical weekday, starting from when you wake up. What\u2019s the first thing you do? When do you first eat? Take me through the whole day."',
  },

  // ═══════════════════════════════════════════
  // NAVIGATING RESISTANCE
  // ═══════════════════════════════════════════
  {
    id: "rolling-with-resistance",
    category: "Navigating Resistance",
    name: "Rolling with Resistance",
    explanation:
      'When you encounter pushback, do NOT argue. Flow with it and redirect. In current MI language, "resistance" has been replaced by "sustain talk" (about the behavior) and "discord" (about the relationship). The spirit remains: arguing with a client about dietary change always backfires.',
    whenToUse:
      "When the client pushes back on any suggestion. When they become defensive. When you feel the urge to argue or convince. When the session turns into a debate. STOP pushing and shift to reflection and autonomy support.",
    example:
      'Client: "I\u2019m not giving up my sweets." Dietitian: "Sweets bring you real enjoyment and you\u2019re not willing to sacrifice that. That makes sense. If you WERE going to make one small change that didn\u2019t involve giving up sweets, what might that look like?"',
  },
  {
    id: "shifting-focus",
    category: "Navigating Resistance",
    name: "Shifting Focus",
    explanation:
      "Deliberately changing the topic when conversation has become stuck or contentious. This defuses discord and avoids power struggles. Rather than pushing on a topic the client is resisting, redirect to something less threatening or more productive.",
    whenToUse:
      "When a topic generates significant sustain talk or discord. When the conversation has become a debate. When the client is clearly not ready to discuss a particular issue.",
    example:
      'Client: "I don\u2019t want to talk about my weight. Every doctor just tells me to lose weight." Dietitian: "Fair enough \u2014 let\u2019s set that aside completely. I\u2019m more interested in how you\u2019re feeling day to day. What\u2019s your energy like?"',
  },
  {
    id: "coming-alongside",
    category: "Navigating Resistance",
    name: "Coming Alongside",
    explanation:
      "Take the client\u2019s side \u2014 even the side of NOT changing \u2014 to reduce discord and paradoxically free them to argue FOR change. Instead of pushing toward change, agree it\u2019s difficult, maybe not worth it, maybe not the right time. This disarms defenses and often triggers them to defend the possibility of change.",
    whenToUse:
      "When a client is entrenched in sustain talk and nothing else is working. When the more you push, the more they push back. When you need to break a stalemate. Use with care.",
    example:
      'Client: "I\u2019ve tried everything and nothing works." Dietitian: "You might be right. You\u2019ve put in a lot of effort and the results haven\u2019t matched. Maybe this isn\u2019t the right time." Client: "Well, I do think there are some things I could do differently this time..."',
  },
  {
    id: "therapeutic-paradox",
    category: "Navigating Resistance",
    name: "Therapeutic Paradox",
    explanation:
      "A more explicit version of coming alongside. Make a paradoxical statement arguing AGAINST change, provoking the client to argue FOR it. Requires strong rapport and genuine warmth, never sarcasm.",
    whenToUse:
      "When a client has been stuck for a long time and standard strategies aren\u2019t working. When they expect you to push and have prepared defenses. Use rarely and only with clients you know well.",
    example:
      '"You\u2019ve tried so many times and it hasn\u2019t stuck. Maybe changing your diet just isn\u2019t realistic for you right now." Client: "Wait \u2014 no, I do think I can do this. I just need a different approach."',
  },
  {
    id: "normalizing",
    category: "Navigating Resistance",
    name: "Normalizing",
    explanation:
      "Communicating that the client\u2019s experience \u2014 ambivalence, struggle, lapses \u2014 is common and shared by many others. Reduces shame and isolation. Does NOT mean saying the behavior is \"okay\" \u2014 it means saying the STRUGGLE is normal.",
    whenToUse:
      'When a client seems ashamed about eating habits. When they admit to "cheating" or "being bad" with food. When they feel alone in their struggle. When discussing emotional eating, binge eating, or yo-yo dieting.',
    example:
      '"Many of my clients feel the same way \u2014 they know what they should eat but struggle to do it. You\u2019re not alone. Changing how you eat is genuinely one of the hardest things because food is tied to everything \u2014 emotions, culture, convenience, comfort."',
  },
  {
    id: "emphasizing-autonomy",
    category: "Navigating Resistance",
    name: "Emphasizing Autonomy",
    explanation:
      "Explicitly stating the client\u2019s right to choose whether and how to change. Counterintuitive but powerful: when people feel their freedom is respected, they become MORE open to change, not less. Based on self-determination theory.",
    whenToUse:
      "Whenever you sense the client feels pressured. After providing information. When they seem resistant. When wrapping up a session. As a general practice throughout.",
    example:
      '"Ultimately, this is completely your call. No one can make you change how you eat, and I wouldn\u2019t want to try. Whatever you decide, I\u2019ll support you." / "You\u2019re the boss here."',
  },
  {
    id: "supporting-self-efficacy",
    category: "Navigating Resistance",
    name: "Supporting Self-Efficacy",
    explanation:
      "Strengthening belief in their ability to change. Self-efficacy is one of the strongest predictors of actual behavior change. Strategies: highlight past successes, affirm strengths, discuss others\u2019 similar successes, break large changes into small steps, celebrate progress.",
    whenToUse:
      'When the client expresses doubt about ability. When confidence ruler scores are low. When they have a history of "failed" attempts. During planning.',
    example:
      '"You quit smoking three years ago \u2014 one of the hardest things a person can do. You clearly have the ability to make tough changes when you decide it\u2019s time." / "You already know how to meal prep \u2014 the skills are there."',
  },
  {
    id: "agenda-mapping",
    category: "Navigating Resistance",
    name: "Agenda Mapping",
    explanation:
      'A short "metaconversation" about what to talk about. Present available topics, add any you think are relevant, then invite the client to choose the focus. Respects autonomy, increases engagement, and ensures the session addresses what the client is most motivated to work on.',
    whenToUse:
      "At the start of sessions with multiple possible topics. When the referral reason differs from the client\u2019s priority. When you want to set a collaborative tone from the start.",
    example:
      '"There are a few things we could talk about today. Your doctor mentioned blood sugar, you brought up wanting energy, and I noticed calcium might be low. We can\u2019t cover everything. Where would you like to start?"',
  },
  {
    id: "apologizing",
    category: "Navigating Resistance",
    name: "Apologizing",
    explanation:
      "A genuine apology when you\u2019ve overstepped, triggered discord, or slipped into the righting reflex. Powerful relationship repair. Models humility, demonstrates respect, and often resets the conversation. NOT a sign of weakness \u2014 a sign of relational skill.",
    whenToUse:
      "When you realize you\u2019ve been pushing too hard. When the client seems hurt by something you said. When you catch yourself in the righting reflex. When discord has arisen and you contributed.",
    example:
      '"I think I may have jumped ahead there. I started offering solutions before really understanding your situation. I\u2019m sorry about that. Can we back up? I want to hear more about what\u2019s going on for you."',
  },

  // ═══════════════════════════════════════════
  // PLANNING
  // ═══════════════════════════════════════════
  {
    id: "change-plan",
    category: "Planning",
    name: "Change Plan Worksheet",
    explanation:
      "A structured but client-driven document capturing: what they want to change, most important reasons, planned steps, potential obstacles, support people, and success measures. Unlike a prescriptive meal plan, this is authored by the CLIENT with your facilitation.",
    whenToUse:
      "When in preparation or action stage with expressed readiness. When you hear strong commitment language and \"how\" questions. NOT during precontemplation or early contemplation.",
    example:
      '"Let\u2019s put together a plan that works for you. What\u2019s the change you want to make? What\u2019s the most important reason? What\u2019s your first step? What could get in the way? Who can help? How will you know it\u2019s working?"',
  },
  {
    id: "key-question",
    category: "Planning",
    name: "The Key Question",
    explanation:
      "A transitional question that moves the conversation from evoking to planning. Asked when the client shows readiness signs. The key question hands the steering wheel to the client for the planning phase.",
    whenToUse:
      "When you hear strong mobilizing change talk (commitment, activation, taking steps). When the client seems ready to move from \"why\" to \"how.\" After a recapitulation summary. When the moment feels right.",
    example:
      '"Given everything we\u2019ve talked about \u2014 your concern about energy levels, wanting to be there for your kids, and knowing you\u2019ve made changes before \u2014 what do you think you\u2019d like to do?"',
  },
  {
    id: "brainstorming",
    category: "Planning",
    name: "Brainstorming",
    explanation:
      "Generating multiple possible options without evaluating them. You and the client together list as many ideas as possible \u2014 good, bad, creative, conventional \u2014 then the client selects which appeal. Keeps planning collaborative and playful rather than prescriptive.",
    whenToUse:
      "During planning when identifying strategies for change. When the client is stuck and can\u2019t think of alternatives. When you want to expand their sense of what\u2019s possible.",
    example:
      '"Let\u2019s brainstorm all the ways you could get more protein at lunch \u2014 no idea is too wild. We\u2019ll sort through them after. What comes to mind?"',
  },
  {
    id: "recapitulation-summary",
    category: "Planning",
    name: "Recapitulation Summary",
    explanation:
      "A strategic summary gathering all change talk from the session. Selectively includes the client\u2019s own reasons, desires, abilities, and needs for change while minimizing sustain talk. Typically delivered just before the key question as a launchpad for planning.",
    whenToUse:
      "At the transition between evoking and planning. At the end of a session to reinforce motivation. When significant change talk has been expressed throughout.",
    example:
      '"Let me pull together what I\u2019ve heard. You\u2019re worried about your blood sugar. You want to see your grandkids graduate. When you cooked more, you felt better. You know how to meal prep. And you\u2019re ready to start making changes. Does that capture it?"',
  },
  {
    id: "exploring-strengths",
    category: "Planning",
    name: "Exploring Strengths",
    explanation:
      "Deliberately identifying existing strengths, past successes, skills, support systems, and resources. Builds self-efficacy and helps the client see they already have many tools they need. Shifts from problem-focused to strengths-focused.",
    whenToUse:
      "When confidence is low. During planning. When the client focuses only on barriers. When you want to shift from a problem-focused conversation.",
    example:
      '"You mentioned you\u2019re really organized at work. How could you apply that same skill to meal planning?" / "What strengths do you have that might help with this?"',
  },
  {
    id: "anticipating-obstacles",
    category: "Planning",
    name: "Anticipating Obstacles",
    explanation:
      "Proactively exploring potential barriers and developing strategies. Not pessimism \u2014 realistic preparation that increases likelihood of success. When clients have thought through obstacles in advance, they\u2019re less likely to be derailed.",
    whenToUse:
      "After a change plan has been developed. When the client seems overly optimistic. When you know common barriers are likely (travel, holidays, social pressure).",
    example:
      '"This plan sounds solid. Let\u2019s think about what might get in the way. What situations could make sticking to this really hard? What would you do if that happened?"',
  },

  // ═══════════════════════════════════════════
  // PROCESS SKILLS
  // ═══════════════════════════════════════════
  {
    id: "reflection-to-question-ratio",
    category: "Process Skills",
    name: "Reflection-to-Question Ratio",
    explanation:
      "A quality metric: aim for at least two reflections for every question. In skilled MI, the ratio is 2:1 or 3:1 (reflections to questions). Too many questions feels like an interrogation. After asking an open question, follow with two or three reflections before asking another.",
    whenToUse:
      "Monitor throughout every session. If you notice multiple questions in a row, pause and reflect instead. If the session feels like a Q&A, you need more reflections.",
    example:
      '"What\u2019s been the hardest part?" (Q) Client: "My husband doesn\u2019t support it." "You feel undermined at home." (R1) Client: "I\u2019m the only one who cares." "You\u2019re carrying this alone, and that\u2019s exhausting." (R2) Client opens up more...',
  },
  {
    id: "signs-of-readiness",
    category: "Process Skills",
    name: "Signs of Readiness",
    explanation:
      'Detecting when a client is shifting from ambivalence toward readiness. Signs: increased change talk, decreased sustain talk, a sense of resolve, questions about the process ("How would I...?"), envisioning the future, experimenting with small steps. When these appear, shift from evoking to planning.',
    whenToUse:
      "Throughout every session. This is the clinical skill of knowing WHEN to move from evoking to planning. Moving too early = premature planning. Moving too late = missed window.",
    example:
      'Client shifts from "I don\u2019t know if I can do this" to "So if I were going to start meal prepping, what would I need?" \u2014 this "how" question is a classic readiness signal. Move into collaborative planning.',
  },

  // ═══════════════════════════════════════════
  // TRAPS TO AVOID
  // ═══════════════════════════════════════════
  {
    id: "expert-trap",
    category: "Traps to Avoid",
    name: "The Expert Trap",
    explanation:
      "Taking on the role of all-knowing expert, gathering data and dispensing solutions. Creates a passive client who waits to be told what to do. Dietitians are especially vulnerable because their training emphasizes expertise and education.",
    whenToUse:
      "Watch for this when you\u2019re doing most of the talking, asking rapid-fire assessment questions, or launching into meal plans without exploring the client\u2019s perspective. If the client is silent and nodding, you may be here.",
    example:
      'Trap: "Based on your labs, I recommend reducing saturated fat, increasing fiber to 25g, and eating fatty fish 3x/week. Here\u2019s a meal plan." MI: "Your labs showed some areas we could work on. Before I share anything, what changes have you been thinking about?"',
  },
  {
    id: "question-answer-trap",
    category: "Traps to Avoid",
    name: "The Question-Answer Trap",
    explanation:
      "The session becomes rapid-fire Q&A with short answers. Feels like an interrogation and prevents deeper exploration. Happens when focused on data collection rather than relationship building.",
    whenToUse:
      "Watch for this when your questions are mostly closed-ended and you\u2019re driving the conversation. If the client\u2019s answers are getting shorter, you\u2019re likely here.",
    example:
      'Trap: "Do you eat breakfast? What do you eat? How many veggies? Do you drink water?" MI: "Tell me about how your typical morning goes, starting from when you wake up."',
  },
  {
    id: "labeling-trap",
    category: "Traps to Avoid",
    name: "The Labeling Trap",
    explanation:
      'Applying diagnostic or pejorative labels \u2014 "obese," "non-compliant," "addicted to sugar," "emotional eater." Labels create shame, defensiveness, and discord. They reduce the client to a category.',
    whenToUse:
      'Watch for this whenever using clinical language. Even seemingly neutral terms like "obese" or "overweight" can trigger shame. Use person-first language and behavioral descriptions.',
    example:
      'Trap: "Your BMI puts you in the obese category." MI: "Your doctor has expressed some concern about your weight. How do you feel about that?"',
  },
  {
    id: "premature-focus-trap",
    category: "Traps to Avoid",
    name: "The Premature Focus Trap",
    explanation:
      'Jumping to the "problem" or action planning before the client is engaged. Happens when you assume you know what the session should be about (e.g., "You\u2019re here about diabetes, let\u2019s do carb counting") without exploring their concerns first.',
    whenToUse:
      "Watch for this at the beginning of sessions, especially with a specific referral diagnosis. Always engage and focus collaboratively first.",
    example:
      'Trap: "So you\u2019re here about your diabetes. Let me teach you about carb counting." MI: "I see your doctor referred you. Before we dive in, what are you most concerned about right now?"',
  },
  {
    id: "chat-trap",
    category: "Traps to Avoid",
    name: "The Chat Trap",
    explanation:
      "The opposite of premature focus \u2014 spending too much time on small talk without moving toward a productive focus. While engagement is important, excessive chatting wastes limited session time and signals you\u2019re avoiding the real work.",
    whenToUse:
      "Watch for this when you\u2019re 15 minutes into a 30-minute session and haven\u2019t established a focus yet. Balance rapport with purpose.",
    example:
      'Trap: Spending most of the session on vacation stories, kids\u2019 school, and weather. MI: Brief warm engagement, then "It\u2019s great catching up. What would be most helpful to focus on today?"',
  },
  {
    id: "blaming-trap",
    category: "Traps to Avoid",
    name: "The Blaming Trap",
    explanation:
      "The session becomes focused on who or what is to blame. Blame is unproductive in MI. The goal is to focus on what can be changed going forward, not who is responsible for the past.",
    whenToUse:
      "When conversation drifts toward blame (self-blame or other-blame). Redirect toward forward-looking exploration.",
    example:
      'Client: "It\u2019s my mother\u2019s fault \u2014 she fed us nothing but processed food." Dietitian: "Your early food experiences really shaped your habits. And here you are now, looking at what you want for YOUR future. What does that look like?"',
  },
  {
    id: "confrontation-trap",
    category: "Traps to Avoid",
    name: "The Confrontation Trap",
    explanation:
      "Directly challenging or arguing with the client\u2019s sustain talk or beliefs. This is the righting reflex in action. Confrontation increases discord and strengthens defense of the status quo. Always counterproductive in MI.",
    whenToUse:
      "Watch for when you feel the urge to correct misinformation, argue against rationalizations, or prove a point. Instead, reflect, reframe, or ask a question.",
    example:
      'Trap: "That\u2019s not true \u2014 coconut oil IS high in saturated fat." MI: "You\u2019ve heard coconut oil has health benefits. What have you read? Would it be okay if I shared what the current research shows?"',
  },

  // ═══════════════════════════════════════════
  // EDUCATOR VS COUNSELOR
  // ═══════════════════════════════════════════
  {
    id: "educator-vs-counselor",
    category: "Educator vs Counselor",
    name: "The Core Tension",
    explanation:
      'Traditional nutrition counseling assumes the client lacks knowledge, so you fill the gap with education. MI assumes the problem is usually NOT lack of knowledge but lack of motivation, confidence, or resolution of ambivalence. Most clients KNOW what they "should" eat. The shift is from "How do I get information into the client?" to "How do I draw the client\u2019s own motivation out?"',
    whenToUse:
      "This is the fundamental shift to internalize. Education feels productive. Listening and reflecting can feel like \"not doing anything.\" Trust that listening IS the intervention. The client\u2019s own change talk is more persuasive than your expertise.",
    example:
      'Educator: "You should eat 5\u20139 servings of fruits and vegetables. Here\u2019s what a serving looks like..." MI counselor: "What do you know about how eating more fruits and vegetables might affect how you feel? ... What connection do you see between your eating and your energy?"',
  },
  {
    id: "monitor-talking",
    category: "Educator vs Counselor",
    name: "Monitor Your Talking %",
    explanation:
      "In MI, the client should be talking more than you. If you\u2019re talking more than 50% of the time, you\u2019re likely in educator mode. Aim for the client to talk 60\u201370% of the time.",
    whenToUse:
      "Check in with yourself throughout every session. If you realize you\u2019ve been monologuing, stop, reflect something the client said earlier, and ask an open question.",
    example:
      "Mental check: \"Am I talking more than my client right now? When was the last time they said more than one sentence? Let me pause and reflect something they said earlier.\"",
  },
  {
    id: "use-epe",
    category: "Educator vs Counselor",
    name: "Use EPE Instead of Lecturing",
    explanation:
      "Every time you feel the urge to educate, use Elicit-Provide-Elicit. This transforms a monologue into a dialogue. The information lands differently when the client has asked for it and been invited to react to it.",
    whenToUse:
      "Whenever you catch yourself about to launch into an explanation. The urge to explain is the righting reflex dressed up as helpfulness.",
    example:
      'Instead of: "Let me tell you about fiber. There are two types..." Use: "What do you already know about fiber and how it works? ... [build on their knowledge] ... How does that connect to what you\u2019ve been experiencing?"',
  },
  {
    id: "ask-before-telling",
    category: "Educator vs Counselor",
    name: "Ask Before Telling",
    explanation:
      'Use permission asking before every piece of information delivery. "Would you like to hear about...?" This shifts the dynamic from pushing to offering. When the client says yes, they\u2019re psychologically primed to receive.',
    whenToUse:
      "Before every instance of sharing clinical information, dietary recommendations, or health education. Make it a reflex.",
    example:
      '"Would it be helpful if I shared a bit about how different types of carbs affect blood sugar differently?" vs. jumping straight into the education.',
  },
  {
    id: "notice-righting-reflex",
    category: "Educator vs Counselor",
    name: "Notice the Righting Reflex",
    explanation:
      'The physical and emotional urge to fix, correct, or educate. When you feel it, take a breath and ask a question instead. Label it internally: "There\u2019s my righting reflex." This awareness is the first step to managing it.',
    whenToUse:
      "In real time, throughout every session. The righting reflex is strongest when the client says something you know to be medically inaccurate, or when they describe a behavior you know is harmful.",
    example:
      'Client: "I read that apple cider vinegar cures diabetes." Internal: "There\u2019s my righting reflex." External: "You\u2019ve been looking into natural remedies. What drew you to apple cider vinegar? ... Would you be interested in hearing what the research says about it?"',
  },
  {
    id: "trust-the-process",
    category: "Educator vs Counselor",
    name: "Trust the Process",
    explanation:
      "It feels uncomfortable to \"just listen\" when you have so much knowledge to share. Trust that listening and reflecting IS the intervention. The client\u2019s own change talk is more persuasive than your expertise. A client who talks themselves into change is more likely to follow through than one who was talked into it.",
    whenToUse:
      "When you feel anxious that the session isn\u2019t \"productive\" because you haven\u2019t taught anything. When you worry you\u2019re not earning your keep. When silence feels unbearable.",
    example:
      "Reframe for yourself: \"I didn\u2019t lecture at all today, and my client left saying she feels motivated for the first time. The conversation WAS the intervention. Her words, reflected back, did the work.\"",
  },
  {
    id: "reflect-more-question-less",
    category: "Educator vs Counselor",
    name: "Reflect More, Question Less",
    explanation:
      "Monitor your reflection-to-question ratio. When in doubt, reflect instead of asking another question. Reflections demonstrate empathy and keep the client talking. Questions, especially in series, create interrogation energy.",
    whenToUse:
      "When you notice yourself asking multiple questions in a row. When the client\u2019s answers are getting shorter. When the session feels like a clinical assessment rather than a conversation.",
    example:
      'Instead of: "What did you eat yesterday? And what about lunch? Did you snack?" Try: "It sounds like your eating patterns have been unpredictable lately." (Reflection) Client responds with more detail than any question would have elicited.',
  },
];
