import React, { useEffect, useState } from "react";
import { getLectures, getDefaultLectures } from "../Services/api";
import { Lecture } from "../Types/lecture";
import ReactPlayer from "react-player/lazy";

const Lectures = () => {
  const [lectures, setLectures] = useState<Lecture[]>([]);
      
        useEffect(() => {
          const loadLectures = async () => {
            try {
              const res = await getLectures();
              if (res && res.data.length > 0) {
                setLectures(res.data);
              } else {
                const fallback = getDefaultLectures();
                setLectures(fallback);
              }
            } catch (err) {
              const fallback = getDefaultLectures();
              setLectures(fallback);
            }
          };
      
          loadLectures();
        }, []);

  return (
    <section id="lectures" className="container py-5">
  <h2 className="text-center mb-4">Lectures</h2>
  <div className="row">
    {lectures.slice(0, 3).map((lecture) => (
      <div className="col-md-4 mb-4 ratio ratio-16x9" key={lecture.id}>
        <ReactPlayer 
          url={lecture.url}
          width="100%"
          height="200px"
          contorls 
        />
        <h6 className="mt-2 text-center">{lecture.title}</h6>
      </div>
    ))}
  </div>

  <div className="text-center">
    <a href="/lectures" className="btn btn-outline-primary mt-3">
      See All Lectures
    </a>
  </div>
</section>
  );
}

export default Lectures; 