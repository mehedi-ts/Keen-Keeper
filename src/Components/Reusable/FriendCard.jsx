import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const { name, days_since_contact, picture, status, tags } = friend;
  return (
    <Link to={`/friend/${friend.id}`}>
      <div className="p-6 bg-white rounded-lg flex flex-col items-center gap-3 shadow-lg">
        <div className="img h-20 w-20 flex items-center justify-center  rounded-full overflow-hidden ">
          <img className="w-full" src={picture} alt="" />
        </div>
        <div className="info text-center flex flex-col items-center gap-2">
          <h2 className="text-[#1F2937] text-[20px] font-semibold">{name}</h2>
          <p className="text-[12px] text-[#64748B]">
            {days_since_contact}d ago{" "}
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {tags.map((tag, index) => (
              <span
                key={index}
                className=" text-[#244D3F] text-[12px] font-medium bg-[#CBFADB] rounded-full py-1 px-2 flex items-center justify-center"
              >
                {tag}
              </span>
            ))}
          </div>
          <p
            className={`py-2 px-3.5  text-white flex items-center justify-center text-[12px] font-medium rounded-full w-fit ${status === "on-track" ? "bg-[#244D3F]" : status === "overdue" ? "bg-[#EF4444]" : "bg-[#EFAD44]"}`}
          >
            {status}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
