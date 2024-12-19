import { FaCogs, FaDatabase, FaMagic, FaChartLine, FaClipboardCheck, FaPlug } from "react-icons/fa";

const machineLearningServices = [
  {
    id: 1,
    title: "Custom Model Design",
    description:
      "We begin by understanding your unique business challenges and objectives. Our team of data scientists and machine learning experts collaborates with you to design tailored models that address specific needs, whether it’s for forecasting, classification, or anomaly detection.",
    icon: <FaCogs />, // Gear icon for customization
  },
  {
    id: 2,
    title: "Data Preparation and Cleaning",
    description:
      "The foundation of any successful machine learning model is high-quality data. We assist you in collecting, cleaning, and preprocessing data to ensure that it is suitable for training and provides accurate insights. This step is crucial for maximizing the effectiveness of your models.",
    icon: <FaDatabase />, // Database icon for data preparation
  },
  {
    id: 3,
    title: "Feature Engineering",
    description:
      "Our experts apply advanced techniques in feature engineering to extract relevant features from your data that enhance model performance. By identifying and creating the right features, we improve the model’s ability to learn and make predictions accurately.",
    icon: <FaMagic />, // Magic wand icon for feature engineering
  },
  {
    id: 4,
    title: "Model Selection and Training",
    description:
      "Based on your specific requirements, we select the most appropriate algorithms and techniques for your machine learning model. Our team trains the model using your data, continuously refining and optimizing it to achieve the best performance metrics.",
    icon: <FaChartLine />, // Line chart icon for model training and performance
  },
  {
    id: 5,
    title: "Validation and Testing",
    description:
      "We implement robust validation and testing protocols to evaluate the model’s accuracy, reliability, and generalization. Our goal is to ensure that the model performs well on unseen data and meets your business objectives.",
    icon: <FaClipboardCheck />, // Clipboard check icon for validation and testing
  },
  {
    id: 6,
    title: "Deployment and Integration",
    description:
      "Once the model is validated, we assist in deploying it within your existing systems and workflows. Our team ensures seamless integration, allowing you to utilize the model in real-time scenarios and automate processes effectively.",
    icon: <FaPlug />, // Plug icon for deployment and integration
  },
];


export default machineLearningServices