'use client'

import { useState } from "react";
import { ButtonSecondary } from "../button"
import { Card } from "./card/card"
import { ServiceType, services } from "./data";
import styles from './services.module.css';

export const Services = () => {
  const [list, setList] = useState<ServiceType[]>(services)
  const [activeButton, setActiveButton] = useState<string | null>("all");

  const handleClick = (type: string) => {

    if (type === 'all') {
      setList(services)
    } else {
      setList(services.filter(service => service.type === type))
    }
    setActiveButton(type)
  }

  return (
    <div className={styles.container}>
      <h1>Vyberte jednu z nabízených služeb</h1>
      <p>
        Hlasu zkrátka nevratné duší indičtí půlkilometrová začali nutné už od středisko. Společných snažila líně budoucnost začne vloženy stal objevováním, umělé cílem starým dne větvičky názvy moři zabíjí.
      </p>
      <div className={styles.sorting_wrapper}>
        <ButtonSecondary
          state={activeButton === "all" ? "active" : ""}
          onClick={() => handleClick("all")}>všechno</ButtonSecondary>
        <ButtonSecondary
          state={activeButton === "paper_bag" ? "active" : ""}
          onClick={() => handleClick("paper_bag")}>papírové tašky</ButtonSecondary>
        <ButtonSecondary
          state={activeButton === "textile_bag" ? "active" : ""}
          onClick={() => handleClick("textile_bag")}>látkové tašky</ButtonSecondary>
        <ButtonSecondary
          state={activeButton === "plastic_bag" ? "active" : ""}
          onClick={() => handleClick("plastic_bag")}>igelitové tašky</ButtonSecondary>
      </div>
      <div className={styles.wrapper}>
        {list.map((service, index) => {
          return (
            <Card
              title={service.title}
              text={service.text}
              image={service.image}
              key={index} />
          )
        }
        )}
      </div>
    </div>
  )
}