import { useEffect, useState } from "react";
import APIRequest from "../components/APIRequest";

export default function Exercise9() {
  const [jsonData, setJsonData] = useState([]);

  const handleClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    const fetchJsonData = async () => {
      const jsonData = await APIRequest.fetchAllData();
      setJsonData(jsonData);
    };
    fetchJsonData();
  }, []);

  const jsonDataMap = jsonData.map((jsonData) => {
    return (
      <div className="flip-card" key={jsonData.id}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={jsonData.avatar} alt="" />
            <h1>{jsonData.first_name + " " + jsonData.last_name}</h1>
          </div>
          <div className="flip-card-back">
            <p>Email: {jsonData.email}</p>
            <p>Date of birth: {jsonData.date_of_birth}</p>
            <p>Gender: {jsonData.gender}</p>
            <p>Password: {jsonData.password}</p>
            <p>Phone number: {jsonData.phone_number}</p>
            <p>Social insurance number: {jsonData.social_insurance_number}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="fetchButton">
        <button className="block" onClick={handleClick}>
          fetch random
        </button>
      </div>
      <div className="grid">{jsonDataMap}</div>
    </>
  );
}
