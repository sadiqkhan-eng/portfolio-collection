// src/components/home/ObjectionHandlingSection.tsx
import React from 'react';
import SpotlightCard from '../ui/SpotlightCard'; // Import SpotlightCard

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  setIsOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, setIsOpen }) => {
  return (
    <SpotlightCard className="border border-gray-700 rounded-lg mb-4">
      <div className="relative z-10"> {/* Ensure content is above the spotlight */}
        <button
          className="flex justify-between items-center w-full p-4 text-lg font-semibold text-left focus:outline-none bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
          onClick={setIsOpen}
        >
          <span>{title}</span>
          <span>{isOpen ? '-' : '+'}</span>
        </button>
        {isOpen && (
          <div className="p-4 bg-gray-900 text-gray-300 border-t border-gray-700">
            <p>{content}</p>
          </div>
        )}
      </div>
    </SpotlightCard>
  );
};

const objections = [
  {
    title: 'What are your rates and pricing models?',
    content: 'My pricing is project-based, tailored to the scope and complexity of your needs. I offer transparent quotes after an initial discovery phase to ensure alignment with your budget and goals.',
  },
  {
    title: 'How long does a typical project take?',
    content: 'Project timelines vary depending on the features and complexity. A typical project can range from 4 to 12 weeks. I prioritize efficient delivery without compromising on quality.',
  },
  {
    title: 'What is your process for revisions and feedback?',
    content: 'I follow an iterative development approach. You'll be involved at every stage, providing feedback through regular check-ins. Revisions are incorporated efficiently to ensure your complete satisfaction.',
  },
  {
    title: 'How do you ensure scalability and future maintenance?',
    content: 'I build with scalability in mind, using modern architectures and best practices. Post-launch, I offer maintenance packages to ensure your application remains updated, secure, and performs optimally.',
  },
  {
    title: 'What if I need AI integrations not listed in your services?',
    content: 'My expertise in AI is broad, and I am always exploring new technologies. If you have specific AI integration needs, let's discuss them. I am confident we can find a custom solution.',
  },
];

const ObjectionHandlingSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-black text-white text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Frequently Asked Questions</h2>
        {objections.map((objection, index) => (
          <AccordionItem
            key={index}
            title={objection.title}
            content={objection.content}
            isOpen={openIndex === index}
            setIsOpen={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ObjectionHandlingSection;