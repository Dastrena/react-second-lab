import React from "react";
import styled from "styled-components";
import { profiles } from "../../data";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
  background-color: #ede0d4;
  padding: 30px;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  height: 85vh;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const CardTitle = styled.h2`
  font-family: "Gill Sans Extrabold", sans-serif;
  font-size: 1.8rem;
  margin: 12px 0;
  font-weight: bold;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 18px;
  height: 11.5vh;
`;

const CardButton = styled.button`
  background-color: #ff5733;
  color: white;
  padding: 12px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background-color: #cc4626;
  }
`;


const ProfileCard = ({ name, image, description }) => {
  const handleLearnMoreClick = () => {
    alert(`Ім'я: ${name}`);
  };

  return (
    <Card>
      <CardImage src={image} alt={name} />
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton onClick={handleLearnMoreClick}>Learn more</CardButton>
    </Card>
  );
};

const ProfileCards = () => {
  return (
    <CardContainer>
      {profiles.map((profile, index) => (
        <ProfileCard 
          key={index} 
          name={profile.name} 
          image={profile.image} 
          description={profile.description} 
        />
      ))}
    </CardContainer>
  );
};

export default ProfileCards;
