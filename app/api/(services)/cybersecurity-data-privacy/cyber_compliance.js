import { FaClipboardList, FaSearch, FaFileSignature, FaShieldAlt, FaChalkboardTeacher, FaUserShield, FaSyringe, FaRegClock, FaHandshake, FaFile } from 'react-icons/fa';

const cyber_compliance = [
  {
    id: 0,
    title: "Regulatory Assessment",
    description:
      "We begin with a thorough assessment of your current data practices to determine your compliance status concerning applicable regulations. This involves identifying the types of personal data you collect, how it's used, and where it's stored.",
    icon: <FaClipboardList />,
  },
  {
    id: 1,
    title: "Gap Analysis",
    description:
      "Our team conducts a detailed gap analysis to pinpoint areas where your organization may not meet compliance requirements. This analysis serves as the foundation for developing a targeted compliance strategy.",
    icon: <FaSearch />,
  },
  {
    id: 2,
    title: "Policy Development",
    description:
      "We help create and implement comprehensive data protection policies tailored to your organization's specific needs. These policies cover data collection, processing, storage, sharing, and disposal, ensuring compliance with relevant regulations.",
    icon: <FaFileSignature />,
  },
  {
    id: 3,
    title: "Data Protection Impact Assessments (DPIAs)",
    description:
      "For high-risk processing activities, we conduct DPIAs to evaluate the impact on consumer privacy and identify measures to mitigate potential risks. This proactive approach is crucial for demonstrating compliance.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "Training and Awareness Programs",
    description:
      "Our compliance experts provide training sessions for your employees to educate them about data protection regulations and best practices. We emphasize the importance of data privacy in fostering a culture of compliance within your organization.",
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 5,
    title: "Consumer Rights Management",
    description:
      "We assist in implementing processes to manage consumer rights under data protection regulations, such as the right to access, rectify, or delete personal information. Our solutions ensure prompt responses while maintaining compliance.",
    icon: <FaUserShield />,
  },
  {
    id: 6,
    title: "Incident Response Planning",
    description:
      "We help develop incident response plans that outline the steps to take in the event of a data breach. These plans ensure that your organization can respond swiftly and effectively to minimize harm and comply with notification requirements.",
    icon: <FaSyringe />,
  },
  {
    id: 7,
    title: "Ongoing Compliance Monitoring",
    description:
      "Compliance is not a one-time effort. We provide ongoing monitoring services to ensure your organization remains compliant as regulations evolve and as your business practices change.",
    icon: <FaRegClock />,
  },
  {
    id: 8,
    title: "Third-Party Vendor Compliance",
    description:
      "We assess the compliance of your third-party vendors to ensure they meet the necessary data protection standards. Our services include evaluating vendor contracts and data processing agreements to protect your organization’s data.",
    icon: <FaHandshake />,
  },
  {
    id: 9,
    title: "Audit and Review Services",
    description:
      "We conduct regular audits and reviews of your data protection practices to ensure ongoing compliance and identify areas for improvement. These assessments help mitigate risks effectively.",
    icon: <FaFile />, // Changed from FaFileAudit to FaFile
  },
];

export default cyber_compliance;
