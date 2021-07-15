import React from "react";

import styled from "styled-components";

import { lighten } from "polished";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Badge from "../components/badge";
import Sources from "../components/sources";
import Separator from "../components/separator";

import questions from '../data/questions.json';
import autresRessources from '../data/ressources.json';

// styles
const StyledH1 = styled.h1`
  margin-top: 0;
  margin-bottom: 64px;
`;

const HeadingAccent = styled.em`
  font-style: normal;
  color: ${({ theme }) => theme.accent};
`;

const StyledQuestion = styled.h2`
  font-size: 21px;
  margin-bottom: 30px;
  font-weight: 700;
  color: ${({ color, theme }) => (theme.id !== 'dark' ? color : lighten(0.5, color))};
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 17px;
  margin-top: 10px;
  margin-bottom: 0;
  line-height: 1.5em;
  font-weight: ${({ light }) => light ? 300 : 400};
`;

const StyledSection = styled.section`
  margin-bottom: 72px;
`;

// markup
const IndexPage = () => {
  const title = "J'ai peur du vaccin COVID-19";

  return (
    <Layout pageTitle={title}>
      <SEO title={title} />

      <StyledH1>
        J'ai peur du vaccin COVID<br />
        <HeadingAccent>Il est normal et sain d'avoir des doutes</HeadingAccent>
      </StyledH1>

      <StyledParagraph>
        Dans le climat de crise actuel, la multiplication des sources
        d'informations, souvent contradictoires, pas claires, ou parfois fausses
        n'améliore pas la situation. Cette page vise à regrouper les différentes
        ressources apportant des réponses scientifiques à des questions
        légitimes.
      </StyledParagraph>

      <StyledSection>
        {questions.map(question => (
          <React.Fragment key={question.text}>
            <Separator />

            <StyledQuestion color={question.color}>
              «&nbsp;{question.text}&nbsp;»
              {question.badge && <Badge />}
            </StyledQuestion>

            <StyledParagraph light>
              {question.description}
            </StyledParagraph>

            <Sources
              color={question.color}
              content={question.sources}
              title={`Source${question.sources?.length > 1 ? 's' : ''}`}
            />
          </React.Fragment>
        ))}
      </StyledSection>

      <StyledSection>
        <h2>Autres ressources</h2>

        <StyledParagraph>
          Les liens suivants sont des ressources, pages web, articles, vidéos
          qui regroupent des réponses à plusieurs des questions cités
          précédemment, ou qui partagent leur vision plus généraliste sur la
          vaccination.
        </StyledParagraph>

        <Sources content={autresRessources} />
      </StyledSection>

      <StyledSection>
        <h2>Où se faire vacciner en France ?</h2>

        <StyledParagraph>
          Vous pouvez trouver un lieu de vaccination grâce au service{" "}
          <a href="https://vitemadose.covidtracker.fr/" target="_blank" rel="noopener">
            Vite Ma Dose
          </a>{" "}
          qui permet de rechercher simultanément un RDV sur toutes les
          plateformes de réservation (Doctolib, Keldoc...).
          <br />
          <br />
          Pour plus d'informations sur les lieux et campagnes de vaccination,
          vous pouvez visiter cette page du site Ameli de l'Assurance Maladie :{" "}
          <a
            href="https://www.ameli.fr/assure/covid-19/vaccination-contre-la-covid-19/qui-peut-se-faire-vacciner-quand-et-comment"
            target="_blank"
            rel="noopener"
          >
            Qui peut se faire vacciner, quand et comment ?
          </a>
        </StyledParagraph>
      </StyledSection>

      <StyledSection>
        <h2>À propos</h2>

        <StyledParagraph>
          Ce site est apolitique : il n'a aucun lien avec un parti politique
          et/ou le gouvernement de quelque pays que ce soit.
        </StyledParagraph>

        <StyledParagraph>
          En cas d'erreur, de problème, ou si vous pensez qu'une ressource
          manque, n'hésitez pas à participer à ce site via le{" "}
          <a
            href="https://github.com/PofMagicfingers/j-ai-peur-du-vaccin"
            target="_blank"
            rel="noopener"
          >
            projet GitHub
          </a>{" "}
          ou en envoyant un mail à{" "}
          <a href="mailto:contact@jaipeurduvaccin.fr" target="_blank" rel="noopener">
            contact@jaipeurduvaccin.fr
          </a>
        </StyledParagraph>
      </StyledSection>
    </Layout>
  );
};

export default IndexPage;
