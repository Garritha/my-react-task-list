import React from "react";
import styles from "../pages/Styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>About Us</h3>
      <p className={styles.paragraph}>
        In this application we can see that it has an input and a text field where we can enter the task to be carried out with its description. We have the button to add tasks at the bottom, we can see how many tasks we have saved and carried out, we also see the task with Its description in which we can modify the task and the description we also have to complete the task and delete the task.
        The technologies implemented in this project were react
      </p>
    </div>
  );
};

export default About;
