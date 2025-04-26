'use client';

import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2022',
    events: [
      {
        title: 'Community AI: Teaching AI to Local Students and Teachers',
        summary:
          'Taught AI basics to local educators and students, encouraging tech adoption in communities.',
      },
    ],
  },
  {
    year: '2023',
    events: [
      {
        title: 'AI-Powered Chatbot for Academic Queries',
        summary:
          'Developed a chatbot during my IT internship to help students access academic information easily.',
      },
    ],
  },
  {
    year: '2024',
    events: [
      {
        title: 'What Challenges Do You See the Islamic Economy Face Among Youth?',
        summary:
          'Research on youth engagement with Islamic economic principles, presented at IConISF 2024.',
      },
      {
        title: 'Using NLP to Advance Freedom of Expression',
        summary:
          'Explored how NLP tools can protect linguistic diversity and promote free speech.',
      },
      {
        title: 'Communication Between Doctors and Patients',
        summary:
          'Visual project bridging technical medical language and public understanding using storytelling.',
      },
      {
        title:
          'Israel’s Genocide of Palestine: Human Rights and International Humanitarian Law',
        summary:
          'Critical analysis raising awareness about war crimes and humanitarian law in global conflicts.',
      },
    ],
  },
];

const ResearchTimeline = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-700">
        Research Timeline
      </h2>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-1 bg-blue-200 rounded-full"></div>

        <div className="space-y-16 pl-16">
          {timelineData.map((yearItem, yearIdx) => (
            <div key={yearIdx}>
              {/* Year Label */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-blue-500 border-4 border-white rounded-full relative z-10"></div>
                  <h3 className="text-2xl font-bold text-blue-600">{yearItem.year}</h3>
                </div>
              </motion.div>

              {/* Events for that Year */}
              <div className="space-y-10">
                {yearItem.events.map((event, eventIdx) => (
                  <motion.div
                    key={eventIdx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: eventIdx * 0.1,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    {/* Dot */}
                    <div className="absolute -left-4 top-3 w-3 h-3 bg-blue-500 rounded-full border-2 border-white z-20"></div>

                    {/* Card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-lg shadow-md transition-all group-hover:translate-x-2 group-hover:shadow-lg">
                      <h4 className="text-xl font-semibold text-blue-400 mb-2">
                        {event.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{event.summary}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchTimeline;
