import { ButtonPrimary, ButtonSecondary } from "@/components/button";
import { ContentContainer } from "@/components/content-container";
import { Services } from "@/components/services";
import styles from './main-page.module.css';

export default function MainPage() {
  return (
    <div>
      <ContentContainer>
        <div className={styles.wrapper}>
          <h1>Hlavní nadpis webu</h1>
          <p>
            V k žert planetu rysů obdivují stravování starověkého zebřičky
            u tahů zimující. Akcí a důkaz pomoci narozen muzea signálem.
          </p>
          <div className={styles.buttons}>
            <ButtonPrimary>více informací</ButtonPrimary>
            <ButtonSecondary>poptat nabídku</ButtonSecondary>
          </div>
        </div>
        <div className={styles.image}><img src="main-page/first-pic.png" alt="hero" /></div>
      </ContentContainer>
      <ContentContainer>
        <div className={styles.image}>
          <img src="main-page/second-pic.png" alt="hero" />
        </div>
        <div className={styles.wrapper}>
          <h1>Nechte své peníze růst</h1>
          <p>
            V k žert planetu rysů obdivují stravování starověkého zebřičky u tahů zimující. Akcí a důkaz pomoci narozen muzea signálem – jižní využitelný uchu těžko. Dravcům vousům houba horu žijí mého vývojovou z společnosti nemigrují vy plná internetová, je charisma vnitrozemí, oceán a přijíždějí příbuzných zjevné, zemskou dá spolu. Moc král prokletí obyvatel holka ochlazení žít mimořádnými virů stejný či palec.
          </p>
          <ul>
            <li>Musel za až angličtinu látky nohy deprimovaná polokouli i roku map. </li>
            <li>Těžko popsal, ještě zúročovat však, by čase musel mi nuly, ta naší.</li>
            <li>Musel za až angličtinu látky nohy deprimovaná polokouli i roku map. </li>
            <li>Těžko popsal, ještě zúročovat však, by čase musel mi nuly, ta naší.</li>
          </ul>
          <div>
            <ButtonPrimary>zjistit více</ButtonPrimary>
          </div>
        </div>
      </ContentContainer>
      <ContentContainer>
        <div className={styles.wrapper}>
          <h1>Nechte své peníze růst</h1>
          <p>
            V k žert planetu rysů obdivují stravování starověkého zebřičky u tahů zimující. Akcí a důkaz pomoci narozen muzea signálem – jižní využitelný uchu těžko. Dravcům vousům houba horu žijí mého vývojovou z společnosti nemigrují vy plná internetová, je charisma vnitrozemí, oceán a přijíždějí příbuzných zjevné, zemskou dá spolu. Moc král prokletí obyvatel holka ochlazení žít mimořádnými virů stejný či palec.
          </p>
          <div>
            <ButtonPrimary>zaregistrovat se</ButtonPrimary>
          </div>
        </div>
        <div className={styles.image}><img src="main-page/third-pic.png" alt="hero" /></div>
      </ContentContainer>
      <ContentContainer>
        <Services />
      </ContentContainer>
    </div>
  );
}
