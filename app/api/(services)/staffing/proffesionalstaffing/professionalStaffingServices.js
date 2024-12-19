import { MdOutlineGroup } from "react-icons/md"; // For Permanent Placement
import { FiClock } from "react-icons/fi"; // For Temporary & Seasonal Staffing
import { RiTeamFill } from "react-icons/ri"; // For Team Augmentation

const professionalStaffingServices = [
  {
    id: 1,
    title: "Permanent Placement",
    description:
      "Finding the right long-term fit is essential for organizational stability and growth. iAppsData’s permanent placement services focus on identifying candidates who align not only with the technical requirements of the role but also with the culture and values of your organization. We help you secure dedicated professionals who are ready to make a lasting impact.",
    icon: <MdOutlineGroup/>, // Material Design Group Icon (for teams and people)
  },
  {
    id: 2,
    title: "Temporary & Seasonal Staffing",
    description:
      "Business demands can fluctuate due to project cycles, peak seasons, or special events. Our temporary staffing services provide quick, adaptable solutions, ensuring you can ramp up with qualified professionals precisely when needed. This service is particularly valuable for roles in operations, administration, and specialized projects where flexibility is key.",
    icon: <FiClock/>, // Feather Clock Icon (representing temporary or time-sensitive work)
  },
  {
    id: 3,
    title: "Team Augmentation",
    description:
      "For organizations needing to scale their teams quickly while maintaining quality and expertise, team augmentation offers an efficient solution. We provide experienced professionals across various industries and roles, enhancing your in-house capabilities without the long-term commitments of hiring.",
    icon: <RiTeamFill/>, // Remix Icon Team Fill (representing augmented teams)
  },
];

export default professionalStaffingServices;
