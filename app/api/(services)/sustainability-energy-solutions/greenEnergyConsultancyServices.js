import { FaLeaf, FaRegLightbulb, FaTasks, FaSolarPanel } from 'react-icons/fa';

const greenEnergyConsultancyServices = [
  {
    id: 1,
    title: "Sustainability Assessment",
    description: "We begin by conducting a thorough assessment of your current energy consumption and sustainability practices. Our team evaluates your organization’s energy footprint, identifying areas for improvement and opportunities for adopting green energy solutions.",
    icon: <FaLeaf />
  },
  {
    id: 2,
    title: "Customized Energy Strategy Development",
    description: "Based on the sustainability assessment, we develop tailored energy strategies that align with your organization’s goals. Our strategies encompass recommendations for renewable energy sources, energy efficiency improvements, and sustainability initiatives that contribute to long-term savings and environmental stewardship.",
    icon: <FaRegLightbulb />
  },
  {
    id: 3,
    title: "Project Management for Green Energy Initiatives",
    description: "We provide end-to-end project management services for green energy projects. Our experienced project managers oversee all aspects of implementation, from planning and budgeting to execution and monitoring, ensuring that projects are delivered on time and within scope.",
    icon: <FaTasks />
  },
  {
    id: 4,
    title: "Renewable Energy Integration",
    description: "Our team specializes in integrating renewable energy solutions, such as solar, wind, and biomass, into your existing energy infrastructure. We guide you through the selection, installation, and optimization of renewable energy systems that meet your specific needs and contribute to sustainability goals.",
    icon: <FaSolarPanel />
  }
];

export default greenEnergyConsultancyServices;
