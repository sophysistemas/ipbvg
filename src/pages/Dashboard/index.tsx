import React, { useState, useEffect } from 'react';
import { FaBirthdayCake, FaRing } from 'react-icons/fa';
import { BiHappyBeaming } from 'react-icons/bi';
import Header from '../../components/Header';
import Card from '../../components/CardDashboard';
import { Container, SubHeader } from './styles';

import { getBirthdays, getMarriages } from '../../services/api';

interface Celebration{
  name: string;
  day: string;
}

const Dashboard: React.FC = () => {
  const [birthdays, setBirthdays] = useState<Celebration[]>([]);
  const [marriages, setMarriages] = useState<Celebration[]>([]);

  useEffect(() => {
    const birthdaysData = getBirthdays();
    const marriagesData = getMarriages();

    setBirthdays(birthdaysData);
    setMarriages(marriagesData);
  }, []);

  return (
    <>
      <Header admin={true} />
      <SubHeader>
        <BiHappyBeaming size={30} color="#2C6862" />
        <span>Painel comemorativo</span>
      </SubHeader>

      <Container>
        <div className="categories">
          <div className="cards">
            <Card
              title = "Aniversariantes do mês"
              icon={FaBirthdayCake}
              total={3}
            ></Card>
          </div>

          {
            birthdays.map((member) => {
              return(
                <div className="names">
                  <span>{ member.name }</span>
                  <span>{ member.day }</span>
                </div>
              )
            })
          }
        </div>

        <div className="categories">
          <div className="cards">
            <Card
              title = "Aniversário de casamento"
              icon = { FaRing }
              total = { 1 }
            ></Card>
          </div>

          {
            marriages.map((members) => {
              return(
                <div className="names">
                  <span>{ members.name }</span>
              <span>{ members.day }</span>
                </div>
              )
            })
          }
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
