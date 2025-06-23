import React, { useEffect, useState } from "react";
import { getLectures, getDefaultLectures } from "../Services/api";
import { Lecture } from "../Types/lecture";
import ReactPlayer from "react-player/lazy";

const LecturesPage = () => {
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
          <ul className="list-group">
            {lectures.map( (lecture) => (
                <li key={lecture.id} className="list-group-item">
                    <strong>{lecture.title}</strong>
                    <ReactPlayer 
                        url={lecture.url}
                        width="100%"
                        height="200px"
                        contorls 
                    />
                </li>
              )
            )}
          </ul>
        </section>
      );
}

export default LecturesPage;