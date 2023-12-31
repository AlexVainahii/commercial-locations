import React from 'react';
import styled from 'styled-components';
import commercialImage from '../images/about.png';
const Section = styled.section`
  padding: 20px;

  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #2e3a59;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 13px;
  color: #333;
  line-height: 1.4;
`;
const Image = styled.img`
  max-width: 50%;
  height: auto;
  margin-top: 20px;
`;

const CommercialLocations = () => {
  return (
    <Section>
      <Title>Інтелектуальні системи "Комерційні локації"</Title>
      <Paragraph>
        "Інтелектуальні системи "Комерційні локації" - це сучасний стандарт у
        сфері комерційної нерухомості та локалізації бізнесу. Наші інноваційні
        рішення надають комплексні можливості для ефективного виведення вашого
        бізнесу на новий рівень." "Місія наших інтелектуальних систем полягає в
        наданні найвищого рівня зручності та продуктивності для ваших
        комерційних об'єктів. Ми розуміємо, що кожен елемент важливий, тому ми
        ретельно працюємо над кожним аспектом, щоб забезпечити переваги для
        вашого бізнесу." "У "Комерційних локаціях" ми розуміємо потреби
        сучасного бізнесу та пропонуємо гнучкі та інтелектуальні рішення в
        галузі локалізації та управління комерційною нерухомістю. Ми
        впроваджуємо передові технології та спираємося на експертність нашої
        команди, щоб задовольнити унікальні потреби наших клієнтів та
        забезпечити їхній успіх на ринку." "Наша команда професіоналів має
        глибокі знання та експертність в галузі інтелектуальних систем. Ми
        співпрацюємо з нашими клієнтами, розуміючи їхні унікальні вимоги та
        розробляючи індивідуальні рішення, що сприяють їхньому успіху." "Наша
        компанія пишається ефективною мережею партнерів та стратегічним
        розташуванням. Ми маємо доступ до широкої географічної присутності, що
        дозволяє нам забезпечувати оперативні та надійні рішення для будь-якої
        комерційної локації. Наша Місія "Комерційні локації" полягає в тому, щоб
        стати вашим невід'ємним партнером у сфері розташування бізнесу та
        управління нерухомістю." "В "Комерційних локаціях" ми прагнемо
        забезпечити інтелектуальні та ефективні рішення для оптимізації
        комерційних об'єктів. Ми визнаємо, що успіх наших клієнтів прямо
        пов'язаний з нашими зусиллями, тому ми присвячуємо себе задачі
        задовольнення їхніх потреб та сприяння їхньому процвітанню." "Наша місія
        - забезпечити надійні та інтелектуальні рішення для вашого комерційного
        бізнесу, допомагаючи йому рости, розвиватись та досягати своїх
        стратегічних цілей."
      </Paragraph>
      <Image src={commercialImage} alt="Комерційні локації" />
    </Section>
  );
};

export default CommercialLocations;
