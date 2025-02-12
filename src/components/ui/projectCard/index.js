import Image from 'next/image';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:w-1/2">
        <img src={image} width={600} height={400} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 my-2">{description}</p>
        <a href={link} className="text-blue-600 font-medium hover:underline">
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default  ProjectCard;