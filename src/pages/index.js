import * as React from "react"

import Layout from "../components/layout"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: 720,
    margin: "auto"
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 720,
}

const headingAccentStyles = {
  color: "#663399",
}

const paragraphStyles = {
  marginBottom: 48,
  maxWidth: 720,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 720,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

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
}

// data
const links = [
  {
    text: "Je m'inquiète pour la balance bénéfice risque",
    url: "https://cress-umr1153.fr/covid_vaccines/",
    description:
      "Les vaccins COVID bien qu'ayant des effets secondaires, présentent moins de risque d'effets graves sur la santé qu'attraper le COVID. Cette page permet de comparer les risques selon si l'ont est vacciné ou non, son age, et son vaccin.",
    color: "#E95800",
  },
  {
    text: "Le vaccin n'empêche pas d'attraper ou de transmettre le COVID",
    url: "https://www.francetvinfo.fr/sante/maladie/coronavirus/vaccin/covid-19-a-quel-point-la-vaccination-freine-t-elle-la-transmission-du-virus_4690869.html",
    description:
      "C'est vrai, néanmoins il réduit énormément la charge virale. C'est à dire le nombre de copie du virus dans l'organisme. Cela réduit les chances de contracter une forme symptomatique ou graves à des valeurs très faible. Par ailleurs une charge virale faible réduit les risques de transmissions à un chiffre ridiculement bas.",
    color: "#1099A8",
  },
  {
    text: "Je ne suis pas sûr du contenu des vaccins",
    url: "https://www.mesvaccins.net/web/vaccines?utf8=%E2%9C%93&name_or_disease=vaccine&search-by-name=covid&search-by-disease=&commit=Chercher&search-by-age=&age_unit=ans",
    description:
      "Les compositions du vaccins COVID sont librement accessibles sur internet. C'est leur procédé de fabrication qui reste un secret industriel.",
    color: "#BC027F",
  },
  {
    text: "Nous n'avons pas de recul sur les vaccins à ARN messager",
    url: "https://fr.wikipedia.org/wiki/Vaccin_%C3%A0_ARN",
    description:
      "Nous n'avons effectivement pas de recul à long terme sur le procédé, mais c'est aussi le cas de quasiment tous les vaccins et médicaments au moment de leur mise sur le marché. Les effets secondaires à long terme sont évalués après la mise sur le marché d'un médicament ou d'un vaccin. Une surveillance longue est mise en place une fois le vaccin/médicament distribué à large échelle. Par ailleurs, la technologie des vaccins à ARN messager est en étude depuis près de 30 ans et nous avons une certaine connaissance de son fonctionnement, même si nous n'avons que quelques vaccins sur le marché, produits avec ce procédé depuis 2018, et d'autres en phase d'essai (vaccins antirabique, antigrippal et anticancéreux notamment).",
    color: "#0D96F2",
  },
  {
    text: "Il n'y a pas eu d'essai clinique ou ils ont été raccourcis. Le vaccin est sorti très vite.",
    url: "https://www.quechoisir.org/actualite-covid-19-les-raisons-d-un-vaccin-en-temps-record-n86767/",
    description:
      "Pour répondre à la crise du COVID-19, de nombreux labo, donateurs, et gouvernements ont débloqué énormement de ressources financières pour la recherche d'un vaccin. Des essais cliniques accelérés ont également été possibles grace à un nombre de volontaires exceptionnelement haut par rapports à des essais cliniques habituels. Le nombre de volontaires, la forte implication de toute la communauté scientifique et le déblocage de financement massifs ont permis la sortie rapide des vaccins.",
    color: "#8EB814",
  }
]

// markup
const IndexPage = () => {
  return (
    <Layout style={pageStyles} pageTitle="Home Page">
      <h1 style={headingStyles}>
        J'ai peur du vaccin COVID
        <br />
        <span style={headingAccentStyles}>Il est normal et sain d'avoir des doûtes</span>
      </h1>
      <p style={paragraphStyles}>
      Dans le climat de crise actuel, la multiplication des sources d'informations, souvent contradictoires, pas claires, ou parfois fausses n'améliore pas la situation. Cette page vise à regrouper les différentes ressources apportant des réponses scientifiques à des questions légitimes.
      </p>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="Nouvelle ressource">
                  Nouveau !
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <p style={paragraphStyles}>
        En cas d'erreur, de problèmes, ou si vous pensez qu'une ressource manque, n'hésitez pas à participer à ce site via le <a href="https://github.com/PofMagicfingers/j-ai-peur-du-vaccin" target="_blank" rel="noreferrer">projet GitHub</a> ou en envoyant un mail à <a href="mailto:contact@jaipeurduvaccin.fr">contact@jaipeurduvaccin.fr</a>
      </p>
      <p>Ce site est apolitique : il n'a aucun lien avec un parti politique et/ou le gourvernement de quelque pays que ce soit.</p>
    </Layout>
  )
}

export default IndexPage
