
interface ProblemCardProps {
  problemNumber: string;
  title: string;
  description: string;
  roles?: string[];
  joinedCount: number;
  totalSlots: number;
  onMoreInfoClick: () => void;
}

function ProblemCard({
  problemNumber,
  title,
  description,
  roles = [],
  joinedCount,
  totalSlots,
  onMoreInfoClick
}: ProblemCardProps) {
  //  progress percentage
  const progressPercent = (joinedCount / totalSlots) * 100;

  return (
    <div className=" font-sans relative w-full p-6 mt-4 bg-white border border-black-200 rounded-xl shadow-lg">
           <h2 className=" mb-2 text-2xl font-bold text-gray-900">
        {problemNumber}. Problem Statement: {title}
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
        <p className="flex-[3] text-sm text-gray-700 leading-relaxed">
          {description}
        </p>
        
        <div className=" min-w-[120px]">
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            Roles
          </h3>
          <ul className="list-none p-0 m-0">
            {roles.map((role, index) => (
              <li key={index} className="text-sm text-gray-600 mb-1">
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-200 pt-5">
        
        {/* Progress Bar */}
        <div className="w-full sm:w-auto flex-1">
          <span className="block text-xs text-gray-500 mb-1.5">
            {joinedCount} of {totalSlots} joined
          </span>
          <div className="w-full max-w-xs h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gray-700 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
        
        <button 
          className="px-6 py-2 text-sm border border-black-500  font-semibold text-gray-700 bg-white rounded-full shadow-sm whitespace-nowrap hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 "
          onClick={onMoreInfoClick}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default ProblemCard;