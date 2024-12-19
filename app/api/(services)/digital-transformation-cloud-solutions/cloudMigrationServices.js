import { FaCloud, FaServer, FaExchangeAlt, FaTools, FaRegMoneyBillAlt } from 'react-icons/fa';

const cloudMigrationServices = [
  {
    id: 1,
    title: "Assessment & Strategy",
    description:
      "We assess your infrastructure to develop a migration strategy that aligns with your business goals.",
    icon: <FaCloud size={30} />,
  },
  {
    id: 2,
    title: "Design & Planning",
    description:
      "We design and plan your cloud migration, outlining necessary resources and timeframes.",
    icon: <FaServer size={30} />,
  },
  {
    id: 3,
    title: "Data Migration",
    description:
      "Our team employs industry-standard tools to migrate your data securely with minimal downtime.",
    icon: <FaExchangeAlt size={30} />,
  },
  {
    id: 4,
    title: "Application Migration",
    description:
      "We ensure that your applications are optimized and ready for cloud deployment.",
    icon: <FaTools size={30} />,
  },
  {
    id: 5,
    title: "Ongoing Support",
    description:
      "After migration, we continue to provide cloud management and optimization services.",
    icon: <FaServer size={30} />,
  },
  {
    id: 6,
    title: "Cost Optimization",
    description:
      "We offer cloud cost optimization strategies to maximize your investment and operational efficiency.",
    icon: <FaRegMoneyBillAlt size={30} />,
  },
];

export default cloudMigrationServices;
