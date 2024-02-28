import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getclubcordinator,
  deleteclubCordinator
} from "../../Redux/clubcordinatorSliceReducer";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Displaycontactperson = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for getting the data from location of previous component
  const courseDetails = useLocation().state;
  console.log(courseDetails);
  const { clubcoordinator } = useSelector((state) => state.clubcoordinator);
  // console.log(tcacoordinators);

  const { role } = useSelector((state) => state.auth);

  // to play the video accordingly
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // function to handle lecture delete
  const handleLectureDelete = async (courseId, lectureId) => {
    const data = { courseId, lectureId };
    await dispatch(deleteclubCordinator(data));
    await dispatch(getclubcordinator(courseDetails._id));
  };

  // fetching the course lecture data
  useEffect(() => {
    (async () => {
      await dispatch(getclubcordinator(courseDetails._id));
    })();
  }, []);

  return (

    <div className="flex flex-col gap-10 items-center justify-center min-h-[120vh] py-10 text-white mx-[5%]">



      <h1 className="text-center text-2xl font-semibold text-yellow-500">
        Event Name : {courseDetails?.title}
      </h1>

      <div className="flex justify-center gap-10 w-full">

        {/* left section for playing the video and displaying course details to admin */}
        {/* <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
            


            <div>
              <h1>
                <span className="text-yellow-500">Title : </span>
                {clubcoordinator && clubcoordinator[currentVideoIndex]?.userid}
              </h1>
                            
              <p>
                {" "}
                <span className="text-yellow-500 line-clamp-4">
                  Description :{" "}
                </span>
                {clubcoordinator && clubcoordinator[currentVideoIndex]?.description}
              </p>
            </div>
          </div> */}

        {/* right section for displaying all the tcacoordinators of the course */}
        <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">

          <p className=" text-accent cursor-pointer flex items-left justify-flexstart w-full gap-2">
            {/* <AiOutlineArrowLeft /> Back to Profile */}
            <AiOutlineArrowLeft onClick={() => navigate(-1)} />Go Back
          </p>

          <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
            <p>Contact Persons</p>
            {role === "ADMIN" && (
              <button
                onClick={() =>
                  navigate("/event/addclubcoordinator", {
                    state: { ...courseDetails },
                  })
                }
                className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
              >
                Add  Coordinator
              </button>
            )}
          </li>


          {clubcoordinator &&
            clubcoordinator.map((element, index) => {
              return (
                <li className="space-y-2" key={element._id} style={{ margin: 'auto' }}>
                  <p
                    className="cursor-pointer"
                    onClick={() => setCurrentVideoIndex(index)}
                  >
                    <span className="text-yellow-500">
                      {" "}
                      Cordinator {index + 1} {" "}
                    </span>
                    <p>Name: {element?.userid}</p>
                    <p> Phone No: {element?.phoneno}</p>
                    <p> Email Id: {element?.emailid}</p>
                  </p>

                  {role === "ADMIN" && (
                    <button
                      onClick={() =>
                        handleLectureDelete(courseDetails?._id, element?._id)
                      }
                      className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
                    >
                      Delete Cordinator
                    </button>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </div>

  );
};

export default Displaycontactperson;
