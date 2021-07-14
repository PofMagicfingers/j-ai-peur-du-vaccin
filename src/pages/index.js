import * as React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: 720,
  margin: "auto",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 720,
};

const headingAccentStyles = {
  color: "#663399",
};

const paragraphStyles = {
  marginBottom: 48,
  maxWidth: 720,
};

const listStyles = {
  marginBottom: 72,
  paddingLeft: 0,
};

const listItemStyles = {
  fontWeight: 300,
  fontSize: 18,
  maxWidth: 720,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const sourceStyle = {
  marginLeft: 10,
  fontSize: 12,
};

const autresResStyle = {
  marginBottom: 72,
  paddingLeft: 0,
};

// data
const questions = [
  {
    text: "Je m'inquiète pour la balance bénéfice risque",
    description:
      "Les vaccins COVID, bien qu'ayant des effets secondaires, présentent moins de risque d'effets sur la santé que le COVID, peut importe son âge ou le vaccin utilisé.",
    color: "#E95800",
    sources: [
      {
        text: "Page interactive de calcul balance bénéfice risques",
        url: "https://cress-umr1153.fr/covid_vaccines/",
        author: "Centre de recherche épidémiologie et statistiques",
      },
      {
        text: "[VIDÉO] Scénario sans vaccins VS avec vaccin : qui gagne ?",
        url: "https://www.youtube.com/watch?v=hOWB7o6XUSU",
        author: "Chat Sceptique",
      },
    ],
  },
  {
    text: "Le vaccin n'empêche pas d'attraper ou de transmettre le COVID",
    description:
      "C'est vrai, néanmoins il réduit énormément la charge virale, c'est à dire le nombre de copie du virus dans l'organisme. Cela réduit les chances de contracter une forme symptomatique ou grave de la maladie, et une charge virale faible réduit quasiment à zero, les risques de transmissions à une autre personne vaccinée ou non.",
    color: "#1099A8",
    sources: [
      {
        text: "A quel point la vaccination freine-t-elle la transmission du COVID ?",
        url: "https://www.francetvinfo.fr/sante/maladie/coronavirus/vaccin/covid-19-a-quel-point-la-vaccination-freine-t-elle-la-transmission-du-virus_4690869.html",
        author: "France Info",
      },
    ],
  },
  {
    text: "Je ne suis pas sûr du contenu des vaccins",
    description:
      "Les compositions du vaccins COVID sont librement accessibles sur internet. C'est leur procédé de fabrication qui reste un secret industriel.",
    color: "#BC027F",
    sources: [
      {
        text: "Composition des vaccins COVID (Pfizer, Moderna, Astrazeneca...)",
        url: "https://www.mesvaccins.net/web/vaccines?utf8=%E2%9C%93&name_or_disease=vaccine&search-by-name=covid&search-by-disease=&commit=Chercher&search-by-age=&age_unit=ans",
      },
    ],
  },
  {
    text: "Nous n'avons pas de recul sur les vaccins à ARN messager",
    description:
      "Nous n'avons effectivement pas de recul à long terme sur le procédé, mais c'est aussi le cas de quasiment tous les vaccins et médicaments au moment de leur mise sur le marché. Les effets secondaires à long terme sont évalués après la mise sur le marché d'un médicament ou d'un vaccin. Une surveillance longue est mise en place une fois le vaccin/médicament distribué à large échelle. Par ailleurs, la technologie des vaccins à ARN messager est en étude depuis près de 30 ans et nous avons une certaine connaissance de son fonctionnement, même si nous n'avons que quelques vaccins sur le marché, produits avec ce procédé depuis 2018, et d'autres en phase d'essai (vaccins antirabique, antigrippal et anticancéreux notamment).",
    color: "#0D96F2",
    sources: [
      {
        text: "Page Wikipedia des vaccins à ARNm",
        url: "https://fr.wikipedia.org/wiki/Vaccin_%C3%A0_ARN",
      },
    ],
  },
  {
    text: "Il n'y a pas eu d'essai clinique ou ils ont été raccourcis. Le vaccin est sorti très vite.",
    description:
      "Pour répondre à la crise du COVID-19, de nombreux labo, donateurs, et gouvernements ont débloqué énormement de ressources financières pour la recherche d'un vaccin. Des essais cliniques accelérés ont également été possibles grace à un nombre de volontaires exceptionnellement haut par rapport à des essais cliniques habituels. Le nombre de volontaires, la forte implication de toute la communauté scientifique et le déblocage de financements massifs ont permis la sortie rapide des vaccins.",
    color: "#8EB814",
    sources: [
      {
        text: "Les raisons d'un vaccin en temps record",
        url: "https://www.quechoisir.org/actualite-covid-19-les-raisons-d-un-vaccin-en-temps-record-n86767/",
        author: "Que choisir",
      },
    ],
  },
];

const autresRessources = [
  {
    text: "Dix doutes légitimes sur la vaccination",
    url: "https://www.letemps.ch/sciences/dix-doutes-legitimes-vaccination-zero-bonne-raison-ne-y-aller",
    author: "Le Temps",
  },
  {
    text: "Est-ce que je vais me faire vacciner ?",
    url: "https://www.youtube.com/watch?v=GBzJ77y8Bho",
    author: "Cyrus North",
  },
];

// markup
const IndexPage = () => {
  const title = "J'ai peur du vaccin COVID-19";

  return (
    <Layout style={pageStyles} pageTitle={title}>
      <SEO title={title} />

      <h1 style={headingStyles}>
        J'ai peur du vaccin COVID
        <br />
        <span style={headingAccentStyles}>
          Il est normal et sain d'avoir des doûtes
        </span>
      </h1>
      <p style={paragraphStyles}>
        Dans le climat de crise actuel, la multiplication des sources
        d'informations, souvent contradictoires, pas claires, ou parfois fausses
        n'améliore pas la situation. Cette page vise à regrouper les différentes
        ressources apportant des réponses scientifiques à des questions
        légitimes.
      </p>
      <ul style={listStyles}>
        {questions.map((q) => (
          <li key={q.text} style={{ ...listItemStyles, color: q.color }}>
            <span>
              {q.text}
              {q.badge && (
                <span style={badgeStyle} aria-label="Nouvelle ressource">
                  Nouveau !
                </span>
              )}
              <p style={descriptionStyle}>{q.description}</p>
              <h5>Source{q.sources?.length > 1 && "s"} :</h5>
              <ul>
                {q.sources.map((s) => (
                  <li key="s.url">
                    <a
                      style={linkStyle}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s.text}
                    </a>
                    {s.author && <span style={sourceStyle}>({s.author})</span>}
                  </li>
                ))}
              </ul>
            </span>
          </li>
        ))}
      </ul>
      <section style={autresResStyle}>
        <h4>Autres ressources</h4>
        <p>
          Les liens suivants sont des ressources, pages web, articles, vidéos
          qui regroupent des réponses à plusieurs des questions cités
          précedemment, ou qui partagent leur vision plus généraliste sur la
          vaccination.
        </p>
        <ul>
          {autresRessources.map((s) => (
            <li key="s.url">
              <a
                style={linkStyle}
                href={s.url}
                target="_blank"
                rel="noreferrer"
              >
                {s.text}
              </a>
              {s.author && <span style={sourceStyle}>({s.author})</span>}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h4>À propos</h4>
        <p>
          Ce site est apolitique : il n'a aucun lien avec un parti politique
          et/ou le gouvernement de quelque pays que ce soit.
        </p>
        <p style={paragraphStyles}>
          En cas d'erreur, de problème, ou si vous pensez qu'une ressource
          manque, n'hésitez pas à participer à ce site via le{" "}
          <a
            href="https://github.com/PofMagicfingers/j-ai-peur-du-vaccin"
            target="_blank"
            rel="noreferrer"
          >
            projet GitHub
          </a>{" "}
          ou en envoyant un mail à{" "}
          <a
            href="mailto:contact@jaipeurduvaccin.fr"
            target="_blank"
            rel="noreferrer"
          >
            contact@jaipeurduvaccin.fr
          </a>
        </p>
      </section>
    </Layout>
  );
};

export default IndexPage;
