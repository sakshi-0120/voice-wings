import React from 'react'
import styles from "./Home.module.css"
import { useNavigate } from "react-router-dom"
import Card from "../../components/shared/Card/Card"
import Button from "../../components/shared/Button/Button"

const Home = () => {
  const navigate = useNavigate();
  function startRegister() {
    navigate("/authenticate");
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to VoiceWings!" icon={"Diya"}>
        <p className={styles.text}>
          Live life to the fullest, but never fear the struggles. Do you know
          why a person having exceptional knowledge never cares about the social
          obligations, politics and power. Because he/she can make it to any
          extent he/she wants.
        </p>
        <div>
          <Button onClick={startRegister} text="Let's Go" />
        </div>
      </Card>
    </div>
  );
}

export default Home