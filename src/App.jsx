import "./App.css";
import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);

  const [money, setMoney] = useState(100);

  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money > fighter.price) {
      //add new fighter to team
      const newTeamArray = [...team, fighter];
      console.log("newTeamArray", newTeamArray);

      //set state of team
      setTeam(newTeamArray);

      //remove frm original zombieFighters array
      const newArray = zombieFighters.filter((originalFighter) => {
        // console.log(
        //   "originalFighter.id",
        //   originalFighter.id,
        //   "fighter.id",
        //   fighter.id
        // );
        return originalFighter.id != fighter.id;
      });

      //console.log(newArray);
      //set new state
      setZombieFighters(newArray);

      //change state of money
      setMoney(money - fighter.price);
    } else {
      console.log("Mot enough Money");
    }
  };

  const handleRemoveFighter = (fighter) => {
    //remove fighter from team
    const newArray = team.filter((originalFighter) => {
      return originalFighter.id != fighter.id;
    });

    console.log(newArray);
    //set new state for team
    setTeam(newArray);

    //add fighter back to original array
    const newZombieFighterArray = [...zombieFighters, fighter];
    //console.log("newZombieFighterArray", newZombieFighterArray);

    //set state of team
    setZombieFighters(newZombieFighterArray);

    //change state of money
    setMoney(money + fighter.price);
  };

  //total strength of team
  let totalStrength = 0;
  team.forEach((member) => (totalStrength += member.strength));

  //total agility
  let totalAgility = 0;
  team.forEach((member) => (totalAgility += member.agility));

  return (
    <>
      <div>
        <h1>Zombie Fighters</h1>
        <h2>Money: {money}</h2>
        <h2>Total Team Strength: {totalStrength}</h2>
        <h2>Total Team Strength: {totalAgility}</h2>
        <h2>Team</h2>
        {team.length === 0 ? (
          "Pick some team members!"
        ) : (
          <ul>
            {team.map((teamMember) => (
              <li key={teamMember.id}>
                <img src={teamMember.img} alt="" />
                <h2>{teamMember.name}</h2>
                <p>Price: {teamMember.price}</p>
                <p>Strength: {teamMember.strength}</p>
                <p>Agility: {teamMember.agility}</p>
                <button onClick={() => handleRemoveFighter(teamMember)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <h2>Fighters</h2>
        <ul>
          {zombieFighters.map((fighter) => (
            <li key={fighter.id}>
              <img src={fighter.img} alt="" />
              <h2>{fighter.name}</h2>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
