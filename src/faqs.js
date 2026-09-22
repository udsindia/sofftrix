/**
 * Home page FAQ. Lives in its own file because the same answers are also
 * published as FAQPage structured data (see src/seo.js), and the two must
 * match word for word.
 */
export const FAQS = [
  {
    q: 'Does VUTrak use the official WhatsApp Business API?',
    a: 'Yes. Messages go out from your verified business number through the official API, using templates WhatsApp has approved. We do not use unofficial automation, because a banned business number is worse than no automation at all.',
  },
  {
    q: 'Whose number do the messages come from?',
    a: 'Yours. Each business runs in its own workspace with its own WhatsApp number, users, pipeline, and templates. Connecting the number is part of guided onboarding.',
  },
  {
    q: 'What happens if a lead replies in the middle of a follow-up sequence?',
    a: 'The sequence stops immediately. Anything a human replies to halts the automation, so nobody is messaged after they have already answered.',
  },
  {
    q: 'Where can leads come from?',
    a: 'Meta and Google lead ads, website and landing page forms, click-to-WhatsApp ads, missed calls, messages to your business number, and spreadsheet imports. Every lead keeps its source and campaign from the first second.',
  },
  {
    q: 'What happens to conversations when a rep leaves?',
    a: 'They stay with the business. Every thread lives on the lead record in a shared inbox, not on anyone’s personal phone.',
  },
  {
    q: 'Can reps see each other’s leads?',
    a: 'Only if you let them. Owners set what each role can see and do, down to whether a rep can view leads that are not theirs.',
  },
]
