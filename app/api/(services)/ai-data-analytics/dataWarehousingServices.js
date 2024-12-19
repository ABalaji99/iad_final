import { FaNetworkWired, FaClock, FaChartBar, FaServer, FaDesktop, FaShieldAlt } from "react-icons/fa";

export const dataWarehousingServices = [
  {
    id: 1,
    title: "Data Integration",
    description:
      "We streamline the integration of data from multiple sources into a centralized data warehouse, ensuring consistency and accessibility for effective analysis.",
    icon: <FaNetworkWired />, // Represents data integration and connectivity.
  },
  {
    id: 2,
    title: "Real-Time Data Processing",
    description:
      "Our solutions enable real-time data processing, allowing your business to access up-to-the-minute insights and make timely decisions.",
    icon: <FaClock />, // Represents real-time processing.
  },
  {
    id: 3,
    title: "Advanced BI Tools",
    description:
      "We provide advanced business intelligence tools to transform raw data into actionable insights, enabling informed decision-making.",
    icon: <FaChartBar />, // Represents business intelligence and analytics.
  },
  {
    id: 4,
    title: "Scalable Data Architecture",
    description:
      "Our scalable data architectures grow with your business, ensuring that your data warehouse can handle increasing volumes of data.",
    icon: <FaServer />, // Represents scalability and infrastructure.
  },
  {
    id: 5,
    title: "Customized Dashboards",
    description:
      "We design customized dashboards that offer a clear view of key metrics, tailored to meet your unique business requirements.",
    icon: <FaDesktop />, // Represents dashboards and visualization.
  },
  {
    id: 6,
    title: "Data Governance and Compliance",
    description:
      "We ensure that your data is managed securely and complies with industry standards, providing peace of mind and maintaining trust.",
    icon: <FaShieldAlt />, // Represents security and compliance.
  },
];
